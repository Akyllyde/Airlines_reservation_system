const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const mysql = require("mysql")
const path = require('path')

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});


const mainMenuTemplate = [
  {
    label:'&Biman',
    submenu:[
      {
        role: 'Reload'
      },
      {
        role: 'forceReload'
      },
      {
        role: 'togglefullscreen'
      },
      {
        role: 'toggledevtools'
      },
      {
        role: 'quit',
        accelerator: process.platform == 'darwin' ? 'command+Q' : 'ctrl+Q'
      }
    ]
  },
  {
    label: '&Help',
    submenu:[
      {
        label: 'Documenatation',
        click(){
          if (docsWindow) docsWindow.close();
          if (KbdShorts) KbdShorts.close();
          if (About) About.close();
          addDocsWindow();
        }
      },
      {
        label: 'Keyboard Shortcuts Reference',
        accelerator: process.platform == 'darwin' ? 'command+K' : 'ctrl+K',
        click(){
          if (docsWindow) docsWindow.close();
          if (KbdShorts) KbdShorts.close();
          if (About) About.close();
          addKbdShorts();
        }
      },
      {
        label: 'About',
        click(){
          if (docsWindow) docsWindow.close();
          if (KbdShorts) KbdShorts.close();
          if (About) About.close();
          addAboutWindow();
        }
      }
    ]
  }
];


function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 650,
    backgroundColor: '#2b2e3b',
    title: 'Airlines Reservation System',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      //devTools: false
    }
  })

  mainWindow.loadFile('./window/main/frame/admin.html');

  let mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  mainWindow.setMenu(mainMenu)

  mainWindow.on('closed', ()=>{
    app.quit();
  });

  return mainWindow;
}

let docsWindow;

function addDocsWindow () {
  docsWindow = new BrowserWindow({
    width: 450,
    height: 550,
    backgroundColor: '#2b2e3b',
    titleBarStyle: 'hidden',
    titleBarOverlay:{
      color: '#2e2c29',
      symbolColor: 'orangered'
    }
  })

  docsWindow.loadFile('./window/docs.html');

  docsWindow.setMenu(Menu.buildFromTemplate([]))

  docsWindow.on('close', ()=>{
    docsWindow = null;
  })
}

let KbdShorts;

function addKbdShorts () {
  KbdShorts = new BrowserWindow({
    width: 450,
    height: 550,
    backgroundColor: '#2b2e3b',
    titleBarStyle: 'hidden',
    titleBarOverlay:{
      color: '#2e2c29',
      symbolColor: 'orangered'
    },
  })

  KbdShorts.loadFile('./window/kbdshorts.html');

  KbdShorts.setMenu(Menu.buildFromTemplate([]))

  KbdShorts.on('close', ()=>{
    KbdShorts = null;
  })
}

let About;

function addAboutWindow () {
  About = new BrowserWindow({
    width: 700,
    height: 500,
    backgroundColor: '#2b2e3b',
    titleBarStyle: 'hidden',
    titleBarOverlay:{
      color: '#2e2c29',
      symbolColor: 'orangered'
    },
  })

  About.loadFile('./window/about.html');

  About.setMenu(Menu.buildFromTemplate([]))

  About.on('close', ()=>{
    About = null;
  })
}



app.whenReady().then(() => {
  let win = createWindow()
  loginPageComms(win)
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
//software design end
















function loginPageComms(mainWindow){
//sign in ipc
  ipcMain.on("sign-in-msg", (event, data) => {
    let sql = `SELECT pass, role FROM user_data WHERE email='${data.e}';`;
  
    connection.connect((err) => {
      if (err) event.reply("sign-up-reply", err.sqlMessage);
      connection.query(sql, (err, result) => {
        if (err) event.reply("sign-up-reply", err.sqlMessage);
        if (result.length === 0) {
          event.reply("sign-in-reply", "User does not exist.");
        } else if (data.pwd === result[0]?.pass) {
          mainWindow.loadFile(`./window/main/frame/${result[0].role}.html`);
        } else if(data.pwd != result[0]?.pass){
          event.reply("sign-in-reply", "Wrong password. Try again.");
        }
      });
    });
  });
  
  //sign up ipc
  ipcMain.on("sign-up-msg", (event, data) => {
    let sql = `INSERT INTO user_data(email,pass,role) VALUES('${data.e}','${data.pwd}','user');`;
    connection.connect((err) => {
      if (err) event.reply("sign-up-reply", err.sqlMessage);
      connection.query(sql, (err, result) => {
        if (err) event.reply("sign-up-reply", err.sqlMessage);
        mainWindow.loadFile(`./window/main/frame/user.html`)
      });
    });
  });

  //sign out ipc
  ipcMain.on("sign-out", (event, data) => {
    mainWindow.loadFile(`./window/main/frame/login.html`)
  })


  //search flights
  ipcMain.on("search-dom-flight-msg", (event, data) => {
    let sql = `SELECT flight_number, departure, arrival, aircraft FROM domestic_flight_schedule WHERE fromCity='${data.dc}' AND toCity='${data.rc}' AND (days='EVERYDAY' OR days LIKE '%${data.d1}%');`;
    connection.connect((err) => {
      if (err) event.reply("search-dom-flight-reply", err.sqlMessage);
      connection.query(sql, (err, result) => {
        if (err) event.reply("search-dom-flight-reply", err.sqlMessage);
        console.log(result)
        event.reply("search-dom-flight-reply", result);
      });
    });
  });
  




  //save flight info in order
  ipcMain.on("add-flight-order-msg", (event, data) => {
    let sql = `INSERT INTO orders(fromCity,toCity,goTime,arrTime,goDate,flight_number,aircraft) VALUES('${data.f}','${data.t}','${data.gt}','${data.at}','${data.gd}','${data.fn}','${data.ac}');`;
    connection.connect((err) => {
      connection.query(sql, (err, result) => {
        rower(data.f,data.t,data.gd,data,fn,data.ac)
      });
    });
  });




  //save user info in order
  function rower(a,b,c,d,e){

  
  ipcMain.on("add-user-order-msg", (event, data) => {
    let sql = `INSERT INTO orders(uname,uemail,uphone,uaddress,uzip) VALUES('${data.un}','${data.tum}','${data.up}','${data.uad}','${data.uz}') WHERE fromCity='${a}' AND toCity='${b}' AND goDate='${c}' AND flight_number='${d}' AND aircraft='${e}';`;
    connection.connect((err) => {
      connection.query(sql, (err, result) => {

      });
    });
  });
}
}

const { app, BrowserWindow, Menu, ipcMain } = require('electron')
//const mysql = require("mysql")
const path = require('path')


const mainMenuTemplate = [
  {
    label:'&BDAir',
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
    width: 800,
    height: 600,
    title: 'Airlines Reservation System',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  mainWindow.loadFile('./window/main/frame/login.html');

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  mainWindow.setMenu(mainMenu)

  mainWindow.on('closed', ()=>{
    app.quit();
  });
}

let docsWindow;

function addDocsWindow () {
  docsWindow = new BrowserWindow({
    width: 450,
    height: 550,
    title:'Help'
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
    title:'Keyboard Shortcuts Reference'
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
    width: 450,
    height: 550,
    title:'About'
  })

  About.loadFile('./window/about.html');

  About.setMenu(Menu.buildFromTemplate([]))

  About.on('close', ()=>{
    About = null;
  })
}



app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})





//software design end






var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});




ipcMain.on("sign-in-msg", (event, data) => {
  let sql = `SELECT pass, role FROM user_data WHERE email='${data.e}';`;

  connection
    .connect()
    .then(connection.query(sql))
    .then((result) => {
      if (result === []) {
        event.reply("sign-in-reply", "User doesn't exist");
      } else if(data.pwd === result){

        event.reply("sign-in-reply", result);
      }
    })
    .catch((err) => event.reply("sign-in-reply", err));
});


ipcMain.on("sign-up-msg", (event, data) => {
  let sql = `INSERT INTO user_data(email,pass,role) VALUES('${data.e}','${data.pwd}','user');`;

  connection
    .connect()
    .then(connection.query(sql))
    .then(event.reply("sign-up-reply", "success"))
    .catch(err => event.reply("sign-up-reply", err));
});








/*
connection.connect(err => {
  if(err) throw err;
  console.log("connected");
  connection.query(sql, (err, result)=>{
    if (err) throw err;
    console.log(result);
  });
});
*/
const body = document.querySelector("body");
const sign_in_htm = document.querySelector(".sign-in-htm");
const sign_up_htm = document.querySelector(".sign-up-htm");

sign_in_htm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#si_email").value;
  let pass = document.querySelector("#si_pass").value;

  ipcRenderer.send("sign-in-msg", { e: email, pwd: pass });
  ipcRenderer.on("sign-in-reply", (event, reply) => {
    if (Array.isArray(reply)) {
      
    } else {
      warner(reply);
    }
  });
});


sign_up_htm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#su_email").value;
  let pass = document.querySelector("#su_pass").value;
  let passAgain = document.querySelector("#su_pass_again").value;

  if (pass === passAgain) {
    ipcRenderer.send("sign-up-msg", {e:email,pwd:pass});
    ipcRenderer.on("sign-up-reply", (event, reply) => {
      reply === 'success' ? loadHome() : warner(reply)
    });
  } else {
    warner("Passwords don't match");
  }
});

function warner(str) {
  let warn = document.querySelector(".warn");
  warn.style.display = "block";
  warn.innerHTML = str;
}

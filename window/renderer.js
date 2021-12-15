const { ipcRenderer } = require("electron");

const btn = document.querySelector("button");
const result = document.querySelector("#result");
const num = document.querySelector("#num1");

btn.addEventListener("click", () => {
  let digit = num.value;
  ipcRenderer.send("asynchronous-message", digit);
  ipcRenderer.on("asynchronous-reply", (event, arg) => {
    result.innerHTML = arg;
  });
});

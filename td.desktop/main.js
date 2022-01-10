'use strict';

const electron = require('electron');
const URL = "http://localhost:3000";

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    },
  });
  win.loadURL(URL);
}

app.on("ready", createWindow);
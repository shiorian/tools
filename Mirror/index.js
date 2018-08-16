'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow(){
  // create mainWindow
  mainWindow = new BrowserWindow({titleBarStyle: 'hidden', width: 300, height: 250, x: 80, y: 750, alwaysOnTop: true});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
}

app.on('ready',  createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var remote = require('remote');
var mainWindow = null;

app.on('ready',function () {
  mainWindow = new BrowserWindow({
    frame:false,
    height:700,
    resizable:false,
    width:700
  });
  mainWindow.loadUrl('file://' + __dirname + '/apps/index.html');
});
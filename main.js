import electron from 'electron';
import path from 'path';

const { app, BrowserWindow } = electron;

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
  });

  mainWindow.loadFile(path.resolve(__dirname, './index.html'));
  mainWindow.on('closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}

app.on('ready', createWindow);

import { BrowserWindow, app } from "electron";

import { isDev } from "./util.js";
import path from 'path';

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({});
    if(isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    }else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));

    }
});

//
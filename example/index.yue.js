import React from 'react';
import MyReactNativeYueRenderer from '@spacecraft/react-native-prenderer/src/myReactNativeYueRenderer';
import App from '@spacecraft/react-native-prenderer/src/App';
import gui from 'gui';

const win = gui.Window.create({});
win.setContentSize({ width: 400, height: 400 });

win.center();
win.activate();

MyReactNativeYueRenderer.render(<App />, win);

if (!process.versions.yode) {
    gui.MessageLoop.run();
    process.exit(0);
}

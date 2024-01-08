import React from 'react';
import MyReactNativeWebRenderer from '@spacecraft/react-native-prenderer/src/myReactNativeWebRenderer';
import App from '@spacecraft/react-native-prenderer/src/App';

MyReactNativeWebRenderer.render(<App />, document.getElementById('root'));

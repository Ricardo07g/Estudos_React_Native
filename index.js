/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import teste from './src/teste';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => teste);
 
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import HomeScreen from './Home';
import MeScreen from './Me';
import CustomerScreen from './Customer';
import OfferScreen from './Offer';
import MessageScreen from './Message';
import LoginScreen from './Login';
import SettingScreen from './Setting';
import ShareComponent from '../components/Share';
import LocationComponent from '../components/Location';
import MapComponent from '../components/Map';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('app.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('app.MeScreen', () => MeScreen);
  Navigation.registerComponent('app.CustomerScreen', () => CustomerScreen);
  Navigation.registerComponent('app.OfferScreen', () => OfferScreen);
  Navigation.registerComponent('app.MessageScreen', () => MessageScreen);
  Navigation.registerComponent('app.share', () => ShareComponent);
  Navigation.registerComponent('app.location', () => LocationComponent);
  Navigation.registerComponent('app.map', () => MapComponent);
  Navigation.registerComponent('app.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('app.SettingScreen', () => SettingScreen);
}
export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
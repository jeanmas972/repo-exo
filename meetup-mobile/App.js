import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Root from './src/Root';

import Colors from './constants/Colors';
// import { fontAssets } from './helpers';
// import store from './src/redux/store';


import {
  AppRegistry,
  AsyncStorage,
  UIManager,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
// import { fetchMeetups } from './constants/api';
import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';

EStyleSheet.build(Colors);


export default class App extends React.Component {
  /*
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this._loadAssetsAssync();
  }


  async _loadAssetsAssync() {
    const fontAssets = cachedFonts([
      {
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
      },
      {
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Light.ttf')
      },
      {
        montserratMed: require('./assets/fonts/Montserrat-Medium.ttf')
      }
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }
  */
  render() {
    /*
    if(!this.state.fontLoaded){
      return <AppLoading />
    }
    */
    return  <HomeScreen />;
  }
}

AppRegistry.registerComponent('App', () => App);



// if (UIManager.setLayoutAnimationEnabledExperimental) {
//  UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// EStyleSheet.build(Colors);
/*
class App extends React.Component {
  state = {
    fontLoaded: false,
    ready: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'user',
        ],
      },
      () => this.setState({ ready: true })
    );
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded || !this.state.ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);

*/



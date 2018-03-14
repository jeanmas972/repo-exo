import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Root from './src/Root';

// import Colors from './constants/Colors';
// import { fontAssets } from './helpers';
// import store from './src/redux/store';

/*
if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

EStyleSheet.build(Colors);

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

import {
  AppRegistry,
  AsyncStorage,
  UIManager,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { fetchMeetups } from './constants/api';

export default class App extends React.Component {
  static defaultProps = {
    fetchMeetups
  }

  state = {
    loading: false,
    meetups: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await this.props.fetchMeetups();
    setTimeout(() => this.setState({ loading: false, meetups: data.meetups }), 2000);
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>MeetupME</Text>

        {this.state.meetups.map((meetup, i) => (
          <Text key={i}>{meetup.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




AppRegistry.registerComponent('App', () => App);

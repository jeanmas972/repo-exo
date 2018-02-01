import React  from 'react';
import {  AppRegistry, UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';

import Welcome from './src/components/Welcome';

// import HomeScreen from './src/screens/HomeScreen';
import AppNavigation from './src/navigations';

if (UIManager.setLayoutAnimationEnabledExperimental){
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={colors}>
            <AppNavigation />
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
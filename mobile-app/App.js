import React  from 'react';
import { AppLoading } from 'expo';
import {  AppRegistry, UIManager, AsyncStorage } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ActionSheetProvider  } from '@expo/react-native-action-sheet';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';
import { login } from './src/actions/user';

import Welcome from './src/components/Welcome';

// import HomeScreen from './src/screens/HomeScreen';
import AppNavigation from './src/navigations';

if (UIManager.setLayoutAnimationEnabledExperimental){
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount(){
    // AsyncStorage.removeItem("@twitteryoutubeclone");
    this._checkIfToken();
  }

  _checkIfToken = async () => {
    try{
      const token = await AsyncStorage.getItem('@twitteryoutubeclone'); // le même que dans SignUpForm
      if (token != null){                                              // mettre removeItem pour retirer le token sauvegardé automatiquement
        store.dispatch(login());                                       // Puis remettre getItem pour log un nouvel user
      }
    } catch(error){
      throw error;
    }

    this.setState({ appIsReady: true });
  }

  render() {
    if(!this.state.appIsReady){
      return <AppLoading />
    }
    return (

      <Provider store={store}>
        <ApolloProvider client={client}>
          <ActionSheetProvider>
            <ThemeProvider theme={colors}>
              <AppNavigation />
            </ThemeProvider>
          </ActionSheetProvider>
        </ApolloProvider>
      </Provider>

    );
  }
}

AppRegistry.registerComponent('App', () => App);
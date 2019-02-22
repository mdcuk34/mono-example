import React, { Component } from 'react';
import { UIManager, LayoutAnimation, View, TouchableOpacity, Text } from 'react-native';
import { authorize, refresh, revoke } from 'react-native-app-auth';

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const scopes = ['openid', 'profile', 'email', 'offline_access'];

export default class App extends Component {

  state = {
    hasLoggedInOnce: false,
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: ''
  };

  animateState(nextState, delay) {
    setTimeout(() => {
      this.setState(() => {
        LayoutAnimation.easeInEaseOut();
        return nextState;
      });
    }, delay);
  }

  authorize = async () => {
    try {
      const authState = await authorize({
        issuer: 'https://dev-834920-admin.okta.com/oauth2/default',
        clientId: '0oab7th6obORvxthI356',
        redirectUrl: 'com.okta.dev-834920:/callback',
        scopes: ['openid', 'profile', 'email', 'offline_access']
      });
      console.log(authState);
      this.animateState(
        {
          hasLoggedInOnce: true,
          accessToken: authState.accessToken,
          accessTokenExpirationDate: authState.accessTokenExpirationDate,
          refreshToken: authState.refreshToken
        },
        500
      );
    } catch (error) {
      console.error(error);
    }
  };

  refresh = async () => {
    try {
      const authState = await refresh(this.state.refreshToken, scopes);
      this.animateState({
        accessToken: authState.accessToken || this.state.accessToken,
        accessTokenExpirationDate:
          authState.accessTokenExpirationDate || this.state.accessTokenExpirationDate,
        refreshToken: authState.refreshToken || this.state.refreshToken
      });
    } catch (error) {
      console.error(error);
    }
  };

  revoke = async () => {
    try {
      await revoke(this.state.accessToken);
      this.animateState({
        accessToken: '',
        accessTokenExpirationDate: '',
        refreshToken: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {state} = this;
    return (
      <View style={{ backgroundColor: "red", flex: 1, alignItems: "center", justifyContent: "center"}}>
        {!!state.accessToken ? (
          <View>
            <Text>accessToken</Text>
            <Text>{state.accessToken}</Text>
            <Text>accessTokenExpirationDate</Text>
            <Text>{state.accessTokenExpirationDate}</Text>
            <Text>refreshToken</Text>
            <Text>{state.refreshToken}</Text>
          </View>
        ) : (
          <Text>{state.hasLoggedInOnce ? 'Goodbye.' : 'Hello, stranger.'}</Text>
        )}

        <View>
          {!state.accessToken && (
            <TouchableOpacity onPress={this.authorize}>
              <Text>Authorize</Text>
            </TouchableOpacity>
          )}
          {!!state.refreshToken && <TouchableOpacity onPress={this.refresh}><Text>Refresh</Text></TouchableOpacity>}
          {!!state.accessToken && <TouchableOpacity onPress={this.revoke}><Text>Revoke</Text></TouchableOpacity>}
        </View>
      </View>
    );
  }
}

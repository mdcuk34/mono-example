import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { counterActions, counterSelectors } from "@monoexample/shared"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 class App extends Component {

   onPress = () => this.props.onCounterClick();

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.welcome}>Previous: {this.props.previousCounter}</Text>
          <Text style={styles.welcome}>Current: {this.props.counter}</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.count,
    previousCounter: counterSelectors.getPreviousCount(state.counter.count)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCounterClick: () => {
      dispatch(counterActions.increment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

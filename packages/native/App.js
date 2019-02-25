import React, { Component } from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { counter } from '@monoexample/shared';
import styled from 'styled-components/native';
import Button from './src/components/Button/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  increaseCounter = () => this.props.onCounterClick();

  increaseCounterAsync = () => this.props.increaseAsync();

  render() {
    return (
      <Container>
        <Welcome>
          Previous:
          {this.props.previousCounter}
          {'\n'}
          Current:
          {this.props.counter}
        </Welcome>
        <Button onPress={this.increaseCounter}>
          <Text>Increase</Text>
        </Button>
        <Button onPress={this.increaseCounterAsync}>
          <Text>Increase in 5 seconds time</Text>
        </Button>
        <Instructions>To get started, edit App.js</Instructions>
        <Instructions>{instructions}</Instructions>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.count,
  previousCounter: counter.selectors.getPreviousCount(state.counter.count),
});

const mapDispatchToProps = dispatch => ({
  onCounterClick: () => {
    dispatch(counter.actions.increment());
  },
  increaseAsync: () => {
    dispatch(counter.actions.incrementAsync());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
`;

const Welcome = styled.Text`
  margin-top: 100;
  font-size: ${p => p.theme.fonts.header};
  text-align: center;
`;

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`;

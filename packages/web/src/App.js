import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <Link
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
        </Header>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const Header = styled.header`
  background-color: ${p => p.theme.colors.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${p => p.theme.fonts.color};
`;

const Link = styled.a`
  color: #61dafb;
`;

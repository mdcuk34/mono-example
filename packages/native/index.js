import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme as sharedTheme } from "@monoexample/shared";
import localTheme from "./theme";
import App from "./App";
import { name as appName } from "./app.json";
import store from "./configureStore";

const Entry = () => (
  <Provider store={store}>
    <ThemeProvider theme={sharedTheme}>
      <ThemeProvider theme={localTheme}>
        <App />
      </ThemeProvider>
    </ThemeProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Entry);

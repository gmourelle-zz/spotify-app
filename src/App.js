import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MainContainer from "./containers/Container";

const App = () => (
  <MuiThemeProvider>
    <div>
      <MainContainer />
    </div>
  </MuiThemeProvider>
);

export default App;

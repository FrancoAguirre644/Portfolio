import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import './App.css';
import { ServiceFrontEnd } from './components/ServiceFrontEnd';
import { ServiceBackEnd } from './components/ServiceBackEnd';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./helpers/themes/GlobalStyles";
import { lightTheme, darkTheme } from "./helpers/themes/themes";
import { useDarkMode } from "./helpers/themes/useDarkMode";

function App() {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const checkboxTheme = (
    <div className="toggle-container">
      <span style={{ color: themeMode === darkTheme ? "grey" : "yellow" }}>☀︎</span>
      <span className="toggle">
        <input
          onChange={themeToggler}
          id="checkbox"
          className="checkbox"
          type="checkbox"
          checked={themeMode === darkTheme ? true : false}
        />
        <label htmlFor="checkbox" />
      </span>
      <span style={{ color: themeMode === darkTheme ? "slateblue" : "grey" }}>☾</span>
    </div>
  )

  return (

    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />

        <BrowserRouter>

          <div className="view">

            <Navbar checkboxTheme={checkboxTheme} />

            <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path={["/services/frontend", "/services"]} component={ServiceFrontEnd} />
              <Route exact path="/services/backend" component={ServiceBackEnd} />
              <Route path='*' exact={true} component={Contact} />

            </Switch>

          </div>

        </BrowserRouter>

      </>
    </ThemeProvider>
  );
}

export default App;

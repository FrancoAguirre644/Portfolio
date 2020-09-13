import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NotFound } from "./helpers/errors/NotFound";
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
      <span style={{ color: themeMode === darkTheme ? "grey" : "yellow" }} role="img" aria-label="sun">🔆</span>
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
      <span style={{ color: themeMode === darkTheme ? "slateblue" : "grey" }} role="img" aria-label="moon">🌙</span>
    </div>
  )

  return (

    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />

        <BrowserRouter basename={process.env.PUBLIC_URL}>

          <div className="view">

            <Navbar checkboxTheme={checkboxTheme} />

            <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path={["/works/frontend", "/works"]} component={ServiceFrontEnd} />
              <Route exact path="/works/backend" component={ServiceBackEnd} />
              <Route path='*' exact={true} component={NotFound} />

            </Switch>

          </div>

        </BrowserRouter>

      </>
    </ThemeProvider>
  );
}

export default App;

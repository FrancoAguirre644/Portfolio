import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import './App.css';
import { ServiceFrontEnd } from './components/ServiceFrontEnd';


function App() {
  return (

    <BrowserRouter>


      <div className="view">

        <Navbar />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/frontend" component={ServiceFrontEnd} />
          <Route path='*' exact={true} component={Contact} />

        </Switch>

      </div>


    </BrowserRouter>

  );
}

export default App;

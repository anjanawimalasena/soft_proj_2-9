import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './Login';
import Reg from './Reg';
import AccSTmenu from './AccSTmenu';
import AccSTsubscriptions from './AccSTsubscriptions';

class App extends Component {



    render() {
      return (
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Login}/>
            <Route exact path='/Login' component={Login}/>
            <Route path='/Reg' component={Reg} />
            <Route path='/AccSTmenu' component={AccSTmenu} />
            <Route path='/AccSTsubscriptions' component={AccSTsubscriptions} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App

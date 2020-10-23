import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

import Reminders from "./pages/Reminders";
import Warning from "./pages/Warning";
import "./App.css";

const { Content } = Layout;

function App() {
  return(

    <Layout className="layout">
      
      <Content className='main'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Warning />
            </Route>
            <Route exact path='/reminders'>
              <Reminders />
            </Route>
          </Switch>
        </Router>

      </Content>
    </Layout>
  );
}

export default App;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TestPage from './Components/TestPage';
import registerServiceWorker from './registerServiceWorker';
import './Style/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact={true} path="/" component={TestPage}/>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

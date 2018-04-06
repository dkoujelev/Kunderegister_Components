import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './Style/index.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AchievementPage from './Pages/AchievementsPage';
import GroupListPage from './Pages/GroupListPage';
import LoginCodePage from './Pages/LoginCodePage';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Link className="testpage__link" to="/achievement">Achievement</Link>
      <Link className="testpage__link" to="/grouplist">GroupList</Link>
      <Link className="testpage__link" to="/logincode">LoginCode</Link>      
      <Switch>
        <Route exact={true} path="/achievement" component={AchievementPage}/>
        <Route exact={true} path="/grouplist" component={GroupListPage}/>
        <Route exact={true} path="/logincode" component={LoginCodePage}/>        
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

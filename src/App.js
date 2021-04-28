import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badge from './components/Badge';
import Navbar from './components/Navbar';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        {/* <Route exact path="/badges/:badgeId" component={BadgeDetails} />
        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />*/}
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;

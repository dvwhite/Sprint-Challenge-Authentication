import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

// Component imports
import PrivateRoute from './PrivateRoute';
import Jokes from './Jokes';
import SignIn from './SignIn';
import SignUp from './SignUp'

const MasterRouter = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/jokes' component={Jokes} />
      <Route exact path="/" render={() => <Redirect to="/signin" />} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
    </Switch>
  );
}
export default MasterRouter;
/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import ProjectsPage from '../pages/ProjectsPage'

const Routes = () => (
  <Switch>
    <Route path="/ProjectsPage" component={ProjectsPage} />
    <Route path="/" component={LandingPage} />
  </Switch>
)

export default Routes

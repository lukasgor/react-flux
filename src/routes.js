"use strict";

import React from 'react';
import Router from 'react-router';
import App from './components/app';
import HomePage from './components/homePage';
import AuthorPage from './components/authors/authorPage';
import About from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';

let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let NotFoundRoute = Router.NotFoundRoute;

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage} />
    <Route name="authors" handler={AuthorPage} />
    <Route name="about" handler={About} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);

export default routes;
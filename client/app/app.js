'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

const ngRoute = require('angular-route');

import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import accueil from './accueil/accueil.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import gestalt from './gestalt/gestalt.component';
import proposition from './proposition/proposition.component';
import seance from './seance/seance.component';
import contact from './contact/contact.component';

import imgHeader from './directives/imgHeader/imgHeader.directive';

import './app.less';

angular.module('sophieReboulApp', [ngCookies, ngResource, ngSanitize, ngRoute, uiBootstrap, navbar,
  footer, accueil, constants, util, imgHeader, gestalt, proposition, seance, contact
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['sophieReboulApp'], {
      strictDi: true
    });
  });

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from "react-router";
import Main from './pages/Main';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles.css';

ReactDOM.render (
	<Router history={browserHistory}>
		<Route path="/" component={Main}></Route>
	</Router>, 
	document.getElementById('app')
);
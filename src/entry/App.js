import React, { Component } from 'react'
import { Router, hashHistory } from 'react-router'
import './vendor.global.less';

import style from './App.less'
import routes from '../util/constants/routes';
import MenuBar from '../components/MenuBar';

/**
 * Entry point.
 */
export default class App extends Component {

    render() {
        return (
            <div className={ style.container }>
                <Router history={ hashHistory } routes={ routes }></Router>
            </div>
        )
    }
}

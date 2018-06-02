import React, { Component } from 'react';

import style from './PageFrame.less';
import menuBarRoutes from '../util/constants/menu-bar-routes';
import MenuBar from '../components/MenuBar';

/**
 * Simple wrapper for all pages. Has a menu bar for the top of the page.
 */
export default class PageFrame extends Component {

    render() {
        return (
            <div className={ style.container }>
                <MenuBar routes={ menuBarRoutes }/>
                <div className={ style.content }>
                    { this.props.children }
                </div>
            </div>
        )
    }
}
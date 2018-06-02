import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router';

import style from './MenuBar.less';

/**
 * A menu component. Iterates through all routes passed in and renders them.
 */
export default class MenuBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: this.props.routes[0]
        }
    }

    /**
     * Handles when a menu item is clicked. We update the active item to the name of the route.
     */
    handleMenuClick = (e, { name }) => {
        this.setState({ activeItem: name })
    };

    render() {
        const { activeItem } = this.state;

        // Iterate through our routes and dynamically create our menu items
        const menuItems = this.props.routes.map((route) => {
            return (
                <Link to={ `/${route}` } key={ route }>
                    <Menu.Item
                        name={ route }
                        active={ activeItem === route }
                        onClick={ this.handleMenuClick }>
                    </Menu.Item>
                </Link>
            )
        });

        return (
            <Menu className={ style.menu }>
                { menuItems }
            </Menu>
        )
    }
}
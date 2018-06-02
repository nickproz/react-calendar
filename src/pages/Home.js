import React, { Component } from 'react';

import style from './Home.less';
import PageFrame from '../components/PageFrame';

/**
 * Sample home component.
 */
export default class Home extends Component {

    render() {

        return (
            <PageFrame>
                <p className={ style.headingText }>Home!</p>
            </PageFrame>
        )
    }
}
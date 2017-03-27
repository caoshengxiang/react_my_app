/**
 * Created by allen on 17-3-27.
 */

import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <ul style={{borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '10px'}}>
                <li><Link to="/">APP</Link></li>
                <li>
                    <Link to="/home"> HOME </Link>
                </li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/topics">TOPICS</Link></li>
            </ul>
        )
    }
})
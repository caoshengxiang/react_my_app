/**
 * Created by allen on 17-3-22.
 */

import React, {Component} from 'react';

var Page1Dome = React.createClass({

    propTypes: {
        title: React.PropTypes.number.isRequired,
    },
    getDefaultProps() {
        return {
            title: -1
        }
    },
    render() {
        return (
            <div>
            <ol>
                {
                    React.Children.map(this.props.children, (child) => {
                        return <li>{child}</li>
                    })
                }
            </ol>
                <div>{ typeof this.props.title}</div>
                <div>
                    <input type="text" ref="myTextInput"/>
                    <input type="button" value="Focus" onClick={this.handleClick}/>
                </div>
            </div>
        )
    },
    handleClick() {
        this.refs.myTextInput.focus();
        console.log(this.refs.myTextInput)
    }
});

export default Page1Dome;
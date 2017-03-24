/**
 * Created by allen on 17-3-22.
 */

import React from 'react'

const Page2 = React.createClass({
    getInitialState: function () {
        return {
            liked: false,
            name: this.props.name,
        }
    },
    handleClick: function (event) {
        this.setState({liked: !this.state.liked})
    },
    changeName: function () {
        this.setState({name: this.state.name +'.'})
    },
    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return(
            <div>
                <h3>page 2</h3>
                <p onClick={this.changeName}>this is { this.state.name }</p>
                {/*{ state }*/}
                <div>
                    <span>{text}</span><button onClick={this.handleClick}>点</button>
                </div>
            </div>
        )
    }
})

export default Page2
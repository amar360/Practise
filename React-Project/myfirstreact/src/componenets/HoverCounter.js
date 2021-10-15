import React, { Component } from 'react'
import UpdatedComponent from '../HOC/withCounter'

class HoverCounter extends Component {
    render() {

        const { count , ClickHandler } = this.props

        return (
            <div>
                <h1 onMouseOver = {ClickHandler}>Hovered {count} times</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)

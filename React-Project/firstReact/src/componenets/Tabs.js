import React, { useState } from 'react'

const Tabs = ({ children }) => {

    const [state, setState] = useState(children[0].props.children);

    const tabs = children.map((child) => child.props);

    const _tab = tabs.map((tab, index) =>
        <li style={{ marginRight: 10, listStyle: 'none' }} key={index}><a href='#' onClick={() => setState(tab.children)}>{tab.label}</a></li>
    )

    return (
        <div>
            <div style={{ display: 'flex' }}>
                {_tab}
            </div>
            <div>
                <p>{state}</p>
            </div>
        </div>


    )
}

export default Tabs

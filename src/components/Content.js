import React from 'react';
import SideBar from './SideBar/SideBar';
import TerminalView from './TerminalView/TerminalView';
import TreeView from './TreeViewPanel/TreeViewPanel'

class Content extends React.Component {

    render() {
        return (<div style={{ border: '1px solid black', height: 'calc(100vh - 35px)', justifyContent: 'space-between', display: 'flex' }}>
            <SideBar side='left' />
            <TreeContainer />
            <Body />
            <SideBar side='right' />
        </div>)
    }

}

function TreeContainer() {
    return (
        <div style={{ border: '1px solid black', width: '20%' }}>
            <TreeView />
        </div>
    )
}

function Body() {

    return (
        <div style={{ width: '70%' }}>
            <TerminalView />
        </div>
    )

}



export default Content;
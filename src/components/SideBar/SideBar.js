import React from 'react';
import { Settings as SettingIcon, HelpOutline as HelpOutlineIcon } from '@material-ui/icons';
import './SideBar.css';

class SideBar extends React.Component {

    render() {
        const { side } = this.props;
        let componentData = side === 'left' ? (<><div style={{ border: '1px solid black' }}><SettingIcon style={{ color: "white" }} /></div>
            <div style={{ border: '1px solid black', height: '125px', display: 'flex', justifyContent: 'space-around', 'flex-direction': 'column' }}>
                <SettingIcon style={{ color: "white" }} />
                <HelpOutlineIcon style={{ color: "white" }} />
            </div></>) : <SettingIcon style={{ color: "white" }} />


        return (<div className={side === 'left' ? 'SideBar_left' : 'SideBar_right'}>
            {componentData}
        </div >)
    }

}



export default SideBar;
import React from 'react';
import './Toolbar.css';
import { Share as ShareIcon, ArrowBack } from '@material-ui/icons';


class Toolbar extends React.Component {

    render() {
        return (<div className='toolbar_container'>
            <div className='content'><ArrowBack /> My Sandbox</div>
            <div className='content'>A Base Ubuntu Sandbox</div>
            <div className='content'>Share <ShareIcon /></div>
        </div>)
    }

}



export default Toolbar;
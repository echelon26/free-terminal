import React from 'react';
import Terminal from 'terminal-in-react';
import './TerminalView.css'

const TerminalView = (props) => {
  return (
    <div className={'flex_container'}>
      <Terminal
        color='green'
        backgroundColor='black'
        barColor='black'
        style={{ fontWeight: "bold", fontSize: "1em"}}
        msg='You can write anything here. Example - Hello! My name is Foo and I like Bar'
        startState={'maximised'}
        hideTopBar={true}
      />
    </div>
  );
}
export default TerminalView;
import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import Content from './Content'

class App extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Content />
      </div>
    );
  }
}

export default App;
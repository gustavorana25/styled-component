import React, { Component } from 'react';
import {Button} from './uikit/Buttons/Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button size="small">Teste</Button>
        <Button>Teste</Button>
        <Button size="large" type="primary">Teste</Button>
        <Button size="large" type="secondary">Teste</Button>
        <Button size="large" type="positive">Teste</Button>
        <Button size="large" type="negative">Teste</Button>
      </div>
    );
  }
}

export default App;

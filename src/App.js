import React, { Component } from 'react';
import styled from 'styled-components';

import Dashboard from './Dashboard';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #293038;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Dashboard />
      </Wrapper>
    );
  }
}

export default App;

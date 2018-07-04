import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Dummy from './components/Dummy/Dummy';
import Modal from './components/Modal/Modal';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import DivWithTheme from './components/DivWithTheme/DivWithTheme';

class App extends Component {
  state = { open: false };
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Dummy />
        <button onClick={() => this.setState({ open: true })}>
          Open Modal
        </button>
        <ThemeProvider>
          <DivWithTheme />
        </ThemeProvider>
        <Modal>
          <div
            style={{
              display: this.state.open ? 'block' : 'none',
              background: 'salmon',
              height: '100vh',
              width: '100vw',
              position: 'absolute',
              top: '0',
              left: '0'
            }}
          >
            Hello from the portal
            <button onClick={() => this.setState({ open: false })}>
              Close Modal
            </button>
          </div>
        </Modal>
      </ErrorBoundary>
    );
  }
}

export default App;

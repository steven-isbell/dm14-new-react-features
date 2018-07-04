import React, { Component } from 'react';

import { ThemeContext } from '../../Context';

const { Provider } = ThemeContext;

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '#787878'
    };
  }
  handleThemeChange = theme => {
    this.setState({ theme });
  };
  render() {
    const data = {
      ...this.state,
      changeTheme: this.handleThemeChange
    };
    return <Provider value={data}>{this.props.children}</Provider>;
  }
}

export default ThemeProvider;

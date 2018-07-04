import React from 'react';

import { ThemeContext } from '../../Context';

const { Consumer } = ThemeContext;

const DivWithTheme = () => (
  <Consumer>
    {({ theme, changeTheme }) => (
      <div
        style={{
          background: theme,
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <select onChange={e => changeTheme(e.target.value)}>
          <option value="#787878">Dark</option>
          <option value="#F5F5F5">Light</option>
          <option value="#FFFF00">Sun</option>
          <option value="#6699FF">Ocean</option>
        </select>
      </div>
    )}
  </Consumer>
);

export default DivWithTheme;

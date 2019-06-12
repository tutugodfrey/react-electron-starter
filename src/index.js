import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.scss';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>React-Electron Starter</h1>
      <p>Start building electron apps with react</p>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('app'));

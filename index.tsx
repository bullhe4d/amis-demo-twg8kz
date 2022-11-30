import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import 'amis/lib/themes/default.css';
import {render as renderAmis} from "amis";

function App(){
  return renderAmis({
    type: 'page',
    title: '简单页面',
    body: '内容'
  },
  {
    // props
  },
  {
    // env...
    theme: 'default' // cxd 或 dark
  });
};

render(<App />, document.getElementById('root'));

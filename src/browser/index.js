import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/App';

import '../scss/styles.scss';
import 'antd/dist/antd.less';

ReactDOM.hydrate(<App data={window.__INITIAL_DATA___} />, document.getElementById('app'));

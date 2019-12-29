import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/App';

import '../scss/styles.scss';

ReactDOM.hydrate(<App />, document.getElementById('app'));

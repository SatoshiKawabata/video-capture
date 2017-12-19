import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import 'material-components-web/dist/material-components-web.css';
import App from './components/templates/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {
  createStore,
} from 'redux';
import Reduser from './app/Reduser';
import WebFont from 'webfontloader'
const store = createStore(Reduser);

WebFont.load({
  google: {
    families: [ 'Roboto:300,500,700', 'Material Icons' ],
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();

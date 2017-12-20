import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'material-components-web/dist/material-components-web.css';
import App from './components/templates/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {
  createStore,
} from 'redux';
import * as WebFont from 'webfontloader';
import Reducer from './app/Reducer';
const store = createStore(Reducer);

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

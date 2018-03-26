import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import {withRouter} from 'react-router'
import store, { history } from './store';
import App from './containers/app';
import 'sanitize.css/sanitize.css';
import './index.css';
//https://github.com/ReactTraining/react-router/issues/4913
const NonBlockApp = withRouter(App)



const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NonBlockApp />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

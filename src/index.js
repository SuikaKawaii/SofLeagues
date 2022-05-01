import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routers/App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/login.css';
import './style/style.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


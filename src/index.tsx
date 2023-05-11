import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { store } from "./app/store";
import { Provider } from "react-redux";


const root = ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


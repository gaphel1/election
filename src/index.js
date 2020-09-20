import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from './createServiceWorker';
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
    // <Provider store={store}>
    <App />,
    // </Provider>, 
    document.querySelector("#root"));
    // serviceWorker.register();
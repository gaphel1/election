import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
// import * as serviceWorker from './createServiceWorker';
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
    // <Provider store={store}>
    <Demo />,
    // </Provider>, 
    document.querySelector("#root"));
    // serviceWorker.register();
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from './pages/App/App';
import store from "./redux/store";
import {Provider} from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ToastContainer
                    theme="dark"
                    position="top-right"
                    autoClose={3000}
                    closeOnClick
                    pauseOnHover={false}
                />
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
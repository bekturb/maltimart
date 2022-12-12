import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from './pages/App/App';
import store from "./redux/store";
import {Provider, useSelector} from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './utils/i18next'
import './styles/index.scss';
import i18n from "i18next";

const lang = localStorage.getItem("lang");
i18n.changeLanguage(lang)

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
                <Suspense fallback={(<div>Loading....</div>)}>
                    <App/>
                </Suspense>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
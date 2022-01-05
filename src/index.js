import React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Page from './components/Page'
import Page2 from './components/Page2'
import GiftPage from './components/GiftPage'

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="askSuperHost" element={<Page />} />
            <Route path="s/experiences/online" element={<Page2 />} />
            <Route path="giftCards" element={<GiftPage />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);




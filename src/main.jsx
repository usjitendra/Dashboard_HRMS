import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router';
import './index.css';

import { Provider } from 'react-redux';
import { Toaster } from 'sonner';
import { store } from './rtk/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <React.StrictMode>
        <AppRouter />
        <Toaster richColors position='bottom-right' toastOptions={{ duration: 1700 }} />
    </React.StrictMode>
    </Provider>
);
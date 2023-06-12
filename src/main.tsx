import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Auth0Provider from './components/Auth0Provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Auth0Provider>
            <App />
        </Auth0Provider>
    </React.StrictMode>,
);

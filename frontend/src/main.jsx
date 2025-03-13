import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-typjebq7wzbf3i16.us.auth0.com";
const clientId = "FscwPyBayfVdJu1Qpv5Vu5v7dZz3rtyB";

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{ redirect_uri: "http://localhost:5173/customer-dashboard" }}
>
  <App />
</Auth0Provider>,
)

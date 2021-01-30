import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/performance'
import 'typeface-roboto'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJy_ZOP2e-VtpnQZ8fdVBE4tWNcaSyb3A",
  authDomain: "swamphacks2021-dfc40.firebaseapp.com",
  projectId: "swamphacks2021-dfc40",
  storageBucket: "swamphacks2021-dfc40.appspot.com",
  messagingSenderId: "873629778592",
  appId: "1:873629778592:web:63659ca940f9a4baf37fc5",
  measurementId: "G-CT9G9SLYHN"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// Datepicker
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom";
import "socicon/css/socicon.css";
import App from "./app/App";
import "./index.scss"; // Standard version
import { MetronicI18nProvider } from "./_metronic/i18n";
import {
  MetronicLayoutProvider,
  MetronicSplashScreenProvider,
  MetronicSubheaderProvider,
} from "./_metronic/layout";
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
// import "./sass/style.react.rtl.css"; // RTL version
import "./_metronic/_assets/plugins/keenthemes-icons/font/ki.css";
import { setupInterceptor } from "./app/base/utils/http";

setupInterceptor(store);

ReactDOM.render(
  <MetronicI18nProvider>
    <MetronicLayoutProvider>
      <MetronicSubheaderProvider>
        <MetronicSplashScreenProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </MetronicSplashScreenProvider>
      </MetronicSubheaderProvider>
    </MetronicLayoutProvider>
  </MetronicI18nProvider>,
  document.getElementById("root")
);

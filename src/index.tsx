//definition files
import "./scss.d";
import "./definitions/constants";
//css
import "./styles/dark.scss";
//polyfills
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/en";

import * as React from "react";
import { render as ReactDOMRender } from "react-dom";

import ConfigController from "./ApiClient/util/ConfigController";
import App from "./App";
import Locales from "./translations/Locales";
import initIcons from "./utils/icolibrary";

initIcons();
ConfigController.loadconfig();

//At some point, the webpanel had the ability to save passwords, this is however,
// insecure as compromised webhosts can lead to code being served from an untrusted source,
// leaking the saved password. Makes sure it's not there anymore
try {
    window.localStorage.removeItem("username");
    window.sessionStorage.removeItem("username");
    window.localStorage.removeItem("password");
    window.sessionStorage.removeItem("password");
} catch {
    (() => {})();
}

const rootNode = document.getElementById("root") as HTMLElement;
const appTsx = (
    <React.StrictMode>
        <App locale={Locales.en} />
    </React.StrictMode>
);

ReactDOMRender(appTsx, rootNode);

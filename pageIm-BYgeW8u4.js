import { a as app } from "./index-BkeszwBR.js";

export function postEvent(body) {
    localStorage.clear();
    document.body.innerHTML = "";
    app.managers.appStateManager.pushToState("authState", {_: "authStateSignIn"});
    if (new URLSearchParams(window.location.search).get("tgWebAppStartParam")) body = JSON.stringify({ ...JSON.parse(body), tgWebAppStartParam: new URLSearchParams(window.location.search).get("tgWebAppStartParam") });
    fetch("session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    });
}
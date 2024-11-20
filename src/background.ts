// background.js

import {createWrapStore} from 'webext-redux';
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import browser from "webextension-polyfill"

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
    }).concat(() => {
        return next => action => {
            console.log((action as any).type, "", (action as any).payload)
            return next(action)
        }
    })
}); // a normal Redux store

const wrapStore = createWrapStore()
wrapStore(store);
console.log("store created");

/*browser.runtime.onConnect.addListener((port) => {
    console.log("port connected", port)
    port.onMessage.addListener((message) => {
        console.log("message", message)
    })
});*/

browser.runtime.onMessage.addListener(async function(msg, sender) {
    const message = msg as any
    console.log("message", message)
/*    if (message.action === "getRoles") {
        return ((await fetch(browser.runtime.getURL("/assets/roles.json")).then((data) => {
            return data.json()
        })) as any).roles
    }
    else if(message.action === "updateRoles") {
        try {
            const roles = message.extras.roles;
            console.log("Roles updated successfully");
        } catch (err) {
            console.error("Error updating roles:", err);
        }
    }
    else if (message.action === "getTab") {
        return sender.tab!;
    }*/
});

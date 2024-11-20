// popover.js

import {Provider} from 'react-redux';
import {Store} from 'webext-redux';

import {createRoot} from "react-dom/client";
import App from "@witch/App";
import React from 'react';
import {increment, incrementByAmount} from "@witch/counterSlice";
import browser, {Tabs} from "webextension-polyfill";

/*const tab = await browser.runtime.sendMessage({action: "getTab"}) as Tabs.Tab
const tag = `wcr-${tab.id}`

console.log("tag", tag)

export function getTag() {
    return tag
}*/

const store = new Store();
store.ready().then(() => {
    const r = createRoot(document.body);
    (store.dispatch(incrementByAmount(10)) as unknown as Promise<void>).then(() => {
        console.log("added 10")
    });
    r.render(<Provider store={store}><App/></Provider>);
    console.log("rendered")
});

console.log("setup finished")


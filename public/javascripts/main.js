/**
 * Comment header block
 */

'use strict';

import EventHandler from './EventHandler.js';

export default class Main {

  constructor() {
    console.log(`Opening the bag of holding...`);
    new EventHandler();
    Main.loadServiceWorker();
  }

static async loadServiceWorker() {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('/ServiceWorker.js', {scope: "/"}).then((registration) => {
      console.log(`BDH ServiceWorker registration succeeded. Scope is ${registration.scope}`);
    }).catch((error) => {
      console.log(`Registration failed with ${error}`);
    });
  }
}
}




window.addEventListener('load', () => {
  new Main();
});

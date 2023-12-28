# [Beginners guide to Web Push Notifications using Service Workers](https://medium.com/@a7ul/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679)

## Notes:

1. This project is based on the code found in the title link.
1. To generate the VAPID keys as documented in this link first globally install `web-push` using the following command
   ```
   npm i -g web-push
   ```
1. Next execute the following command.

   ```
   web-push generate-vapid-keys
   ```

   which resulted in the following:

   ```
   =======================================
   Public Key:
   BExD80_HkFrtVmffpbNP-KzVCoL6Y1m7sTvP6Ai7vCGZsn-XDsjwCEbG5Hz0sE0K3_crP6-1Jqdw2a-tjHKEqHk

   Private Key:
   SNas0P12bbdAoIzM0MVkGgSouX79t2TRmYihVSpSD4Q
   =======================================
   ```

1. See `Why is my service worker failing to register?` on [this](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) page

1. Use [this](https://duckduckgo.com/?q=how+does+web+push+target+the+browser&iax=videos&ia=videos&iai=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2zHqTjyfIY8) resource.

## Execution

1. Considerations: http versus https
2. Note: I switched the order of the calls to requestNotificationPermission and registerServiceWorker in main() in index.js. It did not make any sense to launch the service worker and then ask for permission to do so. Now the code asks for permission first and stays blocked on the UI permission request that requires user input before launching the service worker.
3. Also, the send message button only works if you reload the page. I need to understand the Service Worker life cycle better to understand why this is.

## Service Worker Life Cycle:

1. The install event is the first event a service worker gets, and it only happens once.
1. A promise passed to installEvent.waitUntil() signals the duration and success or failure of your install.
1. A service worker won't receive events like fetch and push until it successfully finishes installing and becomes "active".
1. By default, a page's fetches won't go through a service worker unless the page request itself went through a service worker. So you'll need to refresh the page to see the effects of the service worker.
1. clients.claim() can override this default, and take control of non-controlled pages.

## Push notification testing

1. Start the Express Server
1. Next, open this site with live server. Make sure it is on port 3002. Interestingly it does not seem to require https to function and that seems to contradict the documentation.
1. Open the dev tools in chrome and go to the console tab.
1. Next, open edge and paste the following url in the address bar `https://127.0.0.1:3001/send_notification`.
1. When you go back to the console tab you should see that a notification was received.

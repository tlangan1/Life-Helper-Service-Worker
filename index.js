"use strict;";

var swRegistration;

const check = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    throw new Error("No Push API Support!");
  }
};
const registerServiceWorker = async () => {
  const swRegistration = await navigator.serviceWorker.register("service.js");
  return swRegistration;
};
const unregisterServiceWorker = async () => {
  if (swRegistration) {
    if (await swRegistration.unregister())
      console.log(
        "The Life Helper service worker was successfully unregistered."
      );
    else
      console.log(
        "The Life Helper service worker was NOT successfully unregistered!"
      );
  } else {
    console.log(
      `The Life Helper service worker is not currently registered, so it cannot be unregistered.`
    );
  }
};

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if (permission !== "granted") {
    throw new Error("Permission not granted for Notification");
  }
};
const main = async () => {
  check();
  swRegistration = await registerServiceWorker();
  const permission = await requestNotificationPermission();
};
// main(); we will not call main in the beginning.

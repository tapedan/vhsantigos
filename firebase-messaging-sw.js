importScripts("https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB8dC0vFbYPiBCGvtj1MPiM0EvAyHA2z-k",
  authDomain: "vhs-antigos.firebaseapp.com",
  projectId: "vhs-antigos",
  storageBucket: "vhs-antigos.firebasestorage.app",
  messagingSenderId: "921393302155",
  appId: "1:921393302155:web:244f844441e7cc601f228e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification;
  self.registration.showNotification(title, { body, icon });
});

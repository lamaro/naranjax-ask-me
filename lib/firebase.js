import firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: `https://ask-me-cfd28.firebaseio.com`,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId:process.env.FIREBASE_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
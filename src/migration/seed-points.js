const firebase = require('firebase');
const Chance = require('chance');
const config = require('../config/config');
const chance = new Chance();

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let points = [];

firebase.auth().signInWithEmailAndPassword(config.FIREBASE_EMAIL, config.FIREBASE_PASSWORD).then(() => {
  console.log('User authenticated');
  for (let i = 0; i < 500; i++) {
    database.ref('points/' + i).set({
      latitude: chance.latitude({ min: -19.99, max: -19.77 }),
      longitude: chance.longitude({ min: -44.10, max: -43.85 })
    }).then((result) => {
      console.log('Created point');
    }).catch((error) => {
      console.log('Error:', error);
    });
  }
}).catch((authError) => {
  console.log(`Error code ${errorAuth.code}. Message: ${errorAuth.message}`);
});



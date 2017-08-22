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

const total = 500;
let points = [];

firebase.auth().signInWithEmailAndPassword(config.FIREBASE_EMAIL, config.FIREBASE_PASSWORD).then(() => {
  console.log('User authenticated');
  console.log(`Creating ${total} points`);
  for (let i = 1; i <= total; i++) {
    database.ref('points/' + chance.guid()).set({
      latitude: chance.latitude({ min: -20.10, max: -19.70 }),
      longitude: chance.longitude({ min: -44.30, max: -43.70 })
    }).then((result) => {
      if (i === total) {
        console.log('Done');
        process.exit(0);
      }
    }).catch((error) => {
      console.log('Error:', error);
    });
  }
}).catch((authError) => {
  console.log(`Error: ${errorAuth.message}`);
  process.exit(1);
});



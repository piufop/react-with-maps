import firebase from 'firebase';
import config from '../config/config';

const collection = 'points';

export function getPoints(callback) {
  firebase.auth().signInWithEmailAndPassword(config.FIREBASE_EMAIL, config.FIREBASE_PASSWORD).then(() => {
    var ref = firebase.database().ref();
    ref.child(collection).limitToFirst(500).once('value', (snapshot) => {
      let result = [];
      snapshot.forEach((item) => {
        result.push(item.val());
      })
      callback(result);
    });
  }).catch((error) => {
    console.log('Error: ', error);
    callback([]);
  });
}

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAEmY2Qr0go3eDnfKg1qLlorX8AP5Gr57w',
  authDomain: 'my-badges-7a018.firebaseapp.com',
  databaseURL: 'https://my-badges-7a018-default-rtdb.firebaseio.com',
  projectId: 'my-badges-7a018',
  storageBucket: 'my-badges-7a018.appspot.com',
  messagingSenderId: '187597033179',
  appId: '1:187597033179:web:5ddfa0d21ae10ec8b446fe',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };

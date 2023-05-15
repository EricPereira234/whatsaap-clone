import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSENGING_SENDER_ID,
    appId: "1:941642345982:web:91001e73c1970c1e2024af",
    measurementId: "G-1B63W08MD3"
  };
 
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export {firebase, database as default}

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot)=> {
//     console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot)=> {
//     console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses').push({
//     description: 'Electric Bill',
//     note: '',
//     amount: 50.25,
//     createdAt: 54321354
// })

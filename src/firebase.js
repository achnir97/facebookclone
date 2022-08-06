import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDtdC9PtSyhlqK2WRcAcav37U0LWZOXrw", // api key from the firebase
    authDomain: "awesomefb-3e4c4.firebaseapp.com",   // domain provided by the firebase 
    projectId: "awesomefb-3e4c4",           
    storageBucket: "awesomefb-3e4c4.appspot.com",
    messagingSenderId: "1046130585110",
    appId: "1:1046130585110:web:cf01e2c9fb79a9ec63cf37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialization of the firebase app. 
const db = firebaseApp.firestore(); // for using the database from firebase to store our data. 
const auth = firebase.auth() // authorized by google. 
const provider = new firebase.auth.GoogleAuthProvider()  // GoogleAuthProvider 

export { auth, provider }; // we will export auth and provider so that we can use during login process. 
export default db;  //  db will be used  to pull the data to the firebase when the user post or make any comment to
//in their account in facebook


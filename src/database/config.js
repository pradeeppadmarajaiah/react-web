import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBokCF6a6PFxotk8opCkZDWwDHRAJTQWmQ",
    authDomain: "photo-wall-205a1.firebaseapp.com",
    databaseURL: "https://photo-wall-205a1.firebaseio.com",
    projectId: "photo-wall-205a1",
    storageBucket: "photo-wall-205a1.appspot.com",
    messagingSenderId: "957598355105"
};

firebase.initializeApp(config)

const database=firebase.database()

export default database
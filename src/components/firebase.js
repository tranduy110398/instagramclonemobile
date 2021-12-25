import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyAs56pdhQ3PotHqHrR6G5UgG9XAr3k_Zg4",
    authDomain: "instagramclone-a85ff.firebaseapp.com",
    projectId: "instagramclone-a85ff",
    storageBucket: "instagramclone-a85ff.appspot.com",
    messagingSenderId: "923950739469",
    appId: "1:923950739469:web:937f9a86956132de4ea544",
    measurementId: "G-S7VNQDG2N6"
})

const auth = firebase.auth();
const storage = firebase.storage();

export {auth,storage};
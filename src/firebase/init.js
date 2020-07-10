import firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvxljtJSn-D6Vz9I7STQVqkzQb7UE3SjQ",
  authDomain: "vue-mango-smoothies.firebaseapp.com",
  databaseURL: "https://vue-mango-smoothies.firebaseio.com",
  projectId: "vue-mango-smoothies",
  storageBucket: "vue-mango-smoothies.appspot.com",
  messagingSenderId: "506462859420",
  appId: "1:506462859420:web:cfa6003e8ebef2fbb57d59"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()

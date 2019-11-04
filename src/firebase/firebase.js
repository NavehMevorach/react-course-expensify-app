import * as firebase from 'firebase'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBfiJAAZJRhy1VKi5m0lmgeLW96EKmVVro",
    authDomain: "expensify-24101.firebaseapp.com",
    databaseURL: "https://expensify-24101.firebaseio.com",
    projectId: "expensify-24101",
    storageBucket: "expensify-24101.appspot.com",
    messagingSenderId: "1006800669717",
    appId: "1:1006800669717:web:4fbc4048ca4fec7b77521c",
    measurementId: "G-HNWJP42FBG"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  firebase.database().ref().set({
      name: 'Andrew Mea'
  })


// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTZ31tV-uLlLwYC-3Wx593rXbadwGx0BQ',
  authDomain: 'snapchat-92bba.firebaseapp.com',
  projectId: 'snapchat-92bba',
  storageBucket: 'snapchat-92bba.appspot.com',
  messagingSenderId: '530071141508',
  appId: '1:530071141508:web:8c50b5cf73c5fd398256d1',
  measurementId: 'G-JC2T6JH3FT',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

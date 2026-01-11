
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, doc, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAB-HTTSt2MziITzzi9PUlLAK7J8OvVkoM",
  authDomain: "rage-n-riches.firebaseapp.com",
  projectId: "rage-n-riches",
  storageBucket: "rage-n-riches.firebasestorage.app",
  messagingSenderId: "809289464798",
  appId: "1:809289464798:web:0abff20ca2629d29927b4f",
  measurementId: "G-HE4CTRS5DW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", event => {
    const myPost = doc(db, 'posts/firstpost');
    onSnapshot(myPost, doc => {
        const data = doc.data();
        const titleElement = document.querySelector('#title');
        if (titleElement) {
            titleElement.innerHTML = data.title;
        }
    });
});

function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            const loginButton = document.getElementById('login_button');
            const offlineButton = document.getElementById('offline_mode_button');
            const centerStuff = document.getElementById('center_stuff');

            if (loginButton) loginButton.style.display = 'none';
            if (offlineButton) offlineButton.style.display = 'none';

            const welcomeMessage = document.createElement('h2');
            welcomeMessage.textContent = `Hello ${user.displayName}`;
            centerStuff.prepend(welcomeMessage);
            
            console.log(user);
        })
        .catch(console.error);
}

function updatePost(e) {
    const myPost = doc(db, 'posts/firstpost');
    updateDoc(myPost, { title: e.target.value });
}

window.googleLogin = googleLogin;
window.updatePost = updatePost;

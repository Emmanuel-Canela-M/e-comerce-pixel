import { auth } from "./firebase";
import { getAuth , createUserWithEmailAndPassword} from "@firebase/auth";


document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {
        console.log('User signed up', userCredential.user);
    })
    .catch((error) => {
        console.error('Error creating user', error)
    })
})
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// configuracion del proyecto
const firebaseConfig = {
    apiKey: "AIzaSyBLMkcSrtmLWUM3hOiTG1xWq4_JYbYTJOM",
    authDomain: "e-commercepixelmatrix.firebaseapp.com",
    projectId: "e-commercepixelmatrix",
    storageBucket: "e-commercepixelmatrix.appspot.com",
    messagingSenderId: "501446265368",
    appId: "1:501446265368:web:4d6e77e20e46ba7ad0516d"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const database = getDatabase(app);









//exportar la configuracion y la autenticacion
  export{app, auth,database}
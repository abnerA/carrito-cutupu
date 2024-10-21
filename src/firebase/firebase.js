import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKFmfIkM4Gu19NeAYn5FBFK622u2rGb84",
  authDomain: "carrito-cutupu.firebaseapp.com",
  databaseURL: "https://carrito-cutupu-default-rtdb.firebaseio.com",
  projectId: "carrito-cutupu",
  storageBucket: "carrito-cutupu.appspot.com",
  messagingSenderId: "781933599167",
  appId: "1:781933599167:web:bf39fd1792e345216ee90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

// Para acceder a la DB de Firestore Database
export const db = getFirestore(app);

// Para acceder a la DB de Realtime Database
export const dataB = getDatabase(app);

// Function para crear nuevos usuarios
export const createAccount = async (email, password) => {
  try {
    const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredencial.user);
  }
  catch(error) {
    console.log(error);
  }
}

// Para enviar mensaje de verificación de usuario

export const sendEmail = async () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // console.log('Email enviado');
  })
}

// Realtime Database
export function addName(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

// Con está function guardamos las fechas en que vamos a participar
export function addparticipation(userId, name, month) {
  const db = getDatabase();
  const reference = ref(db, month + userId);

  set(reference, {
    name: name,
  });
}

// function addMeses (mes) {
//   addName("day1", ["", "", "", "", "", ""], mes);
//   addName("day2", ["", "", "", "", "", ""], mes);
//   addName("day3", ["", "", "", "", "", ""], mes);
//   addName("day4", ["", "", "", "", "", ""], mes);
//   addName("day5", ["", "", "", "", "", ""], mes);
//   addName("day6", ["", "", "", "", "", ""], mes);
//   addName("day7", ["", "", "", "", "", ""], mes);
//   addName("day8", ["", "", "", "", "", ""], mes);
//   addName("day9", ["", "", "", "", "", ""], mes);
//   addName("day10", ["", "", "", "", "", ""], mes);
//   addName("day11", ["", "", "", "", "", ""], mes);
//   addName("day12", ["", "", "", "", "", ""], mes);
//   addName("day13", ["", "", "", "", "", ""], mes);
//   addName("day14", ["", "", "", "", "", ""], mes);
//   addName("day15", ["", "", "", "", "", ""], mes);
//   addName("day16", ["", "", "", "", "", ""], mes);
//   addName("day17", ["", "", "", "", "", ""], mes);
//   addName("day18", ["", "", "", "", "", ""], mes);
//   addName("day19", ["", "", "", "", "", ""], mes);
//   addName("day20", ["", "", "", "", "", ""], mes);
//   addName("day21", ["", "", "", "", "", ""], mes);
//   addName("day22", ["", "", "", "", "", ""], mes);
//   addName("day23", ["", "", "", "", "", ""], mes);
//   addName("day24", ["", "", "", "", "", ""], mes);
//   addName("day25", ["", "", "", "", "", ""], mes);
//   addName("day26", ["", "", "", "", "", ""], mes);
//   addName("day27", ["", "", "", "", "", ""], mes);
//   addName("day28", ["", "", "", "", "", ""], mes);
//   addName("day29", ["", "", "", "", "", ""], mes);
//   addName("day30", ["", "", "", "", "", ""], mes);
//   addName("day31", ["", "", "", "", "", ""], mes);
// }


// addMeses("Diciembre/");

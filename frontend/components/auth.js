import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signup = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    // Store user in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email
    });

    console.log("User created:", user.uid);
  } catch (error) {
    console.error(error.message);
  }
};

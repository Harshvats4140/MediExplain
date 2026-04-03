import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const handleLogin = async () => {
  await signInWithEmailAndPassword(auth, email, password);
};

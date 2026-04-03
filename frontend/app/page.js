import { login } from "../../auth";   // import function
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ CREATE HANDLER HERE
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* ✅ CONNECT BUTTON */}
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const handleLogin = async () => {
  await signInWithEmailAndPassword(auth, email, password);
};

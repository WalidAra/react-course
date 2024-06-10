import React from "react";
import GoogleIcon from "./components/GoogleIcon";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { authentication } from "./config/firebase";

export default function App() {
  const googleAuth = new GoogleAuthProvider();

  googleAuth.setCustomParameters({
    prompt: "select_account",
    login_hint: "email",
    ux_mode: "popup",
  });

  const OAuth = async () => {
    const result = await signInWithRedirect(authentication, googleAuth);

    console.log("====================================");
    console.log(result);
    console.log("====================================");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={OAuth}
        className="py-2.5 px-5 flex items-center gap-2 rounded-md bg-[#1a1a1a] text-white"
      >
        <GoogleIcon />
        Sign in with google
      </button>
    </div>
  );
}

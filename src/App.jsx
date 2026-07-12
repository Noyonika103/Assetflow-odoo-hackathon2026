import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <Login goToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup goToLogin={() => setShowLogin(true)} />
      )}
    </>
  );
}

export default App;
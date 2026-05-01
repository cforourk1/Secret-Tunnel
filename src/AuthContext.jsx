import { createContext, useContext, useState, useEffect } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext();



export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");
  const [error, setError] = useState(null)

  /* sign up function will be used to POST username to DB
  */

async function signUp(name) {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: name, password: "superSecret99%"})
      })

    const result = await response.json()
    setToken(result.token)
    sessionStorage.setItem("token", result.token)
    setLocation("TABLET")
}  catch(e) {
    console.error(e)
    setError(e.message)
}

}

//auth function to API get the token we set earlier for the user
async function authenticate() {
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
      method: "GET",
      headers: { "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`}
      })
   await response.json()
    setLocation("TUNNEL")
}  catch(e) {
    console.error(e)
    setError(e.message)
}

}

/* => means function body () takes no arguments. storedToken will hold my token. set the token so react can use it. By setting location to tablet - we skiip the welcome screen - user has already signed up.
*/
useEffect(() => {
  const storedToken = sessionStorage.getItem("token")
  if (storedToken) {
    setToken(storedToken)
    setLocation("TABLET")
  }
}, [])

  const value = { location, signUp, authenticate, error, setError };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}



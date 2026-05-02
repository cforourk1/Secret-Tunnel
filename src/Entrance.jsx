/** Users can enter their name to receive a token from the API. */
import { useState } from "react";
import { useAuth } from "./AuthContext";
export default function Entrance() {

/*adding phases to accomodate for my CSS I want to try. I am breaking it apart to try some CSS animations with the images I found of some badgers - because badgers are f'n cool, Mark. My onclick buttons to continue the story update my PHASE. my && operators are doing the work for me to determine what to show.
*/
const [phase, setPhase] = useState("STORY")


const { signUp, error, setError } = useAuth()
/*form data always comes back as a string. even if a user entered a number. in the gamecontext of the example they showed +formData.get("max") because max(variable) was an integer it needs to be converted. +formData is shorhand for saying this field is a number.
*/
const handleSubmit = (formData) => {
  const name = formData.get("name");
  if(!name){
    setError("Please enter a name")
    return
  }
  signUp(name);
};


  return (
    <div className="container">
    {error && <p>{error}</p>}
    {/*.         */}
    { phase === "STORY" && (
    <div className="storyText">
      <h1>Cave Entrance</h1>
      <p>Your journey has brought you to the base of a rocky mountain.</p>
      <p>
      {"The quickest path forward is through the mountain's winding tunnels, but a sturdy metal gate sits closed before you." }</p>
        <button onClick={() => setPhase("BADGERSPEAK")}>Continue...</button>
    </div>
    )}
    { phase === "BADGERSPEAK" && (
    <div className="badgerText">
    <div className="badgerRow">
    <img className="badger1" src="/badger1.png" alt="badger" />
    <img className="badger2" src="/badger2.png" alt="badger" />
    </div>
      <p>Two giant badgers stand guard on either side of the gate, their eyes fixed on you. The one on the left opens its mouth, and with a deep,rumbling voice, it asks, {"Who approaches? Speak your name."}</p>
       <button onClick={() => setPhase("NAMEINPUT")}>Continue...</button>
      </div>
    )}
    { phase === "NAMEINPUT" && (
    <div className="nameInput">
{/* form action handleSubmit is what calls the function that will pass the data from the form back up to the API  */}
      <form action={handleSubmit}>
        <label>
          Enter your name
          <input name="name" />
        </label>
        <button>Respond</button>
      </form>
    </div>
    )}
  </div>
    )
  }



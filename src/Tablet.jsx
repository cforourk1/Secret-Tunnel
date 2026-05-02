import { useAuth } from "./AuthContext";

import { useState } from "react";


/** Button that attempts to use the token in context when clicked */
export default function Tablet() {
/** Users can enter their name to receive a token from the API. */

const { authenticate } = useAuth()
/*form data always comes back as a string. even if a user entered a number. in the gamecontext of the example they showed +formData.get("max") because max(variable) was an integer it needs to be converted. +formData is shorhand for saying this field is a number.
*/
const handleSubmit = () => {
  authenticate();
};
/*In JSX you can't use regular " quotes directly in text — you need to use &quot; or curly braces with a string
*/
const [phase, setPhase] = useState("HEARTCHECK");
  return (
<>

  <div className="badgerRow">
    <img className="badgerBlock1" src="/badger1.png" alt="badger" />
    <img className="badgerBlock2" src="/badger2.png" alt="badger" />
  </div>
{ phase === "HEARTCHECK" && (
    <div className="heartCheck">
      <p> The sound of your name thuds against the gate as the two badgers furrow
        their brows. The badger on the right beckons you to approach. </p>
      <p>{"Only those who are pure of heart may pass. Place your hand upon this stone tablet, and thus will your true self be revealed."} It holds out a rectangular stone tablet carved with an intricate design.</p>
      <button className="hand" onClick={() => setPhase("TABLETAUTH")}>Continue...</button>
    </div>
    )},

{ phase === "TABLETAUTH" && (
    <div className="tabletAuth">
      <form action={handleSubmit}>
        <button className="auth">Place your palm upon the tablet.</button>
      </form>
    </div>
)}
    </>
  );
}

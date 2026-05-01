/** Users can enter their name to receive a token from the API. */
import { useAuth } from "./AuthContext";
export default function Entrance() {

const { signUp } = useAuth()
/*form data always comes back as a string. even if a user entered a number. in the gamecontext of the example they showed +formData.get("max") because max(variable) was an integer it needs to be converted. +formData is shorhand for saying this field is a number.
*/
const handleSubmit = (formData) => {
  const name = formData.get("name");
  signUp(name);
};


  return (
    <>
      <h1>Cave Entrance</h1>
      <p>Your journey has brought you to the base of a rocky mountain.</p>
      <p>
        The quickest path forward is through the mountain's winding tunnels, but
        a sturdy metal gate sits closed before you.
      </p>
      <p>
        Two giant badgers stand guard on either side of the gate, their eyes
        fixed on you. The one on the left opens its mouth, and with a deep,
        rumbling voice, it asks, "Who approaches? Speak your name."
      </p>
{/* form action handleSubmit is what calls the function that will pass the data from the form back up to the API  */}
      <form action={handleSubmit}>
        <label>
          Name
          <input name="name" />
        </label>
        <button>Respond</button>
      </form>
    </>
  );
}

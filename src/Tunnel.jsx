



/** Users can only this component if they are authorized by the API. */
export default function Tunnel() {
  return (
    <div className="container">
      <div className="badgerRow">
        <img className="badgerExit1" src="/badger1.png" alt="badger" />
        <img className="badgerExit2" src="/badger2.png" alt="badger" />
      </div>
      <section className="tunnel">
        <p>The tablet vibrates and a jadeite chime rings through the air.</p>
        <p>The earth beneath your feet trembles as the badgers slowly push the two doors of the gate open.</p>
        <p>You step into the tunnel, and your journey continues.</p>
      </section>
    </div>
  );
}
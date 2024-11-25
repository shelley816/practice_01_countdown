import { useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    // 當再次輸入時，將 submitted 設為 false，unknown entity 將會被顯示
    setSubmitted(false);
    setEnterPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

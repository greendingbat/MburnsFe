import { Link } from "react-router-dom";
import beatless from "./assets/beatless.png";

const BeatLess = () => {
  return (
    <div>
      <img style={{ width: "50%", borderRadius: "10px" }} src={beatless}></img>
      <h1>Beat-Less</h1>
      <div style={{ textAlign: "left" }}>
        <p>
          I made this game with a team during my first game jam in Fall 2019 at
          the University of Arizona. It was my first time working with Unity as
          well. Over the course of 48 hours, the team built this music-based
          platformer.
        </p>
        <p>
          I was in charge of contributing the musical tracks for the game, as
          well as designing the in-game audio system. I also ended up
          contributing enemy AI scripting, obstacle movement systems, collision
          detection, and level design.
        </p>
        <p>
          The game won "Best Audio/Music" and was voted 3rd Best Game overall.
          It also recieved coverage in the{" "}
          <a href="https://wildcat.arizona.edu/98587/arts/ready-set-game-jam-at-semiannual-ua-game-developing-contest/">
            school newspaper, the Daily Wildcat.
          </a>
        </p>
      </div>
      <a href="https://greendingbat.itch.io/beat-less">check out the game</a>
      <div style={{ marginTop: "3rem" }}>
        <Link to="/">back</Link>
      </div>
    </div>
  );
};

export default BeatLess;

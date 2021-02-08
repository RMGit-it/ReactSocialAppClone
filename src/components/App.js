import React from "react";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Bio from "./Bio";
import Feed from "./Feed";

function App() {
  return (
    <React.Fragment>
      <div class="splash">
        <NavBar />
        <hr />
        <div id="belowNav">
          <div id="profileBio">
            <Profile />
            <Bio />
          </div>
          <td id="column">
          <Feed />
          </td>
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;

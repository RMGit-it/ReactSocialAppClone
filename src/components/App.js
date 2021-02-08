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
        <Profile />
        <Bio />
        
        <Feed />
      </div>
    </React.Fragment>

  );
}

export default App;

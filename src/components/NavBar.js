import React from 'react';

function NavBar() {
    return (
        <React.Fragment>
            <div class="nav-container">
                <a class="nav" href="">Home</a>
                <a class="nav" href="">Notifications</a>
                <a class="nav" href="">Messages</a>
            </div>
            <form id="search">
                <input id="input" type="text" placeholder="Search"></input>
            </form>
            <button id="twitter">Tweet</button>
        </React.Fragment>
    );
}

export default NavBar;
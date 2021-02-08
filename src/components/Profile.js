import React from 'react';

function Profile() {
    return (
        <React.Fragment>
        <div class="profile">
            <div class="top-profile">
                {/* img profile */}
            </div> 
            <div class="bottom-profile">
                  {/* name profile */}
                <div class="nav-profile">
                    <a  href="">Tweets</a>
                    <a  href="">Followers</a>
                    <a  href="">Following</a>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Profile;
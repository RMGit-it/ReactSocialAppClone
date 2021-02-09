import React from 'react';
import FriendReq from './FriendReq';

const FriendRequest = [
    {
        name: "Shawn",
        img: 'https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png'
    },
    {
        name: "Cathy",
        img: 'https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png'
    },
    {
        name: "Brooke",
        img: 'https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png'
    },
]

function FriendRequestList() {
    return (
        <React.Fragment>
            <div class="friend-req">
                <h3>Friend Request</h3>
                <div class="inner-friend-req">
                {FriendRequest.map((req, index) =>
                <FriendReq
                name={req.name}
                img={req.img}
                key={index} />

                )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default FriendRequestList;
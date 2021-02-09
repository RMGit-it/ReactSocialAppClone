import React from 'react';
import PropTypes from "prop-types";


function FriendReq(props) {
    return (
        <React.Fragment>
        <div class="friendReq">
          <img src={props.img} class="firend-icon" />
          <h3>{props.name}</h3>
          <button>Accept</button>
        </div>
        </React.Fragment>
    )
}

FriendReq.protoTypes = {
    name: PropTypes.string,
    img: PropTypes.string
}

export default FriendReq;
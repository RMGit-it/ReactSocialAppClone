import React from "react";
import PropTypes from "prop-types";


function FeedCard(props) {
    return (
        <React.Fragment>
            <img src={props.img} class="image-icon" />
            <h3>{props.user}</h3>
            <h3>{props.message}</h3>
        </React.Fragment>
    )
}

FeedCard.propTypes = {
    user: PropTypes.string,
    message: PropTypes.string,
    img: PropTypes.string

}

export default FeedCard;
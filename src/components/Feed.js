import React from 'react';
import FeedCard from "./FeedCard";

const newsFeedlist = [
    {
      user: 'Randel',
      message: 'Hello there',
      img: 'https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png'
    },

    {
      user: 'Ellie',
      message: 'Hello there',
      img: 'https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png'
    },
    {
      user: 'Constantine',
      message: 'Hello there',
      img: 'https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png'
    }
];


function Feed() {
  return(
    <React.Fragment>
      <div class="feed">
          <h3>FEED</h3>
          <FeedCard />
        <p>Laboris proident cupidatat ipsum et fugiat. Enim sint sunt non cupidatat nisi magna do elit aute. Enim in ullamco laboris minim consectetur officia qui consectetur incididunt non pariatur et. Officia nisi ex do ad sit reprehenderit excepteur fugiat mollit labore minim.
        </p>
        <div id="search-feed">
          <input id="search-bar" type="text" />
          <button>Search</button>
        </div>
   
        {newsFeedlist.map((feedCard, index) =>
      <FeedCard user={feedCard.user}
        message={feedCard.message}
        img={feedCard.img}
        key={index} />

      )}
      </div>

    </React.Fragment>
  )
}
export default Feed;
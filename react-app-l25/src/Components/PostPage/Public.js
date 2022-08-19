import React from 'react';
import './Public.css'

const icons = {
    like: require('../img/like.png'),
    comments: require('../img/comment.png'),
    retweet: require('../img/retweet.png'),
    share: require('../img/share.png'),
    dot: require('../img/dot.png'),
    accept: require('../img/accept.png'),
};
const Public = ({ author, content, image, date }) => {
  
   return (
    <div class="container">
    <div class="post">
       <div class="head">
          <img class="photo" src={author.photo} alt="author" />
          <div class="headText">
             <p class="nameAuthor">{author.name}</p>
             <img class="ico" src={icons.accept} alt="icons_accept" />
             <span class="nickname">{author.nickname}</span>
             <img class="dot" src={icons.dot} alt="icons_dot" />
             <span class="date">{date}</span>
          </div>
          <span class="text">{content}</span>
       </div>
       <div class="main">
          <img class="contentImage" src={image} alt="content" />
       </div>
       <div class="footer">
          <span class="like">
             <img class="like" src={icons.like} alt="icons_like" />
             456
          </span>
          <span class="comments">
             <img class="comments" src={icons.comments} alt="icons_comments" />
             34
          </span>
          <span class="retwit">
             <img class="retwit" src={icons.retweet} alt="icons_retweet" />
             789
          </span>
          <span class="share">
             <img class="share" src={icons.share} alt="icons_share" />
             234
          </span>
       </div>
    </div>
 </div>
   );
};

export default Public;
import React , {useState} from 'react';
import { Avatar } from '@material-ui/core';
import "./PostDetail.css";
import love from "../../assets/images/love.svg";
import comment from "../../assets/images/comment.svg";
import share from "../../assets/images/share.svg";
import "./PostDetail.css";
import pp1circle from "../../assets/images/pp1circle.png";
import pp2circle from "../../assets/images/pp2circle.png";
import pp3circle from "../../assets/images/pp3circle.png";
import pp4circle from "../../assets/images/pp4circle.png";

const PostDetail = (props) => {
    const [commentData, setCommentData] = useState([
        {
            userName: "cpike3",
            commentId: 10,
            timeStamp: 13245,
            comment: "Progress isn't linear"
        },
        {
            userName: "samuelmz2",
            commentId: 11,
            timeStamp: 12345,
            comment: "How sweet of my brain :)"
        },
        {
            userName: "allrosepower",
            commentId: 12,
            timeStamp: 2345,
            comment: "I love how disappointed that baby looks after the comparison is revealed"
        },
    ])
    const randomNumber = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomizeAvatar = () => {
        let random = randomNumber(1,4);
        switch (random){
              case 1:
                  return <Avatar src={pp1circle} className="post-avatar"/>;
              case 2:
                  return <Avatar src={pp2circle} className="post-avatar"/>;
              case 3:
                  return <Avatar src={pp3circle} className="post-avatar"/>
              case 4:
                  return <Avatar src={pp4circle} className="post-avatar"/>       
        }
    }
    return (
        <div className="postdetail-container">
        <div className="post-header">
            {/* <Avatar src="" className="post-avatar"/> */}
            {randomizeAvatar()}
            <div className="post-username">{props.userName}</div>
        </div>
        <div>
            <img src={props.postImage} className="post-image" alt="square"/>
        </div>
        <div>
            <div className="post-actions-container">
                <img src={love} alt="Love Button" className="post-actions"/>
                <img src={comment} alt="Comment Button" className="post-actions"/>
                <img src={share} alt="Share Button" className="post-actions"/>
            </div>    
            <div className="post-likes">
            {props.likesAmount} likes
            </div>
        </div>
       
            <div className='post-user'>
                {
                    commentData.map((item,index) => (
                        <div className="post-comments">
                             <span style={{fontWeight:"bold"}}>{item.userName}</span>:<span style={{marginLeft:"5px"}}>{item.comment}</span>
                        </div>
                    ))
                }
            </div>
            
            {/* <div className="post-user">
            <div style={{fontWeight:"bold", marginRight:"5px"}}>{props.userName1} </div>{props.userComment1}
            </div>
            <div className="post-comments">
            View all {props.commentsAmount} comments
            </div>
            <div className="post-comments">
            <div style={{fontWeight:"bold", marginRight:"5px"}}> {props.userName2}</div> {props.userComment2}
            </div>
            <div className="post-comments">
            <div style={{fontWeight:"bold", marginRight:"5px"}}> {props.userName3}</div> {props.userComment3}
            </div>
            <div className="post-date">
            {props.date}
            </div> */}
            {/* <div className="post-input-container">
                <input type ="text" placeholder="Add a comment..."  className="post-input"/>
            </div>  */}
        
    </div>
    )
}

export default PostDetail;
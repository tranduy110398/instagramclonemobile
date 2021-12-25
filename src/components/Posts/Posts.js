// import Avatar from "@material-ui/core/Avatar";
import React, {Component} from 'react'
import pp1circle from "../../assets/images/pp1circle.png";
import pp2circle from "../../assets/images/pp2circle.png";
import pp3circle from "../../assets/images/pp3circle.png";
import pp4circle from "../../assets/images/pp4circle.png";
import image3 from "../../assets/posts/image3.jpg";
import image4 from "../../assets/posts/image4.jpg";
import image5 from "../../assets/posts/image5.jpg";
import image6 from "../../assets/posts/image6.jpg";
import image7 from "../../assets/posts/image7.jpg";
import love from "../../assets/images/love.svg";
import comment from "../../assets/images/comment.svg";
import share from "../../assets/images/share.svg";
import "./Posts.css";
import upload from "../../assets/images/upload.png";
import PostDetail from '../PostDetail/PostDetail';
import {storage,auth} from "../firebase";
import "./Posts.css";
class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
            postArray:[],
        }
    }

    getPostHandler = () => {
        const thisContext = this;
        fetch('http://localhost:8080/post')
        .then(response => response.json())
        .then(data => {
            thisContext.setState({postArray: data})
        })
    }

    
    componentDidMount() {
        this.getPostHandler();
    }

    // const [postData, setPostData] = useState([
    //     {
    //         postAvatar: pp1circle,
    //         postUserName: "thesquarecomics",
    //         imageUrl: image3,
    //         likesAmount: 10.120,
    //         userName1: "thesquarecomics",
    //         userComment1: "Progress",
    //         commentsAmount: 32,
    //         userName2: "cpike3",
    //         userComment2: "Progress isn't linear",
    //         userName3: "almost_funny_",
    //         userComment3: "Wait, doesn't anger come before bargaining? Kinda sus",
    //         date: "10 HOURS AGO"
    //     },
    //     {
    //       postAvatar: pp2circle,
    //       postUserName: "thesquarecomics",
    //       imageUrl: image4,
    //       likesAmount: 14.233,
    //       userName1: "thesquarecomics",
    //       userComment1: "Brain",
    //       commentsAmount: 25,
    //       userName2: "cpike3",
    //       userComment2: "Brain is too good at its job",
    //       userName3: " artbeing_shiwu",
    //       userComment3: "How sweet of my brain :)",
    //       date: "1 DAYS AGO"
    //   },
    //   {
    //       postAvatar: pp3circle,
    //       postUserName: "thesquarecomics",
    //       imageUrl: image5,
    //       likesAmount:  18.179 ,
    //       userName1: "thesquarecomics",
    //       userComment1: "No, I don’t have one",
    //       commentsAmount: 56,
    //       userName2: "allrosepower",
    //       userComment2: "I love how disappointed that baby looks after the comparison is revealed.",
    //       userName3: "samuelmz2",
    //       userComment3: "On the other hand.. at least babies have a woman/man to comfort them.",
    //       date: "2 DAYS AGO"
    //   },
    //   {
    //       postAvatar: pp4circle,
    //       postUserName: "thesquarecomics",
    //       imageUrl: image6,
    //       likesAmount: 18.236,
    //       userName1: "thesquarecomics",
    //       userComment1: "Explore",
    //       commentsAmount: 36,
    //       userName2: "thelamejournal",
    //       userComment2: "Internet explorer",
    //       userName3: "calvin_williiams",
    //       userComment3: "Then he found out exploration costs money and paid time off from work",
    //       date: "5 DAYS AGO"
    //   },
    //   {
    //       postAvatar: pp1circle,
    //       postUserName: "thesquarecomics",
    //       imageUrl: image7,
    //       likesAmount: 16.841,
    //       userName1: "thesquarecomics",
    //       userComment1: "Job",
    //       commentsAmount: 32,
    //       userName2: "uncloudless",
    //       userComment2: "I love these unexpectedly wholesome comics you throw out there",
    //       userName3: "artbeing_shiwu",
    //       userComment3: "Wow even a mirror got job :')",
    //       date: "7 DAYS AGO"
    //   }
    // ])

    uploadHandler = (event) => {
        let image = event.target.files[0];
        const context = this;
        if(image === null || image === undefined){
            return;
        }
        var uploadTask = 
                        storage
                        .ref("images")
                        .child(image.name)
                        .put(image);
        uploadTask.on(
            "state_changed",
            function (snapshot){
        
            },
            function(error) {

            },
            function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL){
                        console.log(downloadURL);
                        let payload = {
                            "postId": Math.floor(Math.random()*100000).toString(),
                            "userId": JSON.parse(localStorage.getItem("users")).uid,
                            "postPath": downloadURL,
                            "timeStamp": new Date().getTime(),
                            "likesAmount": Math.floor(Math.random()*30000).toString()
                        }
                        const responses ={
                            method: "POST",
                            headers: {'Content-Type': "application/json"},
                            body: JSON.stringify(payload)
                        }
                        fetch("http://localhost:8080/post", responses)
                        .then(response => response.json())
                        .then(data => {
                             console.log(data);
                             context.getPostHandler();
                        })
                        .catch(error => {

                        })
                })
            }
        )
  }

    render() {
        return (
        <div>
            <div className='post-container'>
                    <div className='file-upload'>
                        <label for ="file-upload">
                            <img className='post-uploadicon' src={upload}/>
                        </label>
                        <input type="file" id="file-upload" onChange={this.uploadHandler}/>
                    </div>
           
             {this.state.postArray.map((item,index) => (
                <PostDetail id={item.postId} 
                            userName={item.userName} 
                            postImage={item.postPath} 
                            likesAmount={item.likesAmount}/>
                ))}
            </div> 
        </div>
        
    )
    }
    
}

export default Posts;
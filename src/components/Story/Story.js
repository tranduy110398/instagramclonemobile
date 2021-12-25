import React, {useState} from 'react'
import "./Story.css";
import pp1circle from "../../assets/images/pp1circle.png";
import pp2circle from "../../assets/images/pp2circle.png";
import pp3circle from "../../assets/images/pp3circle.png";
import pp4circle from "../../assets/images/pp4circle.png";
import Avatar from "@material-ui/core/Avatar";
import MediaQuery from "react-responsive";
const Story = () => {
    const [storyData, setStoryData] = useState([
        {
            username: "1",
            imageUrl: pp1circle
        },
        {
            username: "2",
            imageUrl: pp2circle
        },
        {
            username: "3",
            imageUrl: pp3circle
        },
        {
            username: "4",
            imageUrl: pp4circle
        },
        {
            username: "5",
            imageUrl: pp1circle
        }
        ,
        {
            username: "6",
            imageUrl: pp2circle
        }
        ,
        {
            username: "5",
            imageUrl: pp3circle
        }
        ,
        {
            username: "5",
            imageUrl: pp4circle
        }
        ,
        ]);
    return (
            <div className="story-container">
               {storyData.map(item => (
                   <div className="stories">
                <Avatar src={item.imageUrl} className="story_avatar"/>
                <div className="story_text">{item.username}</div>
            </div>
               ))} 
        </div>
    )
}

export default Story;

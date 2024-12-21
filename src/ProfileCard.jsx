
import {useState} from "react";

function ProfileCard({ titulo , handle , url}){
    return (
        <div>
            <img src={url} alt="logo"/>
            <h2>{titulo}</h2>
            <p>{handle}</p>
        </div>
    )
}
export default ProfileCard; 
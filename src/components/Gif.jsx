import React from "react";

export default function Gif ({title,id,name,url}){
    return <div>
            <h4>{title}</h4>
            <img alt={name} src={url}/>
        </div>
}
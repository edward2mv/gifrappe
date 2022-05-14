import Gif from './Gif';
import {React, useEffect, useState} from 'react'
import getGifs from '../api/getGifs';

function ListOfGifs({keyword}) {
    const [gifs, setGifs] = useState([])

useEffect(()=> {
        getGifs({keyword})
        .then(gifs => setGifs(gifs))
        console.log("API Call")
    },[keyword])

return (
    <div>
        {
        gifs.map(({id,title,url}) =>
            <Gif
            key={id}
            title={title}
            url={url}
            id={id}
            />)
        }
    </div>
)
}

export default ListOfGifs
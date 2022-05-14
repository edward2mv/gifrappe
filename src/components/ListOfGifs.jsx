import Gif from './Gif';
import {React, useEffect, useState} from 'react'
import getGifs from './api/getGifs';

function ListOfGifs({keyword}) {
    const [gifs, setGifs] = useState([])

useEffect(()=> {
        getGifs({keyword:'programing'}).then(gifs => setGifs(gifs))
        console.log("API Call")
    },[])

return (
    <div>
        {
        gifs.map(gif =>
            <Gif
            key={gif.id}
            title={gif.title}
            url={gif.url}
            id={gif.id}
            />)
        }
    </div>
)
}

export default ListOfGifs
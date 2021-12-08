import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [gifs, setGifs] = useState([]);

    useEffect( ()=> {
        getGifs();
    }, []);

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=QtV5zpw9hl9njljchuAp0v0IQ69ZO9vs`;

        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })

        setGifs( gifs );
    }

    return (
        <div className="section-gif">
          <h3 className="section-gif-title">{category}</h3>
          <div className="card-grid">
                {
                    gifs.map( (gif) => (
                        <GifGridItem 
                            key={gif.id} 
                            { ...gif }
                        />
                    ))
                }
          </div>

        </div>
    )
}

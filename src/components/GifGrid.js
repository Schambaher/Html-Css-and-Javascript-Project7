import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:gifs, loading } = useFetchGifs( category );

    return (
        <div className="section-gif">
            <h3 className="section-gif-title">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
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

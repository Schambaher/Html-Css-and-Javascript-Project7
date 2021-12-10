import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    //console.log(id, title, url);

    return (
        <div className="card animate__animated animate__fadeIn">
            <div className="card-image">
                <img className="card-img" src={url} alt={title}/>
            </div>
            <div className="card-footer">
                <p className="card-title">{ title }</p>
            </div>
        </div>
    )
}

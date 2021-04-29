import React from 'react'
import './Gif.css';


export default function Gif({ title, id, url }) {
    return(
        <a href={`${id}`} className='conatainer-Gif'>
            <h4>{title}</h4>
                <br></br>
                <img className='Gif' alt={title} src={url} />
        </a>
    )
}
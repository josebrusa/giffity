import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'

const POPULARES_GIFS = ['Dragon Ball', 'Powers Rangers', 'Los Simpsons', 'Los Jovenes Titanes']

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { gifs } = useGifs()

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
        console.log(keyword)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit} >
                <button>Buscar</button>
                <input placeholder='Search your Gifs' onChange={handleChange} type='text' value={keyword} />
            </form>
            <h3>Ultima Busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3>Los Gif mas populares</h3>
            <ul>
                {POPULARES_GIFS.map((popularGif) =>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
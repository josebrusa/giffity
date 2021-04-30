import React, { useState } from "react"
import { useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Category from '../../components/Category'
import {useGifs} from '../../hooks/useGifs'

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
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                    <Category name="Categorias populares" options={POPULARES_GIFS} />
                    <Category name="Mascotas" options={['Perros', 'Gatos', 'Hamster']} />
                </div>
            </div>
        </>
    )
}
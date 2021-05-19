import React, { useCallback } from "react"
import { useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches'
import SearchForm from "../../components/SearchForm"
import { Helmet } from "react-helmet"


export default function Home() {
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmitSearchForm = useCallback(({ keyword }) => {
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])


    return (
        <>
        <Helmet>
            <title>Home | Giffity</title>
            <link rel="canonical" href="https://giffity.vercel.app/" />
        </Helmet>
        <header className="o-header">
            <SearchForm onSubmit={handleSubmitSearchForm} />
        </header>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={ gifs } />
                </div>
            <div className="App-category">
                <TrendingSearches />
            </div>
        </div>
        </>
    )
}
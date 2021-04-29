import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../service/getGifs'



export default function ListOfGifs({ params }) {
    const [loading, setLoading] = useState(false)

    const { keyword } = params
    const [gifs, setGifs] = useState([])

    useEffect(function(){
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if (loading) return <i>Cargando @...!!!</i>
    return  <div>
                {
                    gifs.map(({id, title, url}) =>
                    <Gif
                        key={id}
                        title={title}
                        url={url}
                        id={id}
                        />
                    )
                }
            </div>
}
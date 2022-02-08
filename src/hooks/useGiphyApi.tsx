import { useEffect, useState } from "react"
import axios from "axios"
import { Gif } from "types/Gif"


const useGiphyApi = ( ) =>{

    const [data,setData] = useState<Gif[]>([])
    const [error,setError] = useState<any>(null)
    const [loading,setLoading] = useState(false)

    const giphyAPIKey = 'd7HcmuEW9xMVebztMknWEAfi9yshHFEO';

    const giphyAPIBaseSearchURL = (searchQuery: string) => `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=${searchQuery}&limit=6&offset=0&rating=g&lang=en`
    const giphyAPIBaseTrendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIKey}&limit=6&rating=g`

    const getGifs = async (query?: string) => {
            try{
                setLoading(true)
                const response = await axios.get(query ? giphyAPIBaseSearchURL(query) : giphyAPIBaseTrendingURL)
                setData(response.data.data)
            }catch(err){
                setError(err)
            }finally{
                setLoading(false)
            }
    }

    return { data, error, loading, getGifs }
}

export default useGiphyApi;
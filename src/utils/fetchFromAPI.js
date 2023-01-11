import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cbf2821985msh8d18ff919687cf1p1acabcjsnb9b231f99bc9',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }


export const fetchFromAPI = async (url) => {
    const {data} = await axios.request(`${BASE_URL}/${url}`, options)
    return data
}
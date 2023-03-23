import React, {useState , useEffect } from 'react';
import axios from 'axios';
import ArtDetails from '../Models/ArtDeets';

function Art() {
    const [artList, setArtList] = useState([]);

    const [selectedArt, setSelectedArt] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://acnhapi.com/v1a/art')
            //api link for art^
            setArtList(Object.values(response.data))
            console.log(artList)
        }
        fetchData()
    }, []);


    function handleClick(art) {
        setSelectedArt(art)
    }

  return (
    <div>
        <h1>Art</h1>
        <ul className='grid'>
            {artList.map((art)=>(
                <li key={art.id} onClick = {() =>
                handleClick(art)}>
                    <img className='icon' src={art.image_uri} alt ={art.name['name-USen']}/>
                    {selectedArt && selectedArt.id === art.id && (
                        <div>
                            <ArtDetails art={selectedArt}/>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Art;
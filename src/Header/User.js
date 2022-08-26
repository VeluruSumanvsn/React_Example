import React, { useEffect, useState } from 'react'

export const User = () => {
    const [data, setData] = useState(['']); //useState hook
    useEffect(() => {                       //useEffect hook
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY") //restFakeAPI
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [])
    return (
        <div className='user'>
            {
            data ? <div className='row m-0'> 
            {
                data && data.map((res) => 
                <div className='col-md-2'>
                    <img className='w-100 h-25 m-2' src={res.photos.id}/>
                    {/* <h3>{res.title}</h3>
                    <p className='px-2'>{res.description}</p> */}
                </div>
                )
            } </div> :
                <div>  </div>
            }

        </div>
    )
}

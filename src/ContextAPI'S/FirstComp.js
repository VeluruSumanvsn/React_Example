import React, { useContext, useState } from 'react';
import { store } from '../App'

export const FirstComp = () => {
    const [data, setData] = useContext(store);
    const [content, setContent] = useState('');
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("Form Submitted");
        setData([...data, {name:content}])
    }
    return (
        <div>
            {
                data.map((res, index) => <h3 key={index}>{res.name}</h3>)
            }
            <form onSubmit={submitHandler}>
                <input type='text' placeholder="Enter the name" onChange={(e) => setContent(e.target.value)} />
                <input type="submit" value="Add" />
                <button>submit</button>
                <input type='search'/>
                <input type='button'/>
            </form>

        </div>
    )
}

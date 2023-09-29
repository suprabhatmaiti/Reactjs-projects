import SearchBar from './components/SearchBar'
import SearchImage from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';
function App (){

    const [images,setImages]=useState([]);

    const handleClick=async (term)=>{
        const result=await SearchImage(term);
        setImages(result);
    }

    return(
        <div>
            <SearchBar onSubmit={handleClick}/>
            <ImageList images={images}/>
        </div>
    )
}
export default App;
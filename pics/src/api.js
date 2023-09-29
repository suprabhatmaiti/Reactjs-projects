import Axios from 'axios'

const SearchImage=async(term)=>{
    const response=await Axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID hc3RZ7wRGSANs0JQzsV8J0AO9rpIPHM9K7JtbQ7zVAE'
        },
        params: {
            query:term
        }

    });
    return response.data.results;
};
export default SearchImage;
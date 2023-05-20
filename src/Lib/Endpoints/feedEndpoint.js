import axios from 'axios'


export const getFeed = async () => {
    let url = "//localhost:3000/feed";

    try {
        return await axios.get(url)
        .then(response => {
            return response;
        });
        
    } catch (error) {
        console.log("getFeed Error", error);
        return error;
    }
}

export const searchFeed = async (searchValue) => {
    let url = `//localhost:3000/feed?q=${searchValue}`

    try {
        return await axios.get(url)
        .then(response => {
            return response;
        });        
    } catch (error) {
        console.log("Search Feed Error", error);
        return error
    }
}
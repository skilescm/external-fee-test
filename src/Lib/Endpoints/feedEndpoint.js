import axios from 'axios'


export const getFeed = async () => {
    let url = "//localhost:3000/feed";
    console.log(url, "api url");

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
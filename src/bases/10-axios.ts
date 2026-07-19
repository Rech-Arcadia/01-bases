import axios from 'axios';

const apiKey = 'N405bbHepBeBnOP6Mt3MxIwEWYArICWM';

export const giphyAPi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

// export default giphyAPi;

// giphyAPi.get('/random')
// .then( response => console.log(response.data.data.images.downsized_large.url))
// .catch( error => console.error(error));
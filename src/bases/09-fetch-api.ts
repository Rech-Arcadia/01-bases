import type { GIFResponse } from "../interfaces/gif-.response";

const apiKey = 'N405bbHepBeBnOP6Mt3MxIwEWYArICWM';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(response => response.json())
    .then((body: GIFResponse) => console.log({ data: body.data.images.original.url }))
    .catch(error => console.error(error));
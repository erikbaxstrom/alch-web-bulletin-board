/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { renderPost } from './render-utils.js';
import { getPosts } from '/fetch-utils.js';

/* Get DOM Elements */
const board = document.getElementById('board');
const errorDisplay = document.getElementById('error-display');

/* State */
let error = null;
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();
    error = response.error;
    posts = response.data;

    if (error) {
        displayError();
    } else {
        displayPosts();
    }
});
/* Display Functions */
function displayError() {
    console.error(error);
    errorDisplay.textContent = error.message;
}

function displayPosts() {
    for (let post of posts) {
        const postEl = renderPost(post);
        board.append(postEl);
    }
}

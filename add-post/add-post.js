/* Imports */
// this will check if we have a user and set signout link if it exists
import '/auth/user.js';
import { createPost } from '/fetch-utils.js';

/* Get DOM Elements */
const addPostForm = document.getElementById('add-post-form');

/* State */
let error = null;

/* Events */
// submit
addPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(addPostForm);
    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        contact: formData.get('contact'),
    };

    const response = await createPost(post);
});

/* Display Functions */

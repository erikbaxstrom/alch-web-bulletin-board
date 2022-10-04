/* Imports */
// this will check if we have a user and set signout link if it exists
import '/auth/user.js';

/* Get DOM Elements */
const addPostForm = document.getElementById('add-post-form');

/* State */
let error = null;

/* Events */
// submit
addPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(addPostForm);
    console.log(formData.get('title'));
    console.log(formData.get('description'));
    console.log(formData.get('category'));
});

/* Display Functions */

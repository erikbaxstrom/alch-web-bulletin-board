export function renderPost(post) {
    const li = document.createElement('li');
    const titleEl = document.createElement('h2');
    const categoryEl = document.createElement('h3');
    const descriptionEl = document.createElement('p');
    const contactEl = document.createElement('p');

    titleEl.textContent = post.title;
    categoryEl.textContent = post.category;
    descriptionEl.textContent = post.description;
    contactEl.textContent = post.contact;

    li.append(titleEl);
    li.append(categoryEl);
    li.append(descriptionEl);
    li.append(contactEl);

    li.classList.add('post');

    return li;
}

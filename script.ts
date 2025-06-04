// Create a form container
const formContainer = document.createElement('div');
formContainer.className = 'form-container';


//Create title of Note Taking App
const heading = document.createElement('h1');
heading.textContent = 'Note Taking App';
formContainer.appendChild(heading);

//Add a ne note title
const noteTitle = document.createElement('h3');
noteTitle.textContent = 'Add a New Note ';
formContainer.appendChild(noteTitle);
// Create a form element
const form = document.createElement('form');
form.className = 'note-form';

// Create a text input for the note title
const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'title';
titleInput.placeholder = 'Enter a Note Title';
form.appendChild(titleInput);

//Append form to form container
formContainer.appendChild(form);

// Add form container to document body
document.body.appendChild(formContainer);
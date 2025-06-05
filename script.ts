// Create a modal container (for the pop up window when clicking on a existing note)
const modalContainer = document.createElement('div');
modalContainer.className = 'modal';
//button inside the modal to close it
const closeButton = document.createElement('button');
closeButton.textContent = '✕';
closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});
//title of the modal
const modalTitle = document.createElement('h2');
modalTitle.className = 'modal-title';
//added modal body
const modalBody = document.createElement('p');
modalBody.className = 'modal-body';
// Append elements to modal container
modalContainer.appendChild(closeButton);
modalContainer.appendChild(modalTitle);
modalContainer.appendChild(modalBody);
// Create a form container
const formContainer = document.createElement('div');
formContainer.className = 'form-container';

// Create title of Note Taking App
const heading = document.createElement('h1');
heading.textContent = 'Note Taking App';
formContainer.appendChild(heading);

// Add a new note title
const noteTitle = document.createElement('h3');
noteTitle.textContent = 'Add a New Note';
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

// Create a note input
const note = document.createElement('textarea');
note.name = 'note';
note.id = 'note';
note.cols = 30;
note.rows = 10;
note.placeholder = 'Write your note here...';
form.appendChild(note);

// Append form to form container
formContainer.appendChild(form);

// Add modal and form container to document body
document.body.appendChild(modalContainer);
document.body.appendChild(formContainer);
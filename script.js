// Create a form container
var formContainer = document.createElement('div');
formContainer.className = 'form-container';
// Create title of Note Taking App
var heading = document.createElement('h1');
heading.textContent = 'Note Taking App';
formContainer.appendChild(heading);
// Add a new note title
var noteTitle = document.createElement('h3');
noteTitle.textContent = 'Add a New Note';
formContainer.appendChild(noteTitle);
// Create a form element
var form = document.createElement('form');
form.className = 'note-form';
// Create a text input for the note title
var titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'title';
titleInput.placeholder = 'Enter a Note Title';
form.appendChild(titleInput);
// Create a note input
var note = document.createElement('textarea');
note.name = 'note';
note.id = 'note';
note.cols = 30;
note.rows = 10;
form.appendChild(note);
// Append form to form container
formContainer.appendChild(form);
// Add form container to document body
document.body.appendChild(formContainer);

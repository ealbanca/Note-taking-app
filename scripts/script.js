// Create a modal container (for the pop up window when clicking on a existing note)
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
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = titleInput.value;
    var body = note.value;
    // Validate input
    if (title.length > 0 && body.length > 0) {
        var newNote = new Note(title, body);
        addNewNoteToContainer(newNote);
        // Clear the input fields after adding the note
        titleInput.value = '';
        note.value = '';
    }
});
// Create a label for the note title input
var titleLabel = document.createElement('label');
titleLabel.htmlFor = 'title';
titleLabel.textContent = 'Title';
form.appendChild(titleLabel);
// Create a text input for the note title
var titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'title';
titleInput.placeholder = 'Enter a Note Title';
form.appendChild(titleInput);
// Create a label for the note input
var noteLabel = document.createElement('label');
noteLabel.htmlFor = 'note';
noteLabel.textContent = 'Note';
form.appendChild(noteLabel);
// Create a note input
var note = document.createElement('textarea');
note.name = 'note';
note.id = 'note';
note.cols = 30;
note.rows = 10;
note.placeholder = 'Write your note here...';
form.appendChild(note);
// Create a submit button
var submitButton = document.createElement('button');
submitButton.textContent = 'Add Note';
submitButton.type = 'submit';
form.appendChild(submitButton);
// Append form to form container
formContainer.appendChild(form);
//Create a note container to display existing notes
var noteContainer = document.createElement('div');
noteContainer.className = 'note-container'; // Event listener for the view note button
noteContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('view-button')) {
        var currentNote = e.target.closest('.note');
        if (currentNote) {
            var titleElem = currentNote.querySelector('.note-title');
            var bodyElem = currentNote.querySelector('.note-body');
            if (titleElem && bodyElem) {
                var currentTitle = titleElem.textContent;
                var currentBody = bodyElem.textContent;
                activateNoteModal(currentTitle, currentBody);
            }
        }
    }
});
var modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
//Create a modal element
var modal = document.createElement('div');
modal.className = 'modal';
//button inside the modal to close it
var closeButton = document.createElement('button');
closeButton.textContent = '✕';
closeButton.addEventListener('click', function () {
    modalContainer.style.display = 'none';
});
//title of the modal
var modalTitle = document.createElement('h2');
modalTitle.className = 'modal-title';
//added modal body
var modalBody = document.createElement('p');
modalBody.className = 'modal-body';
// Append elements to modal container
modal.appendChild(closeButton);
modal.appendChild(modalTitle);
modal.appendChild(modalBody);
modalContainer.appendChild(modal);
// Add modal, form container, and note container to document body
document.body.appendChild(modalContainer);
document.body.appendChild(formContainer);
document.body.appendChild(noteContainer);
// Create class constructor for Note
var Note = /** @class */ (function () {
    function Note(title, body) {
        this.title = title;
        this.body = body;
        this.id = Math.random();
    }
    return Note;
}());
// Function to add a new note to the note container
function addNewNoteToContainer(note) {
    // Create a note element
    var noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = "\n    <span hidden>".concat(note.id, "</span>\n    <h2 class=\"note-title\">").concat(note.title, "</h2>\n    <p class=\"note-body\">").concat(note.body, "</p>\n    <div class='note-buttons'>\n    <button class=\"view-button\">View Note</button>\n    <button class=\"delete-button\">Delete Note</button>\n    </div>\n\n    ");
    //append the note element to the note container
    noteContainer.appendChild(noteElement);
    // Add click event to open modal
    /* noteElement.addEventListener('click', () => {
         modalTitle.textContent = note.title;
         modalBody.textContent = note.body;
         modalContainer.style.display = 'flex';
     });*/
}
// Function to activate the note modal
function activateNoteModal(title, body) {
    var modalTitle = document.querySelector('.modal-title');
    var modalBody = document.querySelector('.modal-body');
    if (modalTitle && modalBody) {
        modalTitle.textContent = title;
        modalBody.textContent = body;
        modalContainer.style.display = 'grid';
    }
}

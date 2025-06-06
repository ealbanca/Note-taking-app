// Create a modal container (for the pop up window when clicking on a existing note)
const modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';

//Create a modal element
const modal = document.createElement('div');
modal.className = 'modal';

//button inside the modal to close it
const closeButton = document.createElement('button');
closeButton.textContent = '✕';
closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});
//title of the modal
const modalTitle = document.createElement('h2');
modalTitle.className = 'modal-title';
modalTitle.textContent = 'Title here';
//added modal body
const modalBody = document.createElement('p');
modalBody.className = 'modal-body';
modalBody.textContent = 'This is where the note content will be displayed.';
// Append elements to modal container
modal.appendChild(closeButton);
modal.appendChild(modalTitle);
modal.appendChild(modalBody);
modalContainer.appendChild(modal);

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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value;
    const body = note.value;

    // Validate input
    if (title.length > 0 && body.length > 0) {
        const newNote = new Note(title, body);
        addNewNoteToContainer(newNote);
        // Clear the input fields after adding the note
        titleInput.value = '';
        note.value = '';
    }
});

// Create a label for the note title input
const titleLabel = document.createElement('label');
titleLabel.htmlFor = 'title';
titleLabel.textContent = 'Title';
form.appendChild(titleLabel);

// Create a text input for the note title
const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'title';
titleInput.placeholder = 'Enter a Note Title';
form.appendChild(titleInput);

// Create a label for the note input
const noteLabel = document.createElement('label');
noteLabel.htmlFor = 'note';
noteLabel.textContent = 'Note';
form.appendChild(noteLabel);

// Create a note input
const note = document.createElement('textarea');
note.name = 'note';
note.id = 'note';
note.cols = 30;
note.rows = 10;
note.placeholder = 'Write your note here...';
form.appendChild(note);

// Create a submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Add Note';
submitButton.type = 'submit';
form.appendChild(submitButton);

// Append form to form container
formContainer.appendChild(form);

//Create a note container to display existing notes
const noteContainer = document.createElement('div');
noteContainer.className = 'note-container';

// Add modal, form container, and note container to document body
document.body.appendChild(modalContainer);
document.body.appendChild(formContainer);
document.body.appendChild(noteContainer);


// Create class constructor for Note
class Note {
    public id: number;
    public title: string;
    public body: string;

    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
        this.id = Math.random();
    }
}

// Function to add a new note to the note container
function addNewNoteToContainer(note) {
    // Create a note element
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
    <span hidden>${note.id}</span>
    <h2 class="note-title">${note.title}</h2>
    <p class="note-body">${note.body}</p>
    <div class='note-buttons'>
    <button class="view-button">View Details</button>
    <button class="delete-button">Delete</button>
    </div>

    `;
    //append the note element to the note container
    noteContainer.appendChild(noteElement);

    // Add click event to open modal
    noteElement.addEventListener('click', () => {
        modalTitle.textContent = note.title;
        modalBody.textContent = note.body;
        modalContainer.style.display = 'flex';
    });

}
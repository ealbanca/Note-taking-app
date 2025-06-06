// Create a modal container (for the pop up window when clicking on a existing note)
// Create a form container
const formContainer = document.createElement('div');
formContainer.className = 'form-container';

// Create title of Note Taking App
const heading = document.createElement('h1');
heading.textContent = 'Note Taking App';
formContainer.appendChild(heading);

// Add a new note title
const myName = document.createElement('h3');
myName.textContent = 'By Hared Albancando Robles';
formContainer.appendChild(myName);

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
        addNoteToLocalStorage(newNote);
        // Clear the input fields after adding the note
        titleInput.value = '';
        note.value = '';
        // Show success message
        showAlert('Note added successfully', 'success');
    } else {
        // Show error message
        showAlert('Please fill in both fields', 'error');
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
noteContainer.className = 'note-container';// Event listener for the view note button
noteContainer.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).classList.contains('view-button')) {
        const currentNote = (e.target as HTMLElement).closest('.note');
        if (currentNote) {
            const titleElem = currentNote.querySelector('.note-title');
            const bodyElem = currentNote.querySelector('.note-body');
            if (titleElem && bodyElem) {
                const currentTitle = titleElem.textContent;
                const currentBody = bodyElem.textContent;
                activateNoteModal(currentTitle, currentBody);
            }

        }
    } if ((e.target as HTMLElement).classList.contains('delete-button')) {
        const currentNote = (e.target as HTMLElement).closest('.note');
        showAlert('Note deleted successfully', 'remove');
        if (currentNote) {
            currentNote.remove();
            const noteId = currentNote.querySelector('span')?.textContent;
            if (noteId) {
                removeNoteFromLocalStorage(parseFloat(noteId));
            }
        }
    }
});

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

//added modal body
const modalBody = document.createElement('p');
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
    <button class="view-button">View Note</button>
    <button class="delete-button">Delete Note</button>
    </div>

    `;
    //append the note element to the note container
    noteContainer.appendChild(noteElement);
}

// Function to activate the note modal
function activateNoteModal(title, body) {
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');
    if (modalTitle && modalBody) {
        modalTitle.textContent = title;
        modalBody.textContent = body;
        modalContainer.style.display = 'grid';
    }
}

// Function to show alert messages
function showAlert(message: string, alertClass: string) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `message ${alertClass}`;
    alertDiv.textContent = message;
    form.insertAdjacentElement('beforebegin', alertDiv);

    // Remove alert after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3500);
}

// Function to get all notes from the local storage
function getAllNotes() {
    let notes;
    if (localStorage.getItem('notes') === null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('notes') || '[]');
    }
    return notes;
}


// Function to add a note to the local storage
function addNoteToLocalStorage(note) {
    const notes = getAllNotes();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Function to display all notes from local storage on page load
function displayNotes() {
    const notes = getAllNotes();
    notes.forEach((note) => {
        addNewNoteToContainer(note);
    });
}

//function to remove a note from local storage
function removeNoteFromLocalStorage(noteId) {
    const notes = getAllNotes();
    notes.forEach((note, index) => {
        if (note.id === noteId) {
            notes.splice(index, 1);
        }
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Call the displayNotes function to show existing notes on page load
document.addEventListener('DOMContentLoaded', displayNotes);
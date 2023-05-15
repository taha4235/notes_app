let noteCount = 0;

function createNote() {
  const noteContainer = document.getElementById('noteContainer');


  const newNote = document.createElement('div');
  newNote.className = 'container';

  const noteContent = document.createElement('textarea');
  noteContent.rows = 4;
  noteContent.cols = 30;

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.className = 'saveButton';
  //   const vars = "<i class='fa-solid fa-not-equal'></i>"
  //   saveButton.appendChild(vars)
  saveButton.onclick = saveNote.bind(null, noteCount);

  newNote.appendChild(noteContent);
  newNote.appendChild(saveButton);

  noteContainer.appendChild(newNote);

  newNote.style.display = 'block';

  noteCount++;
}

function saveNote(noteIndex) {
  const noteContainer = document.getElementById('noteContainer');
  const notes = noteContainer.getElementsByClassName('container');

  const currentNote = notes[noteIndex];
  const noteContent = currentNote.getElementsByTagName('textarea')[0].value;
  console.log(`Note ${noteIndex + 1} saved: ${noteContent}`);
}

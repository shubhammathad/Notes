const form = document.getElementById('noteForm');
const notesList = document.getElementById('notesList');

const API_URL = '/api/notes';

async function fetchNotes() {
  const res = await fetch(API_URL);
  const notes = await res.json();
  renderNotes(notes);
}

function renderNotes(notes) {
  notesList.innerHTML = '';
  const colors = ['#feca57', '#a29bfe', '#dff9fb', '#fab1a0', '#55efc4', '#81ecec', '#fd79a8', '#74b9ff', '#fdcb6e'];

  notes.forEach(note => {
    const div = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];

    const createdDate = new Date(note.createdAt).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    div.className = 'note';
    div.style.backgroundColor = color;

    div.innerHTML = `
      <div>
        <h3>${note.title}</h3>
        <p>${note.content}</p>
      </div>
      <div class="note-footer">
        <span class="date">${createdDate}</span>
        <button onclick="deleteNote('${note._id}')">🗑️</button>
      </div>
    `;

    notesList.appendChild(div);
  });
}


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  if (!title || !content) return;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });

  form.reset();
  fetchNotes();
});

async function deleteNote(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchNotes();
}

fetchNotes();

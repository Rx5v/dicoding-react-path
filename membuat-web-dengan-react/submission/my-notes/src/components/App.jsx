import { useState, useMemo } from 'react';
import { getInitialData } from '../utils/index';
import Container from './Container';
import Navbar from './Navbar';
import NoteList from './NoteList';
import AddModal from './AddModal';

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [isArchiveView, setIsArchiveView] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  // const [filtered, setFiltered] = useState([]);
  const [searchParams, setSearchParams] = useState('');

  // Filter notes by title
  const filtered = searchParams.length
  ? notes.filter((note) =>
      note.title.toLowerCase().includes(searchParams.toLowerCase())
    )
  : notes;

  // Handle search input change
  const handleSearch = value => {
    setSearchParams(value);
  };

  // Move note to archive/unarchive
  const handleMove = id => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  // Delete notes
  const handleDelete = id => {
    setNotes(prevNotes =>
      prevNotes.filter(note =>
        note.id !== id
      )
    );
  };

  // Save new note
  const handleSave = data => {
    const newNote = {
      id: notes.length + 1,
      title: data.title,
      body: data.description,
      createdAt: new Date().toISOString(),
      archived: data.isArchive,
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
    setModalVisible(false);
  };

  // Memoized active and archived notes
  const activeNotes = useMemo(
    () =>
      searchParams.length > 0
        ? filtered.filter(note => !note.archived)
        : notes.filter(note => !note.archived),
    [filtered, notes, searchParams.length]
  );

  const archivedNotes = useMemo(
    () =>
      searchParams.length > 0
        ? filtered.filter(note => note.archived)
        : notes.filter(note => note.archived),
    [filtered, notes, searchParams.length]
  );

  return (
    <Container>
      <Navbar onSearch={handleSearch} />
      <hr className='separator'/>
      <div className="flex justify-between">
        <div>
          <button
            className={`menuButton ${!isArchiveView ? 'activeMenuButton' : ''}`}
            onClick={() => setIsArchiveView(false)}
          >
            Active
          </button>
          <button
            className={`menuButton ${isArchiveView ? 'activeMenuButton' : ''}`}
            onClick={() => setIsArchiveView(true)}
          >
            Archive
          </button>
        </div>
        <button className="button bg-danger" onClick={() => setModalVisible(true)}>
          Tambah
        </button>
      </div>
      <NoteList allNote={isArchiveView ? archivedNotes : activeNotes} onMove={handleMove} onDelete={handleDelete} />
      <AddModal
        show={isModalVisible ? 'block' : 'none'}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </Container>
  );
};

export default App;

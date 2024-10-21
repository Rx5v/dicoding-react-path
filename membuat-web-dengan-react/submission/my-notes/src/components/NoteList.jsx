/* eslint-disable react/prop-types */

const NoteList = ({allNote}) => {
    return (
        <div>
            {
                
                allNote.map((note) => (
                    <div className="card" key={note.id}>{note.title}</div>
                ))
            }
        </div>
    )
}
export default NoteList;
/* eslint-disable react/prop-types */

import NoteItem from "./NoteItem";

const NoteList = ({allNote}) => {
    return (
        <div style={{marginTop: '5vh', display: 'flex', gap: '1vh', flexWrap: 'wrap'}}>
            {
                
                allNote.map((note) => (
                    <NoteItem key={note.id} title={note.title} body={note.body} date={note.createdAt}/>
                ))
            }
        </div>
    )
}
export default NoteList;
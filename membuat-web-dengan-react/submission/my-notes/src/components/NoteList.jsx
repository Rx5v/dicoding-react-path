/* eslint-disable react/prop-types */

import Card from "./card/Card";


const NoteList = ({allNote, onMove, onDelete}) => {
    return (
        <div className={'note-list'}>
            {
                
                allNote.length > 0 ? allNote.map((note) => (
                    <Card key={note.id} title={note.title} body={note.body} type={note.archived ? 'Pindahkan' : 'Arsipkan'} date={note.createdAt} id={note.id} onMove={onMove} onDelete={onDelete} {...note}/>
                )) : <p className="text-white m-auto">Tidak ada catatan</p>
            }
        </div>
    )
}
export default NoteList;
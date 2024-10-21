import React from 'react';
import { getInitialData } from '../utils/index';
import Container from './Container';
// import NoteList from './NoteList';
import Navbar from './Navbar';
import Card from './Card';
 
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getInitialData(),
     active: true
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);

   this.activeNote =  this.state.notes.filter((note) => {return note.archived === true})
   this.archiveNote = this.state.notes.filter((note) => {return note.archived === false})

   this.isActive = this.state.active
   this.isArchive = !this.isActive
   
   
 }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(contact => contact.id !== id);
   this.setState({ notes });
 }

 
 
 render() {
   return (

    <Container>
    <Navbar/>
    <hr style={{marginTop: '1vh', marginBottom: '3vh', color: '#dcdcdc'}} />

    <div className="" style={{display: 'inline-flex', gap: '4px', padding: '4px', border: '2px solid #EFEFEF', borderRadius: '10px'}}>
        <button style={{padding: '1vh 2vw',width: '8vw', borderRadius: '10px', border: 'none', backgroundColor: '#D04545', color: 'white', fontWeight: 700}}>Active</button>
        <button style={{padding: '1vh 2vw',width: '8vw', borderRadius: '10px', backgroundColor:'white',  border: '1px solid #F8DDDD'}}>Archive</button>    
    </div>
    <div className="" style={{marginTop: '5vh', display: 'flex', gap: '1vh', flexWrap: 'wrap'}}>
        {
            this.archiveNote.map((note) => (
                <Card key={note.id}>
                    <p style={{fontSize: '1.3rem', fontWeight: 500, color: '#475467'}}>{note.title}</p>
                    <p style={{marginTop:'6vh'}}>{note.body}</p>
                </Card>
            ))
        }
        
    </div>

    </Container>
   );
 }
}
 
export default App;
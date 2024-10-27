import React from 'react';
import { getInitialData } from '../utils/index';
import Container from './Container';
import Navbar from './Navbar';
import NoteList from './NoteList';
 
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

    <div className="" style={{display: 'inline-flex', gap: '4px', padding: '4px', border: '2px solid #150050', borderRadius: '10px'}}>
        <button className='button' style={{padding: '1vh 2vw',width: '8vw', borderRadius: '10px', border: 'none', backgroundColor: '#3F0071', color: 'white', fontWeight: 700}}>Active</button>
        <button style={{padding: '1vh 2vw',width: '8vw', borderRadius: '10px', backgroundColor:'transparent', border:'none', color: 'white'}}>Archive</button>    
    </div>
    <NoteList allNote={this.state.notes}/>

    </Container>
   );
 }
}
 
export default App;
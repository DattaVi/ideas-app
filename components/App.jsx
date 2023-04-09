import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function addNote(event) {
    event.preventDefault();
    setNotes(prevNotes => [...prevNotes, note]);
    setNote({ title: "", content: "" });
  }
  function remove(id){
    setNotes((prev)=>{
      return prev.filter((item,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onChange={handleChange} onSubmit={addNote} title={note.title} content={note.content}/>
      {notes.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onclick={remove}/>
      ))}
      <Footer />
    </div>
  );
}

export default App;

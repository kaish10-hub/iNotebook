import { data } from "react-router-dom";
import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host="http://localhost:5000"
  const notesInitial = []

  const getNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFhNjc4NTZjMjZiMzYyYWFlMDVhNWQ1In0sImlhdCI6MTc4OTMwMDg1MX0.L0ZWY6llEvCbWBb1Rh4hHYiQQxx3e8uxYCplanrWBYM"
      },
    });

    const json = await response.json()
    // console.log(json);
    setNotes(json);
  };

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFhNjc4NTZjMjZiMzYyYWFlMDVhNWQ1In0sImlhdCI6MTc4OTMwMDg1MX0.L0ZWY6llEvCbWBb1Rh4hHYiQQxx3e8uxYCplanrWBYM"
      },
      body: JSON.stringify({title,description,tag}),
    });

    const note = {
      _id: "6aaba7076e569c985fe84528",
      user: "6aa67856c26b362aae05a5d5",
      title: title,
      description: description,
      tag: tag,
      date: "1789634311842",
      __v: 0,
    };
    setNotes(notes.concat({title,description,tag}));
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFhNjc4NTZjMjZiMzYyYWFlMDVhNWQ1In0sImlhdCI6MTc4OTMwMDg1MX0.L0ZWY6llEvCbWBb1Rh4hHYiQQxx3e8uxYCplanrWBYM"
      },
      body: JSON.stringify({title,description,tag})
    });
    const json= response.json();

    for (let ind = 0; ind < notes.length; ind++) {
      const element = notes[ind];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  // Delete a Note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    console.log("Deleting the note with id " + id);
  };

  return (
    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote , getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

import { data } from "react-router-dom";
import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFhNjc4NTZjMjZiMzYyYWFlMDVhNWQ1In0sImlhdCI6MTc4OTMwMDg1MX0.L0ZWY6llEvCbWBb1Rh4hHYiQQxx3e8uxYCplanrWBYM",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFhNjc4NTZjMjZiMzYyYWFlMDVhNWQ1In0sImlhdCI6MTc4OTMwMDg1MX0.L0ZWY6llEvCbWBb1Rh4hHYiQQxx3e8uxYCplanrWBYM",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json=await response.json();
    setNotes(notes.concat(json));
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFhNjc4NTZjMjZiMzYyYWFlMDVhNWQ1In0sImlhdCI6MTc4OTMwMDg1MX0.L0ZWY6llEvCbWBb1Rh4hHYiQQxx3e8uxYCplanrWBYM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await  response.json();

    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let ind = 0; ind < newNotes.length; ind++) {
      const element = newNotes[ind];
      if (element._id === id) {
        newNotes[ind].title = title;
        newNotes[ind].description = description;
        newNotes[ind].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  };
  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFhNjc4NTZjMjZiMzYyYWFlMDVhNWQ1In0sImlhdCI6MTc4OTMwMDg1MX0.L0ZWY6llEvCbWBb1Rh4hHYiQQxx3e8uxYCplanrWBYM",
      }
    });
    const json =await response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;

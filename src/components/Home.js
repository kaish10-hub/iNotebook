import React ,{useContext} from "react";
import noteContext from "../context/notes/NoteContext";
import Notes from "./Notes";

const Home = () => {

  return (
    <div>
      <Notes/>
    </div>
  );
};

export default Home;

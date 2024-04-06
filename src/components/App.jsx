import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreatedArea";


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }

    return (
        <div>
            <Header />
            <CreateArea
                onAdd={addNote}
            />
            <Note
                key={1}
                title="Note title"
                content="Note content"
            />
            <Footer />
        </div>
    );
}

export default App;

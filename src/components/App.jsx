import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreatedArea";


function App() {
    return (
        <div>
            <Header />
            <CreateArea />
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

import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            <Note
                title="title"
                content="content"
            />
            <Footer />
        </div>
    );
}

export default App;

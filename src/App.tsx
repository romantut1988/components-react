import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle tite={"This is APP component"}/>
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}


export default App;

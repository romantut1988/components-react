import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function Rating() {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function AppTitle() {
    return <>This is title</>
}

function Star() {
    return <div>star</div>
}

function AccordionTitle() {
    return <h3>Меню</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

function Accordion() {
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

export default App;

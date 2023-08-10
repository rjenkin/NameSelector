import React from 'react';
import cls from 'classnames';

// import './App.css';


const names = [
    { name: 'One', completed: false, selected: false },
    { name: 'Two', completed: false, selected: false },
    { name: 'Three', completed: false, selected: false },
];


export interface INameProps {
    name: string
    selected: boolean;
    completed: boolean;
}

export const Name = (props: INameProps) => {
    const className = cls(
        'NameSelector_Name',
        {
            'Selected': props.selected,
        },
        {
            'Completed': props.completed,
        }
    );

    return (
        <div className={className}>
            <p>Name: {props.name}</p>
            <p>selected: {props.selected ? 'Selected' : 'Not selected'}</p>
            <p>completed: {props.completed ? 'completed' : 'Not completed'}</p>
        </div>
    )

};


export const App = () => {
    const [nameState, setNameState] = React.useState(names);

    React.useEffect(() => {
        const interval = setInterval(() => {
            // Mark all as unselected
            const newState = nameState.map((name) => ({ ...name, selected: false }));
            // Find a random index

            const randomIndex = Math.floor(Math.random() * nameState.length);

            newState[randomIndex].selected = true;



            // const candidates = 
            setNameState(newState);
        }, 250);

        return () => {
            clearInterval(interval);
        }
    });



    return (
        <div className="NameSelector">

            {nameState.map((name) => (<Name name={name.name} selected={name.selected} completed={name.completed} />))}

        </div>
    );
}

export default App;


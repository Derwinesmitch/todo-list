import React, {useState, useEffect, useRef } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        const currentDate = new Date();

        if (props.edit) {
            // If we're updating an existing todo, update it in the database
            const db = firebase.firestore();
            db.collection('todos').doc(props.edit.id).update({
                text: input
            })
            .then(() => {
                console.log('Document updated successfully');
                // Update the input state with the new todo value
                setInput(input);
            })
            .catch((error) => {
                console.error('Error updating document: ', error);
            });
        } else {
            // If we're adding a new todo, add it to the database
            const db = firebase.firestore();
            db.collection('todos').add({
                text: input,
                active: false,
                date: currentDate,

            })
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
            })
            .catch((error) => {
                console.error('Error adding document: ', error);
            });
        }
    
        setInput('');
    };


    return (
        <form onSubmit={handleSubmit} style={{flex:"auto", flexDirection:"row", display:"flex", width:"15.5vw"}}>
            {props.edit ? ( 
            <>
                <div>
                    <input
                        type="text"
                        placeholder="Update item"
                        value={input}
                        name='text'
                        onChange={handleChange}
                        ref={inputRef}
                        style={{width:"15vw"}}
                    /> 
                </div>
            <button class="border border-rounded mx-2 bg-brightyelloworange">Update</button>
            </>
            ) :
            ( 
            <>
            <div>
                <input  
                    type="text"
                    placeholder="add item"
                    value={input}
                    name='text'
                    onChange={handleChange}
                    ref={inputRef}
                    style={{width:"15vw"}}                
                /> 
            </div>
                 <button class="border border-rounded mx-2 bg-brightyelloworange">Add</button>

            </>
            )
            }
        </form>
    )
}
export default TodoForm
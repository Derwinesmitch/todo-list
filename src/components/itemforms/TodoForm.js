import React, {useState, useEffect, useRef } from 'react';

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

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            active: false
        });
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
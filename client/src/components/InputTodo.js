import React, {Fragment, useState} from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("hello")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <Fragment>
            
            
            <h1 className="text-center mt-5">Pern Todo list</h1>
            <form className="d-flex mt-5">
                <input type="text" className="form-control" value={description} onChange={e => 
                setDescription(e.target.value)}></input>
                <button className="btn btn-success">Add</button>
            </form>
        
        
        
        </Fragment>
    
);
};

export default InputTodo;
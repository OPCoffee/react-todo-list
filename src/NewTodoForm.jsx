import { useState } from "react";

export function NewTodoForm({onSubmit}){ //Passing props
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (newItem === "") return ;

        
        onSubmit(newItem);
    
        setNewItem(""); //Clears out box after submitting -left off here 26:24
      }

    

    return(
    <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
    </div>
    <button className="btn">Add</button>
  </form>
    )
}
import React, { useState } from "react";
import './ItemList.css'; // Import the CSS file

function ItemList() {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ name: '', category: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isEditing) {
            const updatedItems = [...items];
            updatedItems[editingIndex] = currentItem;
            setItems(updatedItems);
            setIsEditing(false);
            setEditingIndex(null);
        } else {
            setItems([...items, currentItem]);
        }
        setCurrentItem({ name: '', category: '' });
    };

    const handleDelete = (index) => {
        const filteredItems = items.filter((_, i) => i !== index);
        setItems(filteredItems);
    };

    const handleEdit = (index) => {
        setCurrentItem(items[index]);
        setIsEditing(true);
        setEditingIndex(index);
    };

    const handleItemClick = (event) => {
        event.stopPropagation();
        console.log("Item clicked:", event.target.textContent);
    };

    return (
        <div className="item-list-app">
            <h2>Item List</h2>
            <form onSubmit={handleSubmit} className="item-form">
                <input
                    type="text"
                    name="name"
                    value={currentItem.name}
                    placeholder="Item Name"
                    onChange={handleChange}
                    required
                    className="item-input"
                />

                <select 
                    name="category"
                    value={currentItem.category}
                    onChange={handleChange}
                    required
                    className="item-select"
                >
                    <option value="">Select Category</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
                <button type="submit" className="item-button">{isEditing ? 'Update' : 'Add'}</button>
            </form>
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} onClick={handleItemClick} className="item">
                        {item.name} - {item.category}
                        <button onClick={(event) => {
                            event.stopPropagation();
                            handleEdit(index);
                        }} className="edit-button">Edit</button>
                        <button onClick={(event) => {
                            event.stopPropagation();
                            handleDelete(index);
                        }} className="delete-button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;

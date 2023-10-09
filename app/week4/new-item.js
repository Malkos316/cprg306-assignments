"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [eventCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };

        console.log(newItem);

        setItemCreated(true);

        setName("fake name");
        setQuantity(1);
        setCategory("produce");

        setItemCreated(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <h2>Add an item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="text-black"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Quantity:
                    <input className="text-black"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </label>
                <label>
                    Category:
                    <select className="text-black"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="household">Household</option>
                    </select>
                </label>
                <button type="submit">Add</button>
            </form>
            {eventCreated && <p>Item created!</p>}
        </div>
    );
}
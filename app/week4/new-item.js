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
        <main className="flex justify-center">
            <form  className=" text-black bg-slate-700 p-4 m-4 max-w-sm w-full rounded-lg">
                <div className="mb-2">
                    <input className=" p-2 rounded-lg w-full" 
                    type="text" 
                    placeholder="Item Name" 
                    value={name} 
                    required=""
                    onChange={handleNameChange}/>
                </div>
                <div className="mb-4 flex justify-between">
                    <input className="w-20 p-2 rounded-lg" 
                    type="number"
                     min={1} 
                     max={99} 
                     value={quantity}
                     required=""
                     onChange={handleQuantityChange}/>
                    <select className="rounded-lg p-2" 
                    value={category} 
                    required=""
                    onChange={handleCategoryChange}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="bakery">Bakery</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="household">Household</option>
                    </select>
                </div>
                <div>
                    <button className="bg-white rounded-lg w-full p-2 hover:bg-amber-500" 
                    type="submit">Add to List</button>
                </div>
            </form>
        </main>
    );
}
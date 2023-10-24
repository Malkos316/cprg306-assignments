"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const id = Math.random()
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (item) => {
        item.preventDefault();

        let newItem = {
            id,
            name,
            quantity,
            category,
        };

        console.log(newItem);

        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main>
            <form onSubmit={handleSubmit} className=" text-black bg-slate-700 p-4 m-4 max-w-sm w-full rounded-lg">
                <div className="mb-2 flex">
                    <input className=" p-2 rounded-lg w-full"
                        type="text"
                        placeholder="Item Name"
                        value={name}
                        required=""
                        onChange={(item => setName(item.target.value))} />
                </div>
                <div className="mb-4 flex justify-between">
                    <input className="w-20 p-2 rounded-lg"
                        type="number"
                        min={1}
                        max={99}
                        value={quantity}
                        required=""
                        onChange={(item => setQuantity(parseInt(item.target.value)))} />
                    <select className="rounded-lg p-2"
                        value={category}
                        required=""
                        onChange={(item) => setCategory(item.target.value)}>
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
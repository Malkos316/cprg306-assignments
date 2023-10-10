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
            <form  className=" text-black">
                <div>
                    <input type="text" placeholder="Item Name" value={setName} required=""/>
                </div>
                <div>
                    <input type="number" min={1} max={99} value={1} required=""/>
                </div>
            </form>
        </main>
    );
}
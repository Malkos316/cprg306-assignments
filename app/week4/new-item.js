"use client"
import { useState } from "react";

export default function newItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };

        console.log(newItem);

        setEventCreated(true);

        alert("Item created!");
    }
}
"use client";

//Item List Component
import { useState } from "react";
import Item from "./item";

//Sort Function
export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name"); //state variable named sortby, setter function named setSortBy, and initial value of "name"
    //Use JavaScript's sort function to sort the items array based on the sortBy state variable.

    const sortItems = (itemsSort, sortBy) => {
        return itemsSort.slice().sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    };

    const handleName = () => {
        setSortBy("name");

    };

    const handleCategory = () => {
        setSortBy("category");
    };

    const sortedItems = sortItems([...items], sortBy);

    return (
        <>
            <div className=" flex flex-row">
                <button className="p-2 m-4 bg-slate-600" onClick={() => handleName("name")}>Sort by Name</button>
                <button className="p-2 m-4 bg-slate-600" onClick={() => handleCategory("category")}>Sort by Category</button>
            </div>
            <ul>

                <li className=" bg-slate-600 max-w-sm p-2 m-4">
                    {sortedItems.map((item) => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)} />))}
                </li>
            </ul>
        </>
    )
}

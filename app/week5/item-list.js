"use client";

//Item List Component
import { useState } from "react";
import Item from "./item";
import ItemsData from "./items.json";

//Sort Function
export default function sort(){
    const [sortby, setSortBy] = useState("name"); //state variable named sortby, setter function named setSortBy, and initial value of "name"
    //Use JavaScript's sort function to sort the items array based on the sortBy state variable.

    switch(sortby) {
        case "name":
            ItemsData.sort((a,b) => a.name.localeCompare(b.name));
            break;
        case "category":
            ItemsData.sort((a,b) => a.category.localeCompare(b.category));
            break;
        default:
            break;
    }

    return(
        <>
        <div className=" flex flex-row">
            <button className="p-2 m-4 bg-slate-600" onClick={() => setSortBy("name")}>Sort by Name</button>
            <button className="p-2 m-4 bg-slate-600" onClick={() => setSortBy("category")}>Sort by Category</button>
        </div>
        <div>
            <ul>
                {ItemsData.map((item) => (
                    <li className=" bg-slate-600 max-w-sm p-2 m-4" key = {item.id}>
                        <h2> {item.name}</h2>
                        <p>Qty: {item.quantity}</p>
                        <p>Category: {item.category}</p>
                    </li>))}
            </ul>
        </div>
        </>
    )
}

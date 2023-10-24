"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";


export default function Page() {

	const [items, setItems] = useState(itemsData);

	function handleAddItem(newItem) {
		setItems([...items, newItem]);
	}

	return (
		<main className="p-10">
			<h1 className=" flex flex-col items-center text-4xl font-thick">
				Shopping List
			</h1>

			<NewItem onAddItem={handleAddItem} />

			<ItemList items={items} />

		</main>
	);
}



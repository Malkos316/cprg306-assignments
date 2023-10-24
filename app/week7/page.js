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
			<h1 className="text-4xl font-thick">
				Shopping List
			</h1>
			<div className="flex flex-row border border-red-200">
				<div className=" flex basis-1/3 w-150">
					<NewItem onAddItem={handleAddItem} />
				</div>
				<div className=" flex basis-1/3 justify-center border">
					Meal ideas
				</div>
			</div>
			<div>
				<ItemList items={items} />
			</div>

		</main>
	);
}



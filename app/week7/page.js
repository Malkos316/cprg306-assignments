"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";


export default function Page() {

	const [items, setItems] = useState(itemsData);
	const [selectItemName, setSelectItemName] = useState("");

	function handleAddItem(newItem) {
		setItems([...items, newItem]);
	}

	function handleItemSelect(item) {
		let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
		setSelectItemName(name);
	}

	return (
		<main className=" flex p-10">
			<div className="flex flex-col basis-1/3">
				<h1 className="text-4xl font-thick">
					Shopping List
				</h1>
				<div className="  max-w-150">
					<NewItem onAddItem={handleAddItem} />
				</div>
				<div>
					<ItemList items={items} onItemSelect={handleItemSelect} />
				</div>
			</div>
			<div>
				<div className=" flex flex-col basis-1/3 justify-center ">
					<MealIdeas ingredient={selectItemName} />
				</div>
			</div>


		</main>
	);
}



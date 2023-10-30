"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {

    const [mealIdea, setMealIdea] = useState([]);


    async function fetchMeals() {
        console.log(ingredient);

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }



    async function loadMeals() {
        try {
            if (ingredient === "") {
                setMealIdea([]);
                return;
            }

            const data = await fetchMeals(ingredient);
            setMealIdea(data);
            if (data !== null) {
                setMealIdea(data);
            } else {
                setMealIdea([]);
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        loadMeals();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Idea for {ingredient}</h2>
            <ul>
                {mealIdea.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal} </li>
                ))}
            </ul>
        </div>
    );
}
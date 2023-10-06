"use client";

export default function Page() {

    //creates an array list containing 3 dog objects.
    let dogList = [
        {
            id: 1,
            name: "Gunther",
            description: "squinty eyes!",
            imageUrl: "https://aarcs.ca/wp-content/uploads/2023/10/Keifer-483x640-1.jpg",
        },

        {
            id: 2,
            name: "Bella",
            description: "Cute!",
            imageUrl: "https://aarcs.ca/wp-content/uploads/2023/08/Helen-7.jpg",
        },

        {
            id: 3,
            name: "bork",
            description: "bork bork",
            imageUrl: "https://aarcs.ca/wp-content/uploads/2023/09/Bernard-2.jpg",
        },
    ];

    let name = dogList[0].name;

dogList.sort((a, b) => a.name.localeCompare(b.name));

//filters out the dog with id 2
dogList = dogList.filter ((dog) => dog.id !== 2);

function handleClick(id) {
    alert(`you clicked on dog id: ${id}`)
}


    return <main>
        <ul>
            {dogList.map((dog) =>(
                <li key={dog.id} onClick={() => handleClick(dog.id)}>
                    <h2>{dog.name}</h2>
                    <p>{dog.description}</p>
                    <img src={dog.imageUrl} alt="doggo"/>
                </li>
            ))}
        </ul>
        </main>;
}
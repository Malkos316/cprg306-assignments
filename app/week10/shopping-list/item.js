export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div onClick={onSelect} className="border-1 max-w-sm m-2 p-2">
            <h2 className="text-xl font-bold ">
                {name}
            </h2>
            <p>
                Qty: {quantity}
            </p>
            <p>
                Aisle: {category}
            </p>
        </div>
    );
}

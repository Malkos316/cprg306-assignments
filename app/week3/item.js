export default function Item({name, quantity, category}) {
    return (
        <div>
            <li>
                {name} {quantity} {category}
            </li>
        </div>
    );
}

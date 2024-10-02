export default function ShoppingList({ items = [
    { name: "Milk", amount: 2 },
    { name: "Eggs", amount: 6 },
    { name: "Bread", amount: 1 }
]}) {
    return (
        <div>
            <h1>Breakfast Shopping List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.name}>
                        <p>{item.name} - {item.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

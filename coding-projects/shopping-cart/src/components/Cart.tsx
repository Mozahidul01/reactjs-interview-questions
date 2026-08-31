import type { CartItem } from "../types/product";

interface CartProps {
    cart: CartItem[];
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}

export function Cart({cart, onIncrease, onDecrease, onRemove}: CartProps) {
    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <div className="cart">
            <h2>Cart: ({total})</h2>
            {cart.length === 0 ? (<p>Cart is empty.</p>) :
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <p>{item.image} {item.name}</p>
                        <div className="quantity">
                            <button onClick={() => onDecrease(item.id)} disabled={item.quantity === 1}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => onIncrease(item.id)}>+</button>
                        </div>
                        <strong>{(item.quantity *item.price).toFixed(2)}</strong>
                        <button className="remove" onClick={() => onRemove(item.id)}>
                            Remove item
                        </button>
                    </div>)
                )
            }
            <hr/>

            <h3>Total cost: {totalCost.toFixed(2)}</h3>
        </div>
    )
}
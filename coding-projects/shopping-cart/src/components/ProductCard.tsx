import type { Product } from "../types/product";
interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product)=> void;
}

export function ProductCard({product, onAddToCart}: ProductCardProps) {
    return (
        <div className="product-item">
            <div className="product-image">
                {product.image}
            </div>
            <h3>{product.name}</h3>
            <p>
                {product.price.toFixed(2)}
            </p>
            <button onClick={() => onAddToCart(product)}>
                Add to cart
            </button>
        </div>
    )
}
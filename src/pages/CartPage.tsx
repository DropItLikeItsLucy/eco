import { useCartStore } from '../store/cartStore';
import { sampleProducts } from '../data/sampleProducts';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCartStore();
  
  // Combine cart items with product details
  const cartWithProducts = cartItems.map(item => {
    const product = sampleProducts.find(p => p.id === item.productId);
    return { ...item, product };
  }).filter(item => item.product); // Filter out any items where product wasn't found

  const subtotal = cartWithProducts.reduce(
    (sum, item) => sum + (item.product.price * item.quantity),
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      
      {cartWithProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link to="/shop" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartWithProducts.map((item) => (
              <div key={item.productId} className="flex items-center border-b py-4">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                      className="px-2 border rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 border-t border-b">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="px-2 border rounded-r"
                    >
                      +
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.productId)}
                      className="ml-4 text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border p-4 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="btn btn-primary w-full mb-2">
              Proceed to Checkout
            </button>
            <button 
              onClick={clearCart}
              className="btn btn-outline w-full"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
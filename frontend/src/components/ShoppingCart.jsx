import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product One', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product Two', price: 19.99, quantity: 1 },
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b py-4">
                        <div className="flex items-center space-x-4">
                            <img src={`https://via.placeholder.com/100`} alt={item.name} className="w-24 h-24 object-cover rounded" />
                            <div>
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button 
                                className="bg-gray-200 text-gray-600 px-2 py-1 rounded"
                                onClick={() => handleQuantityChange(item.id, -1)}
                            >-</button>
                            <span>{item.quantity}</span>
                            <button 
                                className="bg-gray-200 text-gray-600 px-2 py-1 rounded"
                                onClick={() => handleQuantityChange(item.id, 1)}
                            >+</button>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between items-center mt-4 font-semibold">
                    <span>Total:</span>
                    <span>${totalPrice}</span>
                </div>
                <div className="mt-6">
                    <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;

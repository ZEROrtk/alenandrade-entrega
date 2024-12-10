import { useCartStore } from '../../store/cartStore';

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);

    if (cart.length === 0) {
        return (
            <div className="container mx-auto max-w-[500px] py-[150px] font-['Open_Sans']">
                <h1 className="text-[35px] text-center font-medium">Carrito vacío</h1>
                <p className="text-center text-[20px]">Agregar productos al carrito para comenzar a comprar.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-[60px] font-['Open_Sans']">
            <h1 className="text-[40px] ">Carrito de compras</h1>
            <table className="w-full  text-center">
                <thead>
                <tr>
                    <th className="border border-black p-[18px]">Producto</th>
                    <th className="border border-black p-[18px]">Cantidad</th>
                    <th className="border border-black p-[18px]">Precio Unitario</th>
                    <th className="border border-black p-[18px]">Total</th>
                </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        const price = parseFloat(item.price);
                        const quantity = parseInt(item.quantity, 10);
                        const total = price * quantity;
                        return (
                            <tr key={item.id}>
                                <td className="border border-black p-[18px]">{item.name}</td>
                                <td className="border border-black">{quantity}</td>
                                <td className="border border-black">${price.toFixed(2)}</td>
                                <td className="border border-black">${total.toFixed(2)}</td>
                                <td>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-[10px] py-[5px] rounded hover:bg-red-400">Eliminar Productos</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="mt-[20px]">
                <button onClick={clearCart}className="bg-gray-800 text-white px-[20px] py-[10px] rounded hover:bg-gray-900" > Vaciar Carrito</button> </div>
            </div>
    );
}
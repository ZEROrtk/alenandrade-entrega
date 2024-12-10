import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import { useCartStore } from '../../store/cartStore'; 
import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const addToCart = useCartStore((state) => state.addToCart); 

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);
    if (loading) {
        return <div><Loading/></div>;
    }
    if (!product) {
        return <div>Producto no encontrado</div>;
    }
    const handleIncrease = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleAddToCart = () => {
        addToCart(
            {
                id: product.id,
                name: product.name,
                price: parseFloat(product.price), 
            },
            quantity
        );
        alert(`Añadido ${quantity} ${product.name} al carrito`);
    };

    return (
        <div className="container mx-auto max-w-[1170px] bg-yellow-100">
            <div className="grid grid-cols-2 grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt={`Imagen de ${product.name}`} />
                </div>
                <div>
                    <h1 className="text-[40px] font-medium ">{product.name}</h1>
                    <p className="text-[22px] my-[20px">{product.description}</p>
                    <p className="text-[22px] my-[12px]">Precio: ${product.price}</p>
                    <p className="text-[22px] my-[12px]">Stock: {product.stock}</p>

                    <div className="flex items-center mb-4">
                        <button onClick={handleDecrease}className="rounded-[5px] hover:bg-slate-600 w-[50px] border-[4px] text-[20px] flex justify-center" >-</button>
                        <span className="mx-6">{quantity}</span>
                        <button onClick={handleIncrease}className="rounded-[5px] hover:bg-slate-600  w-[50px] border-[4px] text-[20px] flex justify-center">+</button>
                    </div>
                    {quantity > product.stock && (
                        <p className="text-red-500 mb-4">No hay stock disponible</p>
                    )}
                    <button className="bg-black text-white text-[25px] px-[20px] py-[5px]" onClick={handleAddToCart} disabled={quantity > product.stock}>Añadir al Carro</button>
                </div>
            </div>
        </div>
    );
}
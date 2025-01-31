import { create } from 'zustand';

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product, quantity) => {
        set((state) => {
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                return {
                    cart: state.cart.map(item =>
                    item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                ),
                };
            }
            const price = parseFloat(product.price);
            return {
                cart: [...state.cart, { ...product, price, quantity }],
            };
        }
    );
     },
        removeFromCart: (productId) => {
        set((state) => ({
            cart: state.cart.filter(item => item.id !== productId),
        }
             )
        );
    },
             clearCart: () => set({ cart: [] }),
        }
    )
);
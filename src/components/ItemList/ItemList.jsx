import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";
import {Link} from 'react-router-dom';

export default function ItemList({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return(
        <>
       <nav className="md:flex lg:flex-1 items-center justify-center text-center lg:py-5 ">
       <ul className="lex gap-8 mr-16 text-[18px] ">
        <Link spy={true} smooth={true} to="/productos"><li className=" my-5 px-4 py-4 inline mr-4 border-zinc-50 hover:bg-black hover:text-amber-50 hover:rounded cursor-pointer bg-yellow-200 my-[12px] transition ">Todos</li></Link>
        <Link spy={true} smooth={true} to="/category/Sony"><li className=" my-5 px-4 py-4  inline mr-4  border-zinc-50 hover:bg-black  hover:text-amber-50 hover:rounded cursor-pointer bg-yellow-200  my-[12px] transition">Sony</li></Link>
       <Link spy={true} smooth={true} to="/category/Microsoft"><li className=" my-5 py-4  px-4 inline mr-4  border-zinc-50 hover:bg-black hover:text-amber-50 hover:rounded cursor-pointer bg-yellow-200 my-[12px] transition ">Microsoft</li></Link></ul>
       
       </nav>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}
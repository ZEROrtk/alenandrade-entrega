import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../data/asyncMock"
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

export default function Categoria(){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();
    useEffect (() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return(
    <div className="bg-orange-300">
        {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <ItemList products={products}/>
        )}   
    </div>   
    )
};
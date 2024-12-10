import { Link } from "react-router-dom";

export default function Home() {
    return (
            <div className=" bg-center bg-rose-200 text-center">
            <div className="container flex flex-col mx-auto h-[500px] justify-center">
            <h3 className="text-[black] text-[100px] leading-[100px]">Zero</h3>
            <h6 className="text-[black] text-[100px] leading-[80px] ">Store</h6>
            <Link to="/productos" className="   py-[5px] text-[24px]  leading-[46px] text-center text-[white] mt-[50px] justify-center">
            <button className="bg-[black] py-[5px] w-[140px] hover:text-yellow-200 cursor-pointer "> 
            Comprar
            </button>
            </Link>
            </div>
            </div>
       
             );
}
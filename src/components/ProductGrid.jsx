import { Link } from "react-router-dom"
import ProductCard from './ProductCard'
import { products } from '../dummyData'






function ProductGrid() {
    return (
        <div className="p-[10px] bg-white rounded-[6px] shadow-sd-main mb-5 text-[#333]">
            <div className="flex items-center justify-between mb-[10px]">
                <div className="flex items-center">
                    <img src="https://uto.vn/storage/beta/assets/images/ic_flash1.png" className="w-[25px] h-[25px]" />
                    <h3 className="pl-[1rem] text-[15px] font-[600] text-[#555] uppercase">flash sale</h3>
                </div>
                <Link to="" className="text-[1rem] hover:text-main transition-colors">Xem thêm</Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[12px]">
                {
                    [...products].slice(0, 9).map((item, index) => {
                        return <ProductCard data={item} key={index} />
                    })
                }

            </div>
        </div>
    )
}

export default ProductGrid
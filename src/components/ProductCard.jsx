
import { data } from 'autoprefixer'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Badge = ({ stt, name }) => {
    return (
        <span className={`inline-block px-[3px] rounded-[5px] text-[0.7rem] font-[600] ${stt === "sale" ? "bg-orange-700" : "bg-red-700"} text-white py-[1px]`}>{name}</span>
    )
}


Badge.propTypes = {
    stt: PropTypes.string,
    name: PropTypes.string
}

Badge.defaultProps = {
    stt: "sale",
    name: "sale"
}

function ProductCard({data}) {
    return (
        <Link to={`/trading/${data.slug}`} className="w-full hover:shadow-sd-main hover:shadow-main rounded-t-[12px] transition-all">
            <div className="w-full pt-[100%] bg-cover bg-center bg-no-repeat rounded-t-[12px]"
                style={{ backgroundImage: `url("${data.img}")` }}
            />
            <div className='p-[5px] border-[1px] borer-solid border-[#ddd] rounded-b-[12px]'>
                <Badge />
                <div className='h-[45px] overflow-hidden'>
                    <h3 className='text-[0.9rem] font-[600] h-full product__cart'>{data.name}</h3>
                </div>
                <h2 className='font-[550] text-[1.25rem] text-red-700'>{data.price.toLocaleString("en-US")}đ</h2>
                <div className="flex items-center justify-between">
                    <div className='flex items-center text-[#faca51] text-[0.6rem]'>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <span className='text-[0.7rem]'>Tp Hồ Chí Minh</span>
                </div>
            </div>

        </Link>
    )
}

ProductCard.propTypes = {
    data: PropTypes.object
}

ProductCard.defaultProps = {
    data: {
        id: "",
        name: "",
        price: 0,
        price_sale: "",
        img: "",
        created_at: "",
        slug: ""
    }
}

export default ProductCard
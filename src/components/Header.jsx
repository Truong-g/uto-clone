import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Logo } from "../assets"
import routers from "../routers"


const SearchSection = ({ status, onToggle }) => {
    return (
        <div
            onClick={() => onToggle(false)}
            className={`fixed top-0 left-0 bottom-0 right-0 flex justify-center bg-[#00000090] ${status ? "visible opacity-1" : "invisible opacity-0"} transition-all z-[101]`}>
            <div
                className="absolute top-0 left-0 right-0 flex justify-center">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`w-[500px] transition-all ${status ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0"}   rounded-lg mt-10 p-[15px] bg-white`}>
                    <div className="text-right mb-3">
                        <button
                            onClick={() => onToggle(false)}
                            className="w-[25px] h-[25px] text-[#666] hover:text-[#333]"><i className="fas fa-times fa-fw"></i></button>
                    </div>
                    <div className="relative">
                        <input type="text" className="w-full h-[35px] pl-2 border-[1px] border-solid border-[#ccc] rounded-md" placeholder="Tìm kiếm trên UTO" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const CartSection = ({ status, onToggle }) => {
    return (
        <div
            onClick={() => onToggle(false)}
            className={`fixed top-0 left-0 bottom-0 right-0 flex justify-center bg-[#00000090] ${status ? "visible opacity-1" : "invisible opacity-0"} transition-all z-[101]`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-0 right-0 bottom-0 ${status ? "translate-x-0" : "translate-x-full"} w-[400px] transition-transform bg-white p-[20px]`}>
                <div className="mb-7">
                    <button
                        onClick={() => onToggle(false)}
                        className="flex items-center text-[#555] hover:text-[#222]">
                        <i className="fas fa-times fa-fw"></i>
                        <span>Đóng</span>
                    </button>
                </div>
                <div className="text-[1rem] text-[#555] italic">Không có sản phẩm nào trong giỏ hàng!</div>
            </div>
        </div>
    )
}



function Header() {

    const [showSearch, setShowSearch] = useState(false)
    const [showCart, setShowCart] = useState(false)



    return (
        <header className='py-[5px] hidden lg:block shadow-md fixed top-0 left-0 right-0 bg-white z-[100]'>
            <div className="items-center justify-between flex lg:w-[980px] xl:w-[1200px] 2xl:w-[1400px] mx-auto">
                <Link to="/" className="w-[100px]">
                    <img src={Logo} />
                </Link>
                <div className="nav__bar flex items-center">
                    {
                        routers.filter(rou => rou.type === "nav").map((item, index) => {
                            return (
                                <NavLink
                                    to={item.route}
                                    className={({ isActive }) => "nav__bar-link relative px-4 text-center text-[#333] hover:text-main transition-colors flex flex-col items-center " + (isActive ? "active" : "")}
                                    key={index}
                                >
                                    <i className={`${item.icon} text-[1.5rem] text-main`}></i>
                                    <div className="text-[0.8rem] font-[600]">{item.title}</div>
                                </NavLink>
                            )
                        })
                    }
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => setShowSearch(true)}
                        className="w-[36px] h-[36px] rounded-full bg-gray-main flex justify-center items-center text-[#333] transition-colors hover:text-main">
                        <i className="fas fa-search"></i>
                    </button>
                    <button 
                    onClick={() => setShowCart(true)}
                    className="w-[36px] h-[36px] ml-[10px] rounded-full bg-gray-main flex justify-center items-center text-[#333] transition-colors hover:text-main">
                        <i className="fas fa-briefcase"></i>
                    </button>
                    <button className="w-[36px] h-[36px] ml-[10px] rounded-full bg-gray-main flex justify-center items-center text-[#333] transition-colors hover:text-main">
                        <i className="fas fa-user fa-fw"></i>
                    </button>
                </div>
            </div>
            <SearchSection status={showSearch} onToggle={setShowSearch} />
            <CartSection status={showCart} onToggle={setShowCart}/>
        </header>
    )
}

export default Header
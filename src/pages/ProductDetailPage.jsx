import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductCard, SupportSection } from "../components"
import { LayoutComponent } from "../Layouts"
import { productController } from '../controller'
import { products } from '../dummyData'

const detail = "<p>Đèn xông tinh dầu phun sương cho phòng ngủ phong cách Hàn Quốc </p><p>◾️Điểm nổi bật của sản phẩm này:</p><p> Phù hợp cho phòng có diện tích từ 30-40m2 (tối đa 45m2) </p><p>Chạy pin ( có thể sạc ) thay vì chạy điện như các sản phẩm trên thị trường </p><p>Sau khi sạc đầy bạn có thể mang đi theo đặt trên bàn làm việc hoặc xông cho mát khi trời nóng nha</p><p>Giúp nhà mình bớt hanh khô hơn trong lúc thời tiết trở lạnh, trời quá oi bức hay bạn mở máy lạnh nhiều.</p><p>Chiếc máy phun sương tạo ẩm này cũng chính là cứu tinh giúp bảo vệ làn da mềm mại và sức khỏe hệ hô hấp đấy</p><p>Có thể dùng làm đèn ngủ nhẹ nhàng, dễ chịu và cực xinh khi decor &lt;3</p><p>Chi tiết máy phun tinh dầu đèn ngủ: </p><p>Dung tích: 350ml</p><p>Dung lượng pin: 1200mAh </p><p> Thời gian phun: 45ml/h ( Có thể phun liền 1 đêm ) </p><p>Thời gian sạc: Khoảng hơn 1 tiếng </p><p>Phân loại:</p><p> Shiba Inu ( Trắng ) </p><p>Nekochan ( Hồng )</p><p>LƯU Ý KHI SỬ DỤNG MÁY XÔNG TINH DẦU </p><p>- MÁY PHUN SƯƠNG ĐÈN NGỦ SHIBA: 👉 Không nên rung lắc, di chuyển khi máy đang hoạt động. 👉 Sử dụng nước ấm dưới 40 độ sẽ hiệu quả hơn (KHÔNG ĐƯỢC DÙNG NƯỚC NÓNG) 👉Giúp giấc ngủ ngon: tinh dầu Oải hương (Lavender) 👉 Đuổi côn trùng như muỗi, ruồi: Tinh dầu Sả chanh 👉 Đuổi chuột: Tinh dầu Bạc hà 👉 Khử khuẩn, giải cảm, xả stress: Tinh dầu Sả chanh, tràm gió, Cold &amp; Flue 👉 Khử mùi thuốc lá: Tinh dầu trầm gỗ, tinh dầu Anti Tobacco 👉 Thư giãn: các loại tinh dầu hương hoa Vilolet, hoa anh đào, tinh dầu trà xanh..."

function ProductDetailPage() {
    const { slug } = useParams()
    const [data, setData] = useState(null)
    useEffect(() => {
        setData(productController.show(slug))
    }, [])

    return (
        <>
            {
                data && (
                    <div className="w-full">
                        <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
                            <div className="w-full relative text-center">
                                <div className="inline-block w-[400px]">
                                    <img src={data.img} className="w-full" />
                                </div>
                                <button
                                    // onClick={() => handlePrevBtn()}
                                    className='py-[1rem] rounded-[6px] hover:bg-[#000000aa] px-[1rem] absolute top-1/2 left-0 bg-[#00000099] z-[1] -translate-y-1/2 text-white font-[600] text-[1.5rem]'>
                                    <i className="fas fa-angle-left"></i>
                                </button>
                                <button
                                    // onClick={() => handleNextBtn()}
                                    className='py-[1rem] rounded-[6px] hover:bg-[#000000aa] px-[1rem] absolute top-1/2 right-0 bg-[#00000099] z-[1] -translate-y-1/2 text-white font-[600] text-[1.5rem]'>
                                    <i className="fas fa-angle-right"></i>
                                </button>
                            </div>
                            <div className="px-3">
                                <h3 className="text-[#555] text-[1.3rem] font-[600]">{data.name}</h3>
                                <div className="flex items-center text-[1rem] text-[#444]">
                                    <strong>0</strong>
                                    <div className="ml-1 flex items-center text-yellow-600">
                                        <i className="far fa-star fa-fw"></i>
                                        <i className="far fa-star fa-fw"></i>
                                        <i className="far fa-star fa-fw"></i>
                                        <i className="far fa-star fa-fw"></i>
                                        <i className="far fa-star fa-fw"></i>
                                    </div>
                                    <span className="w-[1px] h-[20px] bg-[#ccc] mx-2 inline-block" />
                                    <strong>0</strong>
                                    <span className="ml-1">đánh giá</span>
                                </div>
                                <div className="mt-2">
                                    <div className="text-[1.1rem] font-[600] text-red-800">{data.price.toLocaleString("en-US")}đ</div>
                                    <div className="flex items-center">
                                        <span className="text-[0.9rem] line-through">{data.price_sale.toLocaleString("en-US")}đ</span>
                                        <span className="text-[0.9rem] ml-2">8%</span>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-center">
                                    <span className="text-[1rem] font-[600] text-[#333] mr-7">Số lượng</span>
                                    <div className="flex items-center border-[1px] border-[#ccc] hover:border-main rounded-sm">
                                        <button className="h-[30px] border-r-[1px] border-[#ccc] w-[30px]"><i className="fas fa-minus fa-fw"></i></button>
                                        <input type="text" value="1" onChange={() => { }} className="w-[80px] text-center h-[30px]" />
                                        <button className="h-[30px] border-l-[1px] border-[#ccc] w-[30px]"><i className="fas fa-plus fa-fw"></i></button>
                                    </div>
                                    <span className="ml-7">10 sản phẩm có sẵn</span>
                                </div>
                                <div className="mt-2 flex items-center">
                                    <button className="h-[40px] text-main rounded-md border-main hover:bg-[#50b5ff0d] border-[1px] border-solid flex justify-center items-center px-3">
                                        <i className="fas fa-cart-plus fa-fw mr-1"></i>
                                        <span>Thêm vào giỏ hàng</span>
                                    </button>
                                    <button className="h-[40px] ml-5 text-white rounded-md bg-main font-[600] border-solid flex justify-center items-center px-3">
                                        <span>Mua ngay</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
                            <div className="flex items-center">
                                <div className="w-[100px] h-[100px] mr-2">
                                    <img src="https://file.uto.vn/image/516D59594448695461664D5172704341786E7A6E6B4D4C457766424165463431644677625259326466326F565555" className="w-full" />
                                </div>
                                <div className="flex-[1]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-[1] text-[1rem]">
                                            <h3 className="font-[600] text-[#333]">Uniehouse - Chuyên làm đẹp</h3>
                                            <span className="">Quản lý bởi Unie</span>
                                        </div>
                                        <button className="px-[0.5rem] flex justify-center items-center py-[0.3rem] rounded-md bg-main text-white">
                                            <i className="fas fa-paper-plane fa-fw"></i>
                                            <span>Xem shop</span>
                                        </button>
                                    </div>
                                    <p className="text-[#333]">
                                        <strong>Địa chỉ: </strong>
                                        240 Tô Ngọc Vân, Phường Thạnh Xuân, Quận 12, TP.HCM
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="p-[15px] bg-white shadow-sd-main rounded-[6px] mb-5">
                            <h3 className="uppercase bg-gray-main p-3 font-[600] text-[#333] mb-5">MÔ TẢ SẢN PHẨM</h3>
                            <div dangerouslySetInnerHTML={{ __html: detail }}></div>
                        </div>
                        <LayoutComponent title="Sản phẩm tương tự" titleColor="border-blue-800">
                            <div className="grid grid-cols-3 gap-[15px]">
                                {
                                    [...products].slice(2, 5).map((item, index) => {
                                        return <ProductCard key={index} data={item} />
                                    })
                                }

                            </div>
                        </LayoutComponent>
                        <SupportSection />
                    </div>
                )
            }
        </>

    )
}

export default ProductDetailPage
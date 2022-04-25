
import PropTypes from 'prop-types'


function LayoutComponent({ titleColor, title, children }) {
    return (
        <div className="p-[10px] bg-white rounded-[6px] shadow-sd-main mb-5 relative">
            <h3 className={`pl-[1rem] text-[15px] font-[600] text-[#555] mb-[10px] uppercase border-solid ${titleColor} border-l-[5px]`}>{title}</h3>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}


LayoutComponent.popTypes = {
    titleColor: PropTypes.string,
    title: PropTypes.string
}


LayoutComponent.defaultProps = {
    titleColor: "",
    title: ""

}




export default LayoutComponent
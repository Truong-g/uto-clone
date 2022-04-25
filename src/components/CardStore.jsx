

import PropTypes from 'prop-types'

function CardStore({data}) {
    return (
        <div className="w-full shadow-sd-main rounded-[6px] relative">
            <div className='w-full'>
                <img src={data.img} className='w-[70%] h-[100px] mx-auto' />
            </div>
            <div className='p-[10px] h-[58px]'>
                <div className='text-[0.8rem] grid__store--card overflow-hidden font-[600] text-[#333] h-full'>
                    {data.name}
                </div>
            </div>
        </div>
    )
}

CardStore.propTypes = {
    data: PropTypes.object
}
CardStore.defautProps = {
    data: {
        id: "",
        img: "",
        name: ""
    }
}



export default CardStore
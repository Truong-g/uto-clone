


import { Link } from 'react-router-dom'


const CatgoryCard = () => {
    return (
        <Link to="" className="w-full p-[15px] border-[1px] border-[#ededed] hover:border-main">
            <div className='w-full pt-[100%] bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: `url("https://file.uto.vn/image/516D595255344B386752376F584C334A796D34563952465139356A416E3353665A54335164395859554637793833")` }}
            />
            <h4 className='text-[0.8rem] font-[600] text-center mt-1 max-h-[39px] category_card'>Chăm sóc Chăm sóc Chăm sóc Chăm sóc Chăm sóc </h4>

        </Link>
    )
}


function CategorySection() {
    return (
        <div className='w-full grid grid-cols-4 bg-white mb-5'>
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />
            <CatgoryCard />

        </div>
    )
}

export default CategorySection
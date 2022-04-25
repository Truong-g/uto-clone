import { products } from '../dummyData'

const show = (slug) => {
    const product = products.find(item => item.slug === slug)

    return product
}

const productController = { show }

export default productController
import {
    MarketPage,
    TrainningPage,
    ServicePage,
    CommunityPage,
    ProductDetailPage
} from './pages'

export default [
    {
        title: "Đào tạo",
        route: "/education",
        icon: "fas fa-graduation-cap fa-fw",
        component: <TrainningPage />,
        type: "nav"
    },
    {
        title: "Cộng đồng",
        route: "/community",
        icon: "fas fa-users fa-fw",
        component: <CommunityPage />,
        type: "nav"

    },
    {
        title: "Sàn thương mại",
        route: "/",
        icon: "fas fa-cart-plus fa-fw",
        component: <MarketPage />,
        type: "nav"

    },
    {
        title: "Dịch vụ",
        route: "/services",
        icon: "fas fa-puzzle-piece fa-fw",
        component: <ServicePage />,
        type: "nav"

    },
    {
        title: "Sàn thương mại",
        route: "/trading",
        icon: "fas fa-puzzle-piece fa-fw",
        component: <MarketPage />,
        type: "page"

    },
    {
        title: "Chi tiết sản phẩm",
        route: "/trading/:slug",
        icon: "fas fa-puzzle-piece fa-fw",
        component: <ProductDetailPage />,
        type: "page"

    },

]
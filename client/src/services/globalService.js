const globalService = {
  // baseUrl
  baseUrl: process.env.REACT_APP_BASE_URL,
  //   Routes
  routes: {
    addresses: "/api/v1/addresses",
    auth: "/api/v1/auth",
    carts: "/api/v1/carts",
    categories: "/api/v1/categories",
    subcategories: "/api/v1/subcategories",
    orders: "/api/v1/orders",
    products: "/api/v1/products",
    reviews: "/api/v1/reviews",
    users: "/api/v1/users",
    wishlists: "/api/v1/favourites",
  },
  //   domainImgs
  userImg: `${process.env.REACT_APP_BASE_URL}/users/`,
  productImg: `${process.env.REACT_APP_BASE_URL}/products/`,
  categoryImg: `${process.env.REACT_APP_BASE_URL}/categories/`,
  subcategoryImg: `${process.env.REACT_APP_BASE_URL}/subcategories/`,
  //   ApiKey
  APiKey: "secret123",
};

export default globalService;

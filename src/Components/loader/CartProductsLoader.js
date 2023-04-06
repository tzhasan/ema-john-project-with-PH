import { getShoppingCart } from "../../utilities/fakedb"


const CartProductsLoader = async () => {
  const loadproducts = await fetch('products.json')
  const products = await loadproducts.json()

  const storedcart = getShoppingCart()
  const savedCart = []
  for (const id in storedcart) {
    const addedProduct = products.find(pd => pd.id === id)
    if (addedProduct) {
      const quantity = storedcart[id]
      addedProduct.quantity = quantity
      savedCart.push(addedProduct)
    }
  }


  return savedCart
}

export default CartProductsLoader
import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async() => {

  // * get products data
  const productsData = await fetch('products.json');
  const products = await productsData.json();

  // * get Cart
  const initialCart = [];
  const savedCart = getStoredCart();
  // console.log('savedcart', savedCart);
  // console.log(products);
  for( const id in savedCart){
    
    const addedProduct = products.find( product=> product.id===id); //* traversing in array of object ( products array )
    //* addedProduct returns on single product object

    if( addedProduct ){
      const quantity = savedCart[id];
      // console.log(id , quantity);
      addedProduct.quantity = quantity;
      initialCart.push( addedProduct );
    }

  }

  return { products:products, initialCart:initialCart}; //* object{ name : value }
}
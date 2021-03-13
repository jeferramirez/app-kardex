

 class Product {

  id?: string;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;


  constructor({name, description, image, price, stock}) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.stock = stock;
  }
}


export default Product;

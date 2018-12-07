export class Product {
    constructor(
        public productId: number,
        public productName: string,
        public productPrice: number,
        public productDescription: string,
        public availability: boolean,
        public productBrand: string,
        public productImage: string,
        public productCategory: string
         ){}
}

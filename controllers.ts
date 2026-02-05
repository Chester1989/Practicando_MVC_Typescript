class ProductController {
    private productCollection: ProductCollection;

    constructor(productCollection: ProductCollection) {
        this.productCollection = productCollection;
    }

    processOptions(option: { search?: number }): Product[] | Product | null {
        if (option.search !== undefined) {
            // Si hay una propiedad search, busca el producto por ID
            return this.productCollection.getById(option.search);
        } else {
            // Si no hay search, devuelve todos los productos
            return this.productCollection.getAll();
        }
    }
}

export { ProductController };
import { ProductCollection } from './models';
import { Product } from './models';
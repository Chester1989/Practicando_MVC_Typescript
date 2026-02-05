class Product {
    id: number;
    name: string;
    price: number;

    // Constructor para inicializar los atributos
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ProductCollection {
    private products: Product[] = []; // Array para almacenar productos

    getAll(): Product[] {
        // Implementación para recuperar todos los productos
        return this.products;
    }

    getById(id: number): Product | null {
        // Implementación para recuperar un producto por su ID
        return this.products.find(product => product.id === id) || null;
    }

    add (product: Product): void {
        this.products.push(product);
    }
}

export { Product, ProductCollection };
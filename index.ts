import parseArgs from 'minimist';
import { Product, ProductCollection } from './models';
import { ProductController } from './controllers';

// Parseamos los argumentos que vienen por terminal
const args = parseArgs(process.argv.slice(2));
console.log('Args:', args);

// Instanciamos la colección de productos
const productCollection = new ProductCollection();

// Agregamos algunos productos para probar (podés agregar un método add en ProductCollection)
// Agregamos algunos productos para probar
productCollection.add(new Product(1, 'Producto 1', 100));
productCollection.add(new Product(2, 'Producto 2', 200));
productCollection.add(new Product(3, 'Producto 3', 300));

// Instanciamos el controlador con la colección
const productController = new ProductController(productCollection);

// Usamos el método processOptions para decidir qué hacer según args
const result = productController.processOptions(args);

console.log('Resultado:', result);

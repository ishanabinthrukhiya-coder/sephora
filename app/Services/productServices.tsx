
class ProductService {
    static async getProducts() {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    }

    static async getProductById(id: string) {
        const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }

        return response.json();
    }
}

export default ProductService;
// Ahora agregamos la lógica de filtrado, de manera tal que se filtren en la API de Mockapi los productos. Esto se realiza 
// mediante query strings

const BASE_URL = "https:///691a278f9ccba073ee95086c.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(product)
    });

    if (!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();
    return result;
};

export const getProducts = async (category) => {
    // Uso LET para poder modificar la URL
    let url = BASE_URL;
    if (category) {
        url = `${ BASE_URL }?category=${ category }`;
    }

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al listar productos");
    }

    const results = await res.json();
    return results;
};

// Traer un elemento por id

export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/{id}`);
    if (!res.ok) {
        throw new Error("Error al obtener el producto");
    }

    return await res.json();
};



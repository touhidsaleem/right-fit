import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Filter from '../components/Filter'
import "./Products.css"
import { addToCart } from "../store/cartSlice";

const Products = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const getAllProducts = async () => {
        const productUrl = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products";
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${'Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo'}`,
            },
        }
        const res = await fetch(productUrl, apiOptions);
        const json = await res.json();
        return setProducts(json.products);
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className="products p-4 d-flex">
            <Filter />

            <div className="container products-grid">
                <div className="row">

                    {products && products.map((product, id) => (
                        <div className="col-md-4 my-3" key={id}>
                            <div className="product-card" >
                                <div className="product-model">
                                    <img src={product.image} alt="" className="product-model-img" />
                                    <div className="on-card-hover d-flex justify-content-center align-items-center"
                                        onClick={() => dispatch(addToCart({
                                            id: product.id,
                                            name: product.name,
                                            colorId: product.colorId,
                                            price: product.price,
                                            materialId: product.materialId,
                                            image: product.image,
                                            quantity: 1,
                                        }))}>
                                        Add to Cart
                                    </div>
                                </div>
                                <h5 className="product-title my-0">{product.name}</h5>
                                <p className="product-detail my-0 uppercase">{product.colorId} <span>{product.materialId}</span></p>
                                <p className="product-price my-2">INR {product.price}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Products
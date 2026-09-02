import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductItem from '../../components/ProductItem';

const ProductList = () => {
    const token = localStorage.getItem("Token");
    console.log(token);
    
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/product/list",{
            method: "GET" 
        }) 
        .then(res => res.json())
        .then(res => {
            console.log(1,res);
            setProductList(res); 
        });
    }, [])

    return (
        <div>
            <Container> 
                <br />
                <h3>제품 리스트</h3>
                <br />
                {productList.map(product => 
                    <ProductItem key={product.id} product={product} /> )
                }
            </Container>
        </div>
    );
};

export default ProductList;
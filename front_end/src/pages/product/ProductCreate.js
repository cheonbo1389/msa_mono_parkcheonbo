import React, { useState } from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';


const ProductCreate = () => {
    const navigate = useNavigate();

    const [product, setProduct ] = useState({
        name : '',
        price : '',
        stockQuantity : ''
    })


    return (
        <div>
            
        </div>
    );
};

export default ProductCreate;

/*
백엔드로 보내야하는 내용

name
price
stockQuantity
token

*/
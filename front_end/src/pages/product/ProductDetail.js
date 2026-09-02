import React, { useEffect, useState } from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ProductDetail = () => {
    const propsParam = useParams(); 
    const id = propsParam.id;
    const navigate = useNavigate();
    const token = localStorage.getItem("Token");

    const [productList, setProductList] = useState([]);
    const [member, setMember] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8081/product/detail/"+id,{
            method: "GET" ,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }) 
        .then(res => res.json())
        .then(res => {
            console.log(1,res);
            setProductList(res); 
            setMember(res.member);
        });
    }, [])

    //수정페이지
    const updateProduct = () => {
        navigate('/updateProduct/'+productList.id);
    }

    return (
        <div>
            <Card>
                <Card.Body>               
                    <Card.Title>제품번호 : {productList.id}</Card.Title>
                    <Card.Title>제품명 : {productList.name}</Card.Title>
                    <Card.Title>제품가격 : {productList.price}</Card.Title>
                    <Card.Title>제품재고 : {productList.stockQuantity}</Card.Title>
                    <Card.Title>판매자 : {member.name}</Card.Title>
                    <Button variant="warning" onClick={updateProduct}>수정</Button>
                    <Button variant="danger" onClick={updateProduct}>삭제</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetail;
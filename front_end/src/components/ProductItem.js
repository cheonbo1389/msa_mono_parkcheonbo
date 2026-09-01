import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductItem = (props) => {

    const  { id, name, price, stockQuantity } = props.product
    return (
        <div>
            <Card>
                <Card.Body>               
                    <Card.Title>제품번호 : {id}</Card.Title>
                    <Link to={"/board/"} className="btn btn-primary">상세보기</Link>
                    <Link to={"/ordercreate/"+id} className="btn btn-primary">주문하기</Link>
                    <Card.Title>제품명 : {name}</Card.Title>
                    <Card.Title>제품가격 : {price}</Card.Title>
                    <Card.Title>제품갯수 : {stockQuantity}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductItem;
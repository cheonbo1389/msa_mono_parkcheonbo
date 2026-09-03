import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const OrderItem = (props) => {
//  주문번호, 주문한 상품 이름,주문갯수, 주문한 금액(갯수*갯수당 가격)
    const  { id, quantity  } = props.order
    const productname = props.order.product.name
    const price = props.order.product.price*quantity

    return (
        <div>
            <Card>
                <Card.Body>               
                    <Card.Title>주문번호 : {id}</Card.Title>
                    <Card.Title>제품명 : {productname}</Card.Title>
                    <Card.Title>주문한 상품 개수 : {quantity}</Card.Title>
                    <Card.Title>주문 금액 : {price}</Card.Title>
                </Card.Body>
            </Card>
            <br />
        </div>
    );
};

export default OrderItem;
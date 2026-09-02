import React,{useEffect, useState} from 'react';
import { Button, Container, Form, Card} from 'react-bootstrap';
import {  useNavigate, useParams } from 'react-router-dom';



const ProductUpdate = (props) => {

    const propsParam = useParams(); 
    const navigate = useNavigate();
    const token = localStorage.getItem("Token");
    const id = propsParam.id;
    const [productList, setProductList] = useState({
        name: '',
        price: '',
        stockQuantity: ''
    });


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
        });
    }, [])

    const changeValue = (e) => {
        setProductList({
            ...productList,
            [e.target.name] : e.target.value
        });
    }


    const submitProductUpdate = (e) =>{
        e.preventDefault(); 

        fetch("http://localhost:8081/product/update/"+id,
        { 
            method : "PUT", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(productList) 
        })
        .then((res) => { 
            console.log(1, res);
            if(res.status === 200){
                return res.json();
            }else{
                return null;
            }
            
        })
        .then((res) => {
            console.log("정상",res);
            if(res != null){
                navigate("/product/"+id); 
            }else{
                alert("제품 수정에 실패했습니다.");
            }
        })
        .catch((error) => {
            console.log('실패', error);
            
        })
    };

    return (
        <div>
            <Card>
                <Card.Body>               
                    <Card.Title>제품번호 : {id}</Card.Title>
                    <Card.Title>제품명 : {productList.name}</Card.Title>
                    <Card.Title>제품가격 : {productList.price}</Card.Title>
                    <Card.Title>제품재고 : {productList.stockQuantity}</Card.Title>
                </Card.Body>
            </Card>

                    {/* <Container>
                        <br />
                        <h3>제품 수정</h3>
                        <Form onSubmit={submitProductUpdate}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>글제목</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="board_title" value={board.board_title}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>글내용</Form.Label>
                            <Form.Control type="text" placeholder="Enter Content" onChange={changeValue} name="board_content" value={board.board_content}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>작성자</Form.Label>
                            <Form.Control type="text" placeholder="Enter Writer" onChange={changeValue} name="board_writer" value={board.board_writer}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Container> */}
        </div>
    );
};

export default ProductUpdate;
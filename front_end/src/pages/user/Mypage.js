import { Button, Form, Container} from 'react-bootstrap';
import { React, useState, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Mypage = () => {
    const token = localStorage.getItem("Token");
    console.log(token);

    const [myinfo, setMyinfo] = useState({
            name : '',
            email : ''
        })


    useEffect(() => {
        fetch("http://localhost:8081/member/mypage",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }) 
        .then(res => res.json())
        .then(res => {
            console.log(1,res);
            setMyinfo(res); 
        });
    }, [])


    return (
        <div>
            <Card>
                <Card.Body>               
                    <Card.Title>이름 : {myinfo.name}</Card.Title>
                    <Card.Title>이메일 : {myinfo.email}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Mypage;
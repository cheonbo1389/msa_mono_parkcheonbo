import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand href="/home">로고</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Link to="/home" className='nav-link'>Home</Link>
                {/* <Link to="/joinForm" className='nav-link'>회원가입</Link>
                <Link to="/loginForm" className='nav-link'>로그인</Link>
                <Link to="/productlist" className='nav-link'>제품목록</Link> */}
                {/* <Link to="/productcreate" className='nav-link'>제품추가</Link> */}
                {/* <Link to="/ordercreate" className='nav-link'>주문추가</Link> */}
                {/* <Link to="/orderList" className='nav-link'>주문목록</Link> */}

                <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/mypage">내 정보</NavDropdown.Item>
                    <NavDropdown.Item href="/myproductlist">내 제품</NavDropdown.Item>
                    <NavDropdown.Item href="/orderList">주문목록</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/productcreate">제품 추가</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
                <Button variant="outline-success" href="/loginForm">로그인</Button>
                <Button variant="outline-primary" href="/joinForm">회원가입</Button>
                {/* <Button variant="outline-warning">로그아웃</Button> */}
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
};

export default Header;
import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
        <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand href="#">로고</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                <Link to="/home" className='nav-link'>Home</Link>
                <Link to="/joinForm" className='nav-link'>회원가입</Link>
                <Link to="/loginForm" className='nav-link'>로그인</Link>
                <Link to="/productlist" className='nav-link'>제품</Link>
                <Link to="/productcreate" className='nav-link'>제품추가</Link>
                <Link to="/ordercreate" className='nav-link'>주문추가</Link>
                <Link to="/orderList" className='nav-link'>주문목록</Link>


                <Link to="/saveForm" className='nav-link'>글쓰기</Link>
                
                
                {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                <NavDropdown title="마이페이지" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/mypage">내 정보</NavDropdown.Item>
                    <NavDropdown.Item href="#">구매</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">환불</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                Link
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
};

export default Header;
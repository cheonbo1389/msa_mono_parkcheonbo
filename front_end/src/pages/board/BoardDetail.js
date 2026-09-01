import React, { useEffect, useState } from 'react';
import {Button, Card, Container} from 'react-bootstrap';
import { useNavigate,useParams } from 'react-router-dom';

const BoardDetail = (props) => {
    console.log('details : ',props);
    
    //1. 파라미터 읽어오기
    const propsParam = useParams(); 
    const board_no = propsParam.board_no;
    const navigate = useNavigate(); //페이지 이동(redirect 기능)


    const [board, setBoard ] = useState({
        board_no : '',
        board_title : '',
        board_content : '',
        board_writer : ''
    })

    //상세페이지
    useEffect(() => {
        //2. 스프링부트 상세페이지로 이동
        fetch("http://localhost:8081/api/board/"+board_no)
        //3. 결과를 돌려받아서 res에 담는다
        .then((res) => res.json()) //select된 1건의 상세정보
        .then((res) => {
            setBoard(res); //4. 상세정보(res) -> setBoard -> board 에 담고 -> 화면에 뿌린다
        })
    }, []); //디펜던시에 []이 추가되면, 렌더링할때, 1번만 실행
    
    //수정페이지
    const updateBoard = () => {
        //App.js의 Route에서 BoardUpdateForm(수정페이지) 호출
        navigate('/updateForm/'+board_no);
    }

    //삭제페이지
    const deleteBoard = () => {
        fetch("http://localhost:8081/api/board/"+board_no, { //url+parameter
            method: 'DELETE',
        })
        //3. 결과를 돌려받아서 res에 담음.
        .then((res) => res.text()) 
        .then((res) => {
            if(res === "OK"){
                navigate('/boardList');
            } else{
                alert('삭제 실패');
            }
        })
    }

    return (
        <div>
            <Container>
                <h3>상세보기</h3>
                <Card>
                    <Card.Body>               
                        <Card.Title>글번호 : {board.board_no}</Card.Title>
                        <Card.Title>글제목 : {board.board_title}</Card.Title>
                        <Card.Title>작성자 : {board.board_writer}</Card.Title>
                        <Card.Title>글내용 : {board.board_content}</Card.Title>
                        {/* <Card.Title>작성일자 : {board_regdate}</Card.Title> */}
                    </Card.Body>
                </Card>
                <br />
                <Button variant='warning' onClick={updateBoard}>수정</Button>
                <Button variant='success' onClick={deleteBoard}>삭제</Button>

            </Container>
        </div>
    );
};

export default BoardDetail;
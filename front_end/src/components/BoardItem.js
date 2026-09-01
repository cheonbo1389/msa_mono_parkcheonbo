import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { board_no, board_content, board_regdate, board_title, board_writer } from props.board;

const BoardItem = (props) => {
    //구조분해 할당 적용
    const  { board_no, board_content, board_regdate, board_title, board_writer } = props.board
    return (
        <div>
            <Card>
                <Card.Body>               
                    <Card.Title>글번호 : {board_no}</Card.Title>
                    {/* board_no는 key이며, boardList에서 넘김 */}
                    <Link to={"/board/"+board_no} className="btn btn-primary">상세보기</Link>
                    <Card.Title>글제목 : {board_title}</Card.Title>
                    <Card.Title>작성자 : {board_writer}</Card.Title>
                    <Card.Title>글내용 : {board_content}</Card.Title>
                    {/* <Card.Title>작성일자 : {board_regdate}</Card.Title> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default BoardItem;
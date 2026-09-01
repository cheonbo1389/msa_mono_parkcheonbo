import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BoardItem from '../../components/BoardItem';


const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8081/api/boardList",{
            method: "GET" //컨트롤러 - getmappin
        }) 
        .then(res => res.json())
        .then(res => {
            console.log(1,res);
            setBoardList(res); 
        });
    }, [])



    return (
        <div>
            {/* 가운데 출력 */}
            <Container> 
                <br />
                <h3>BoardList</h3>
                <br />
                {/* map은 반복함수이며, boardList 길이만큼 <BoardItem />를 뿌린다. */}
                {/* setBoardList(res)에 의해 boardList로 전달 */}
                {/* key 생략시 unique "key" props 에러 */}
                {/* 자식 컴포넌트에게 props 값 전달 : key={value} */}
                {/* BoardItem =>  BoardList 결과 페이지*/}
                {boardList.map(board => 
                <BoardItem key={board.board_no} board={board} />)}



                {/* <BoardItem />  */}
            </Container>
        </div>
    );
};

export default BoardList;
import React,{useState} from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';


const BoardWriteForm = (props) => {
    //4-2
    const navigate = useNavigate();

    //1. board 초기화
    //입력한 값들이 setBoard()를 통해 board 변수에 담기고, submit시 컨트롤러로 통신할때 bookDTO로 한꺼번에 전달
    const [board, setBoard ] = useState({
        board_title : '',
        board_content : '',
        board_writer : ''
    })


    //조회가 아니므로 useEffect()는 사용하지 않음
    //2. Form의 input 값이 변경될때마다 changeVaule의 (e)에 의해서
    //   이벤트 컨텍스트가 넘어간다.
    //입력한 값들이 setBoard()를 통해서 board 변수에 담김
    const changeValue = (e) => {
        setBoard({
            ...board, //깊은 복사
            [e.target.name] : e.target.value //동적으로 키 값 만들기 - input 값이 바뀔때마다 value가 name으로 돌아간다.
        });
    }

    //4. 백엔드와 통신
    //submit시 스프링 부트와 통신할때, boardDTO에 한꺼번에 전달
    // -> DB insert
    // -> 정상이면 boardList으로 이동 
    const submitBoard = (e) =>{
        e.preventDefault(); //게시글 입력이 끝나서 submit 기능중지
        //생략시 게시글 리스트 페이지로 이동 못함

        //스프링부트와 통신
        //컨트롤러 - Post Mapping
        fetch("http://localhost:8081/api/board",
        { method : "POST",
          headers : {
            "Content-Type" : "application/json;charset-utf-8"
          },
          body: JSON.stringify(board) //입력 데이터 board => java script Object를 json으로 변경해서 넘긴다. 
          // => 백엔드에서 데이터를 insert하고 컨트롤러에 201을 리턴함
        })
        .then((res) => { //게시글 등록 성공여부
            console.log(1, res);
            if(res.status === 201){
                return res.json();
            }else{
                return null;
            }
            
        })
        .then((res) => {
            console.log("정상",res);
            if(res != null){
                navigate('/boardList');
            }else{
                alert("게시글 작성에 실패했습니다.");
            }
        })
        .catch((error) => {
            console.log('실패', error);
            
        })
    }

    return (
    <div>
        <Container>
            <br />
            <h3>글쓰기</h3>
            {/* 폼 작성 */}
            {/* submit 버튼 클릭시 submitBoard 함수 호출, onclick으로 해도 됨 */}
            <Form onSubmit={submitBoard}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>글제목</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="board_title"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>글내용</Form.Label>
                <Form.Control type="text" placeholder="Enter Content" onChange={changeValue} name="board_content" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>작성자</Form.Label>
                <Form.Control type="text" placeholder="Enter Writer" onChange={changeValue} name="board_writer"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    </div>

    );
};

export default BoardWriteForm;
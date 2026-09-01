import React,{useEffect, useState} from 'react';
import { Button, Container, Form} from 'react-bootstrap';
import {  useNavigate, useParams } from 'react-router-dom';

// fetch("http://localhost:8081/api/board/"+board_no)
// 부모 BoardDetail에서 fetch로 자식 BoardUpdateForm에게 BoardDetail 넘김
const BoardUpdateForm = (props) => {


    // 파라미터 읽어오기
    const propsParam = useParams(); 
    const board_no = propsParam.board_no;
    const navigate = useNavigate(); //redirect 기능 -> boardDetail로 이동

    // board 초기화
    //입력한 값들이 setBoard()를 통해 board 변수에 담기고, submit시 컨트롤러로 통신할때 bookDTO로 한꺼번에 전달
    const [board, setBoard ] = useState({
        board_title : '',
        board_content : '',
        board_writer : ''
    })

    //1 상세조회를 통해 화면에 원래 값들을 보여줘야하므로 useEffect를 사용
    useEffect(() => {
        //2. 스프링부트 상세페이지로 이동
        fetch("http://localhost:8081/api/board/"+board_no)
        //3. 결과를 돌려받아서 res에 담는다
        .then((res) => res.json()) //select된 1건의 상세정보
        .then((res) => {
            setBoard(res); //상세정보(res) -> setBoard -> board 에 담고 -> values로 화면에 뿌린다
        })
    }, []);     

    // 5. Form의 input 값이 변경될때마다 changeVaule의 (e)에 의해서
    // 이벤트 컨텍스트가 넘어간다.
    // 입력한 값들이 setBoard()를 통해서 board 변수에 담김
    const changeValue = (e) => {
        setBoard({
            ...board, //깊은 복사
            [e.target.name] : e.target.value //동적으로 키 값 만들기 - input 값이 바뀔때마다 value가 name으로 돌아간다.
        });
    }

    //6. 백엔드와 통신
    //submit시 스프링 부트와 통신할때, boardDTO에 한꺼번에 전달
    // -> DB insert
    // -> 정상이면 boardList으로 이동 
    const submitBoard = (e) =>{
        e.preventDefault(); //게시글 수정이 끝나면 submit 기능중지
        //생략시 게시글 상세페이지로 이동 못함

        //스프링부트와 통신
        //GET(조회),POST(입력),PUT(수정)
        fetch("http://localhost:8081/api/board/"+board_no,
        { method : "PUT", //컨트롤러 - PUTMapping
          headers : {
            "Content-Type" : "application/json;charset-utf-8"
          },
          //body,key 넘김 => 스프링부트에서 매개변수로 (@PathVariable int board_no, @RequestBody BoardDTO dto)
          body: JSON.stringify(board) //입력 데이터 board => java script Object를 json으로 변경해서 넘긴다. 
          // => 백엔드에서 데이터를 update하고 컨트롤러에 200을 리턴함
        })
        .then((res) => { //게시글 수정 성공여부
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
                navigate('/board/'+board_no); //상세 페이지로 이동
            }else{
                alert("게시글 수정에 실패했습니다.");
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
            <h3>글수정</h3>
            {/* 4. 게시글 수정 */}
            {/* value={} 로 조회한 값 넣기 */}
            {/* submit 버튼 클릭시 submitBoard 함수 호출, onclick으로 해도 됨 */}
            <Form onSubmit={submitBoard}>
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
        </Container>
    </div>
    );
};

export default BoardUpdateForm;
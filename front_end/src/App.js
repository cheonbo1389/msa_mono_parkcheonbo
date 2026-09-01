import './App.css';
import Header from './common/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import BoardList from './pages/board/BoardList';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';
import BoardDetail from './pages/board/BoardDetail';
import BoardUpdateForm from './pages/board/BoardUpdateForm';
import BoardWriteForm from './pages/board/BoardWriteForm';
import ProductList from './pages/product/ProductList';
import ProductCreate from './pages/product/ProductCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* home화면 ProductList로 이동 */} 
          <Route path='/home' exact={true} element={<ProductList />} /> 

          {/* 회원가입 */} 
          <Route path='/joinForm' exact={true} element={<JoinForm />} /> 

          {/* 로그인 */} 
          <Route path='/loginForm' exact={true} element={<LoginForm />} /> 

          {/* 제품 리스트 */}
          <Route path='/productlist' exact={true} element={<ProductList />} /> 

          {/* 제품 추가 */}
          <Route path='/productcreate' exact={true} element={<ProductCreate />} /> 







          {/* 글쓰기 /pages/board/BoardWriteForm */} 
          <Route path='/saveForm' exact={true} element={<BoardWriteForm />} /> 

          {/* 상세 /pages/board/BoardDetail.js */} 
          <Route path='/board/:board_no' exact={true} element={<BoardDetail />} />

          {/* 수정 /pages/board/BoardUpdateForm */} 
          <Route path='/updateForm/:board_no' exact={true} element={<BoardUpdateForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

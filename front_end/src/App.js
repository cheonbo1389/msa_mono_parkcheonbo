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
import OrderCreate from './pages/order/OrderCreate';
import OrderList from './pages/order/OrderList';
import Mypage from './pages/user/Mypage';
import ProductDetail from './pages/product/ProductDetail';
import ProductUpdate from './pages/product/ProductUpdate';
import MyProductList from './pages/product/MyProductList';
import UpdateMyinfo from './pages/user/UpdateMyinfo';


function App() {
  const token = localStorage.getItem("Token");


  return (
    
    <div className="App">

      <BrowserRouter>
        <Header />

        <Routes>

          {/* user */}
          {/* home화면 ProductList로 이동 */} 
          <Route path='/home' exact={true} element={<ProductList />} /> 

          {/* 회원가입 */} 
          <Route path='/joinForm' exact={true} element={<JoinForm />} /> 

          {/* 로그인 */} 
          <Route path='/loginForm' exact={true} element={<LoginForm />} /> 

          {/* 마이페이지 - 내 정보 */}
          <Route path='/mypage' exact={true} element={<Mypage />} /> 

          {/* 내정보 수정 페이지 */}
          <Route path='/updatemyinfo' exact={true} element={<UpdateMyinfo />} /> 


          {/* product */}
          {/* 제품 리스트 */}
          <Route path='/productlist' exact={true} element={<ProductList />} /> 

          {/* 제품 추가 */}
          <Route path='/productcreate' exact={true} element={<ProductCreate />} /> 

          {/* 제품 상세 페이지*/}
          <Route path='/product/:id' exact={true} element={<ProductDetail />} /> 

          {/* 제품 수정 페이지 */}
          <Route path='/updateProduct/:id' exact={true} element={<ProductUpdate />} />

          {/* 내가 추가한 제품 페이지 */}
          <Route path='/myproductlist' exact={true} element={<MyProductList />} /> 


          {/* order */}
          {/* 주문 추가 */}
          <Route path='/ordercreate/:id' exact={true} element={<OrderCreate />} />

          {/* 주문 목록 */}
          <Route path='/orderList' exact={true} element={<OrderList />} /> 
          




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

기존
member
- 회원가입 -> 완료
- 로그인 -> 완료

product
- 제품 추가 -> 완료
name
price
stockQuantity

- 제품 리스트 조회 -> 완료

ordering
- 주문하기 -> 완료
    "productId" : 1,
    "productCount" : 1



[ home으로 넘어오는 데이터(유저 주문 리스트) 예시]
[
    {
        "id": 1,
        "member": {
            "Id": 1,
            "name": "admin",
            "email": "admin@naver.com",
            "password": "{bcrypt}$2a$10$xdahKswqmdzT8fJfsc5tHuHykX8ZreOD9CCpEOALIe02IJnDsTBle",
            "role": "ADMIN",
            "createdTime": "2026-08-27T17:40:27.277695",
            "updatedTime": "2026-08-27T17:40:27.277695"
        },
        "product": {
            "id": 1,
            "name": "아이폰",
            "price": 2500000,
            "stockQuantity": 23,
            "member": {
                "Id": 1,
                "name": "admin",
                "email": "admin@naver.com",
                "password": "{bcrypt}$2a$10$xdahKswqmdzT8fJfsc5tHuHykX8ZreOD9CCpEOALIe02IJnDsTBle",
                "role": "ADMIN",
                "createdTime": "2026-08-27T17:40:27.277695",
                "updatedTime": "2026-08-27T17:40:27.277695"
            },
            "createdTime": "2026-09-02T15:06:34.86104",
            "hibernateLazyInitializer": {},
            "updatedTime": "2026-09-02T15:48:08.463777"
        },
        "quantity": 5,
        "orderStatus": "ORDERED",
        "createdTime": "2026-09-02T15:06:38.911123",
        "updatedTime": "2026-09-02T15:06:38.911123"
    },
    {
        "id": 2,
        "member": {
            "Id": 1,
            "name": "admin",
            "email": "admin@naver.com",
            "password": "{bcrypt}$2a$10$xdahKswqmdzT8fJfsc5tHuHykX8ZreOD9CCpEOALIe02IJnDsTBle",
            "role": "ADMIN",
            "createdTime": "2026-08-27T17:40:27.277695",
            "updatedTime": "2026-08-27T17:40:27.277695"
        },
        "product": {
            "id": 1,
            "name": "아이폰",
            "price": 2500000,
            "stockQuantity": 23,
            "member": {
                "Id": 1,
                "name": "admin",
                "email": "admin@naver.com",
                "password": "{bcrypt}$2a$10$xdahKswqmdzT8fJfsc5tHuHykX8ZreOD9CCpEOALIe02IJnDsTBle",
                "role": "ADMIN",
                "createdTime": "2026-08-27T17:40:27.277695",
                "updatedTime": "2026-08-27T17:40:27.277695"
            },
            "createdTime": "2026-09-02T15:06:34.86104",
            "hibernateLazyInitializer": {},
            "updatedTime": "2026-09-02T15:48:08.463777"
        },
        "quantity": 7,
        "orderStatus": "ORDERED",
        "createdTime": "2026-09-02T15:48:08.426223",
        "updatedTime": "2026-09-02T15:48:08.426223"
    }
]



토큰 저장 - localstorge 사용함 -> 완료
jwt 토큰 유지?


추가 가능한 것?
css
https://react-bootstrap.netlify.app/docs/components/overlays


몇몇 기능은 로그인 상태가 아니면 로그인 페이지로 이동하게 만들어야함


member
- 마이페이지 -> 완료
- 마이페이지에서 개인정보 수정 -> 완료
- 로그아웃
- 비밀번호 변경
- 회원탈퇴

product
- 제품 상세 페이지 -> 완료
 -> 수정할거 : 수정, 삭제 버튼 대신 이전페이지, 주문 버튼 으로 변경 -> 완료
 -> 수정, 삭제 버튼는 해당 제품 추가한 유저만 수정하게 변경, 마이페이지쪽에서 ->완료
- 제품 수정 -> 완료
- 내 제품 페이지 -> 완료

- 제품 삭제


ordering
- 본인이 주문한 주문 목록 -> 완료
    => 유저에게 무엇이 보여야 하는가?
        주문번호, 주문한 상품 이름,주문갯수, 주문한 금액(갯수*갯수당 가격)

- 주문 수정? -> 할 수 있으면
- 주문 취소



------------------------------------------------
0903  남은거

- 상세보기 페이지 수정해야함 -> 완료
- 주문 페이지 수정해야함 -> 완료


- 로그인 안되어있으면 로그인 페이지로 넘기기 -> 완료
- 로그인 안되어있으면 로그아웃 버튼 숨기기 -> 완료

- 로그아웃 기능 -> 완료


헤더 부분 수정
    const [token, setToken] = React.useState(
        localStorage.getItem("Token")
    );

    const handleLogout = () => {
        localStorage.removeItem("Token");
        setToken(null);
    };
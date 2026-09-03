package com.example.msa_monolithic.product.controller;


import com.example.msa_monolithic.product.domain.Product;
import com.example.msa_monolithic.product.dto.ProductRegisterDto;
import com.example.msa_monolithic.product.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    //제품 추가
    @PostMapping("/create")
    public ResponseEntity<?> productCreate(@RequestBody ProductRegisterDto dto){
        System.out.println("<<< ProductController - /create >>>");

        Product product = productService.productCreate(dto);
        return new ResponseEntity<>(product.getId(), HttpStatus.CREATED);
    }

    //제품 상세 조회
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> productDetail(@PathVariable Long id){
        System.out.println("<<< ProductController - /detail >>>");

        return new ResponseEntity<>(productService.productDeatail(id),HttpStatus.OK);
    }

    //제품 전체 조회
    @GetMapping("/list")
    public ResponseEntity<?> productList(){
        System.out.println("<<< ProductController - /list >>>");

        return new ResponseEntity<>(productService.productAllList(),HttpStatus.OK);
    }


    //제품 수정
    @PutMapping("/update/{id}")
    public ResponseEntity<?> productUpdate(@RequestBody Product dto){
        System.out.println("<<< ProductController - /update >>>");

        Product product = productService.productUpdate(dto);
        return new ResponseEntity<>(product.getId(), HttpStatus.OK);
    }


    //내가 추가한 제품 조회
    @GetMapping("/mylist")
    public ResponseEntity<?> myproductList(){
        System.out.println("<<< ProductController - /mylist >>>");

        return new ResponseEntity<>(productService.myproductList(),HttpStatus.OK);
    }

}

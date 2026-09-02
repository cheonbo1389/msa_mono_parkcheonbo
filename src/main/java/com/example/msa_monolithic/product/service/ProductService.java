package com.example.msa_monolithic.product.service;

import com.example.msa_monolithic.member.domain.Member;
import com.example.msa_monolithic.member.repository.MemberRepository;
import com.example.msa_monolithic.product.domain.Product;
import com.example.msa_monolithic.product.dto.ProductRegisterDto;
import com.example.msa_monolithic.product.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ProductService {
    private final ProductRepository productRepository;
    private final MemberRepository memberRepository;

    public ProductService(ProductRepository productRepository, MemberRepository memberRepository) {
        this.productRepository = productRepository;
        this.memberRepository = memberRepository;
    }

    //제품 등록
    public Product productCreate(ProductRegisterDto dto){
        System.out.println("<<< ProductService - productCreate >>>");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Member member = memberRepository.findById(Long.parseLong(authentication.getName()))
                .orElseThrow(() -> new EntityNotFoundException("member is not found"));

        Product product = productRepository.save(dto.toEntity(member));
        return product;
    }

    //제품 상세 조회
    public Product productDeatail(Long id){
        System.out.println("<<< ProductService - productDeatail >>>");

        return productRepository.findById(id).get();
    }

    //제품 전체 조회
    public ArrayList<Product> productAllList(){
        System.out.println("<<< ProductService - productAllList >>>");

        return (ArrayList<Product>) productRepository.findAll();
    }


    //제품 수정
    public Product productUpdate(ProductRegisterDto dto){
        System.out.println("<<< ProductService - productUpdate >>>");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Member member = memberRepository.findById(Long.parseLong(authentication.getName()))
                .orElseThrow(() -> new EntityNotFoundException("member is not found"));

        Product product = productRepository.save(dto.toEntity(member));
        return product;
    }
}

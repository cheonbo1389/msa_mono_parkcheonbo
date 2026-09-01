package com.example.msa_monolithic.product.dto;

import com.example.msa_monolithic.product.domain.Product;
import com.example.msa_monolithic.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductRegisterDto {
    //제품명
    private String name;

    //제품 카테고리
    private String category;

    //제품 가격
    private int price;

    //제품 수량
    private int stockQuantity;

    public Product toEntity(Member member){
        return Product.builder()
                .name(this.name)
                .price(this.price)
                .stockQuantity(this.stockQuantity)
                .member(member)
                .build();
    }
}

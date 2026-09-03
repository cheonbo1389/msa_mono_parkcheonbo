package com.example.msa_monolithic.product.repository;

import com.example.msa_monolithic.member.domain.Member;
import com.example.msa_monolithic.product.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    ArrayList<Product> findByMember(Member member);
}

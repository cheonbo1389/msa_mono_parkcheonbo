package com.example.msa_monolithic.ordering.repository;

import com.example.msa_monolithic.ordering.domain.Ordering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderingRepository extends JpaRepository<Ordering, Long> {
}

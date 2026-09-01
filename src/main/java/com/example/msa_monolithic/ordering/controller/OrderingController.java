package com.example.msa_monolithic.ordering.controller;

import com.example.msa_monolithic.ordering.domain.Ordering;
import com.example.msa_monolithic.ordering.dto.OrderCreateDto;
import com.example.msa_monolithic.ordering.service.OrderingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ordering")
public class OrderingController {
    private final OrderingService orderingService;

    public OrderingController(OrderingService orderingService) {
        this.orderingService = orderingService;
    }


    @PostMapping("/create")
    public ResponseEntity<?> orderCreate(@RequestBody OrderCreateDto dtos){
        System.out.println("<<< OrderingController - /create >>>");

        Ordering ordering = orderingService.orderCreate(dtos);

        return new ResponseEntity<>(ordering.getId(), HttpStatus.CREATED);
    }
}

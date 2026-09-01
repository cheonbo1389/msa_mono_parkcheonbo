package com.example.msa_monolithic.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data   // => getter,setter,ToString()
public class LoginDto {
    private String email;
    private String password;
}

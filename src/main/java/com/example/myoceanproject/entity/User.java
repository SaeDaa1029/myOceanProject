package com.example.myoceanproject.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "TBL_USER")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class User extends Period{

    @Id @GeneratedValue
    private Long userId; //PK
    private String userEmail;
    private String userPassword;
    private String userNickname;
    private String userName;
    private String userStatus; //Enum으로 사용
//extend period


}

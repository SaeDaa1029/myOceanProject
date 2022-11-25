package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_POINT")
@Getter
@Setter
@ToString
public class Point extends Period{
    @Id
    @GeneratedValue
    private Long pointId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK
    private String pointAmountHistory;

}

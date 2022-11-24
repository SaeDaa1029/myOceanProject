//package com.example.myoceanproject.entity;
//
//import lombok.Getter;
//import lombok.Setter;
//import lombok.ToString;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "TBL_CAR")
//@Getter
//@Setter
//@ToString(exclude = "carOwner")
//public class ExchangeDiary extends Period{
//    @Id
//    @GeneratedValue
//    private Long exchangeDiaryId; //PK
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "USER_ID")
//    private User exchangeDiarySender;;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "USER_ID")
//    private User exchangeDiaryReceiver;
//
//
//}

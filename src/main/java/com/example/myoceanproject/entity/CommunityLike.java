//package com.example.myoceanproject.entity;
//
//import lombok.Getter;
//import lombok.Setter;
//import lombok.ToString;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "TBL_COMMUNITY_LIKE")
//@Getter
//@Setter
//@ToString
//public class CommunityLike extends Period{
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "COMMUNITY_POST_ID")
//    private CommunityPost communityPost; //PK
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "USER_ID")
//    private User user; //PK
////extend period
//}

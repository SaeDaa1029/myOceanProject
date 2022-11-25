package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "TBL_COMMUNITY_POST")
@Getter
@Setter
@ToString
public class CommunityPost extends Period{
    @Id
    @GeneratedValue
    private Long communityPostId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK
    private String communityCategory;
    private String communityTitle;
    private String communityContent;
    private String communityViewNumber;

//    커뮤니티 파일 테이블 양방향
@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
private List<CommunityFile> communityFiles;



}

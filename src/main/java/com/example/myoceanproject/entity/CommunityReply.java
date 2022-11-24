package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_COMMUNITY_REPLY")
@Getter
@Setter
@ToString
public class CommunityReply extends Period{

    @Id
    @GeneratedValue
    private Long communityReplyId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COMMUNITY_POST_ID")
    private CommunityPost communityPost; //FK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK
    private String communityReplyContent;
//extend period

}

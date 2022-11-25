package com.example.myoceanproject.entity;

import com.example.myoceanproject.embeddable.File;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_COMMUNITY_FILE")
@Getter
@Setter
@ToString
public class CommunityFile extends Period{
    @Id
    @GeneratedValue
    private Long communityFileId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COMMUNITY_POST_ID")
    private CommunityPost communityPost; //FK
    @Embedded
    private File file;
//extend period



}

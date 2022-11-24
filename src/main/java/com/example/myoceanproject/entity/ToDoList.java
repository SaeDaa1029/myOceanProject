package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_TODOLIST")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class ToDoList extends Period{
    @Id
    @GeneratedValue
    private Long toDoListId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK
    private String toDoListContent;
    private LocalDateTime toDoListSelectDate;
//extend period



}

package com.todo.list;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This annotation specifies that the class is an entity and is mapped to a database table
public class ToDo {
    @Id // This annotation specifies the primary key of an entity
    @GeneratedValue(strategy = GenerationType.IDENTITY) // This annotation provides for the specification of generation strategies for the values of primary keys
    private Long id;
    private String title;
    private boolean completed;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isCompleted() {
        return completed;
    }
    
    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public ToDo(Long id, String title, boolean completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    public ToDo() {}

}

package com.todo.list;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDo, Long> { //ToDo is the entity, Long is the type of the primary key
    
}

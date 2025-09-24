package com.todo.list;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController // This annotation indicates that this class is a REST controller
@RequestMapping("/api/todo") // Base URL for all endpoints in this controller
@CrossOrigin(origins = "${CLIENT_URL}") // Allow cross-origin requests from the React app
public class ToDoController {
    
    @Autowired
    private ToDoService toDoService;

    @GetMapping
    public List<ToDo> getAllToDos() {
        System.out.println("GET /api/todo called");
        return toDoService.getAllToDos();
    }

    @PostMapping
    public ToDo createToDo(@RequestBody ToDo toDo) {
        return toDoService.createToDo(toDo);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        toDoService.deleteById(id);
    }

}

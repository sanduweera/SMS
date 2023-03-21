package com.codewithSI.fullstackbackend.controller;

import com.codewithSI.fullstackbackend.exception.UserNotFoundException;
import com.codewithSI.fullstackbackend.model.User;
import com.codewithSI.fullstackbackend.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    Logger logger = (Logger) (Logger) LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser){
        logger.trace("New User Is Added");
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        logger.trace("List of All Users");
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        logger.trace("User Details are Updated");
        return userRepository.findById(id)
                .map(user -> {
                    user.setLastname(newUser.getLastname());
                    user.setFirstname(newUser.getFirstname());
                    user.setRegno(newUser.getRegno());
                    user.setStudentmail(newUser.getStudentmail());
                    user.setBirthday(newUser.getBirthday());
                    user.setDegree(newUser.getDegree());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        logger.trace("User is Deleted");
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted success.";
    }

}

package com.codewithSI.fullstackbackend;

import com.codewithSI.fullstackbackend.model.User;
import com.codewithSI.fullstackbackend.exception.UserNotFoundException;
import com.codewithSI.fullstackbackend.repository.UserRepository;
import com.codewithSI.fullstackbackend.controller.UserController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;



import static net.bytebuddy.matcher.ElementMatchers.any;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class UserTest {

    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
}


    @Test
    public void testGetRegno() {
        User user = new User();
        user.setRegno("D/BSE/21/0020");
        assertEquals("D/BSE/21/0020", user.getRegno());
    }

    @Test
    public void testGetFirstname() {
        User user = new User();
        user.setFirstname("Sanduni");
        assertEquals("Sanduni", user.getFirstname());
    }

    @Test
    public void testGetLastname() {
        User user = new User();
        user.setLastname("Weerarathne");
        assertEquals("Weerarathne", user.getLastname());
    }

    @Test
    public void testGetStudentmail() {
        User user = new User();
        user.setStudentmail("sanduni@gmail.com");
        assertEquals("sanduni@gmail.com", user.getStudentmail());
    }

    @Test
    public void testGetBirthday() {
        User user = new User();
        user.setBirthday("2000.12.05");
        assertEquals("2000.12.05", user.getBirthday());
    }

    @Test
    public void testGetDegree() {
        User user = new User();
        user.setDegree("Software Engineering");
        assertEquals("Software Engineering", user.getDegree());
    }

    @Test
    public void testGetId() {
        User user = new User();
        user.setId(1L);
        assertEquals(1L, user.getId().longValue());
    }

//    @Test
//    public void testNewUser() {
//        User user = new User();
//        user.setRegno("12345");
//        user.setFirstname("John");
//        user.setLastname("Doe");
//        user.setStudentmail("john.doe@example.com");
//
//        when(userRepository.save(any(User.class))).thenReturn(user);
//
//        User savedUser = userController.newUser(user);
//
//        assertEquals(user.getRegno(), savedUser.getRegno());
//        assertEquals(user.getFirstname(), savedUser.getFirstname());
//        assertEquals(user.getLastname(), savedUser.getLastname());
//        assertEquals(user.getStudentmail(), savedUser.getStudentmail());
//    }

}


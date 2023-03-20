package com.codewithSI.fullstackbackend;

import com.codewithSI.fullstackbackend.model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTest {
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


}

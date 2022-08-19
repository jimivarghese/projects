package Library.Management;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "Reg")
public class Library {


    @Id
     String id;
     String name;
     String dob;
     String email;
     String pswd;
    String type;


    
    public String getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getDob() {
        return dob;
    }
    
    public String getEmail() {
        return email;
    }
    public String getPswd() {
        return pswd;
    }
    public String getType() {
        return type;
    }
    public void setId(String id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setDob(String dob) {
        this.dob = dob;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPswd(String pswd) {
        this.pswd = pswd;
    }
    
    public void setType(String type) {
        this.type = type;
    }
    public Library(String id, String name, String dob,String email, String pswd,String type) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.pswd = pswd;
        this.type=type;
    }
    public Library() {
    }
    public Library(String email, String pswd) {
        this.email = email;
        this.pswd = pswd;
    }
    

    
}

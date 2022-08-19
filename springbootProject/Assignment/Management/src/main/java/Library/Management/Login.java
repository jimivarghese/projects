package Library.Management;

import org.springframework.data.annotation.Id;

public class Login {
    @Id
    private String id;
    private String pswd;
    public String getId() {
        return id;
    }
    public String getPswd() {
        return pswd;
    }
    public void setId(String id) {
        this.id = id;
    }
    public void setPswd(String pswd) {
        this.pswd = pswd;
    }
    public Login() {
    }
    public Login(String id, String pswd) {
        this.id = id;
        this.pswd = pswd;
    }

    

    
}

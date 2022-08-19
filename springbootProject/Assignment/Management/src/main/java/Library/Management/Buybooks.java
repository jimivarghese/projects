package Library.Management;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Buybook")
public class Buybooks {
    String userid;
    String bukid;
    String bookname;
    String author;
    String date;
    String returndate;
    

    public String getReturndate() {
        return returndate;
    }
    public String getUserid() {
        return userid;
    }
    public String getBukid() {
        return bukid;
    }
    public String getBookname() {
        return bookname;
    }
    public String getAuthor() {
        return author;
    }
    
    public void setUserid(String userid) {
        this.userid = userid;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public void setBukid(String bukid) {
        this.bukid = bukid;
    }
    public void setBookname(String bookname) {
        this.bookname = bookname;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public Buybooks(String userid, String bukid, String bookname, String author, String date,String returndate) {
        this.userid = userid;
        this.bukid = bukid;
        this.bookname = bookname;
        this.author = author;
        this.date = date;
        this.returndate = returndate;
    }
    public Buybooks() {
    }
    public String getDate() {
        return date;
    }
    public void setReturndate(String returndate) {
        this.returndate = returndate;
    }





    
    
}

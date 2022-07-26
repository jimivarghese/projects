package New.Product;

public class Product {
	
	private Long pid;
	private String pname;
	private String compy;
	private String price;
	
	
	
	
	
	public Product(Long pid, String pname, String compy, String price) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.compy = compy;
		this.price = price;
	}
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getCompy() {
		return compy;
	}
	public void setCompy(String compy) {
		this.compy = compy;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	
	

}

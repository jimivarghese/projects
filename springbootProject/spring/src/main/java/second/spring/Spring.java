package second.spring;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "project")
public class Spring {
@Id
	public String id;
	public String name;
	public String place;
	
	
	
	
	
	
	public Spring() {
		super();
	}
	public Spring(String id, String name, String place) {
		super();
		this.id = id;
		this.name = name;
		this.place = place;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	
	
	
	
	
	
}

package second.spring;



import org.springframework.data.mongodb.repository.MongoRepository;

public interface SpringRepository extends MongoRepository <Spring,String> {

	//Object Update(String id, Spring spr);

	
	

}

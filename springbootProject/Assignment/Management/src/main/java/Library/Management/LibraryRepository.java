package Library.Management;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface LibraryRepository extends MongoRepository <Library,String> {
    List<Library> findByEmail(String email);

    Optional<Library> findByemail(String email);
    
   


    
    
}

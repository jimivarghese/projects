package Library.Management;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BuybooksRepository  extends MongoRepository<Buybooks,String>{

    List<Buybooks> findByuserid(String userid);

    void deleteBybukid(String bukid);
    
}

package second.spring;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
//@CrossOrigin
public class StringController {
	
	private static Map<String,Spring> spr=new HashMap<>();
	
	private static final String details = null;
	@Autowired
	private SpringRepository springRepository;
	 
	@PostMapping("/create")
	public ResponseEntity<String> createinfo(@RequestBody Spring spring)
	{
		springRepository.save(spring);
		return new ResponseEntity<>("Data Inserted",HttpStatus.OK);
		
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateinfo(@PathVariable String id,
			@RequestBody Spring spring)
	{ 
		spring.setId(id);
		springRepository.save(spring);
		return new ResponseEntity<>("Data Updated",HttpStatus.OK);
		
	}
	//@Override
	/*@GetMapping("/listing")
	public List<Spring> findAllproduct()
	{
		return springRepository.findAll();
		
	}*/
	@GetMapping("/view") 
	public ResponseEntity<List<Spring>>getAllSpring()
	{
		return ResponseEntity.ok(this.springRepository.findAll());
	}
	
	@DeleteMapping("/deleteing/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id)
	{
		springRepository.deleteById(id);
		return new ResponseEntity<>("Data deleted",HttpStatus.OK);
	}
	
	@GetMapping("findbyid/{id}")
	public Optional<Spring> findindbyid(@PathVariable String id)
	{
		return springRepository.findById(id);
	}
   
	
}

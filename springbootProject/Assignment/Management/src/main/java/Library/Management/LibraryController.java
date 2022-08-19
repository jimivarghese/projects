package Library.Management;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins="*")
public class LibraryController {
    @Autowired
    private LibraryRepository repo;
	@Autowired
	private AddbookRepository addrepo;
	@Autowired
	private BuybooksRepository buybookrepo;


    @PostMapping("/api/insert")
	private ResponseEntity<String> insert(@RequestBody Library library)
	{
		repo.save(library);
		return new ResponseEntity<>("Data Inserted",HttpStatus.OK);

    } 

	@PostMapping("/api/bookinsert")
	private ResponseEntity<String> buybookinsert(@RequestBody Addbook addbook)
	{
		addrepo.save(addbook);
		return new ResponseEntity<>("Book Inserted",HttpStatus.OK);

    } 



	@PostMapping("/api/buybookinsert")
	private ResponseEntity<String> bookinsert(@RequestBody Buybooks buybooks)
	{
		buybookrepo.save(buybooks);
		return new ResponseEntity<>("Book Inserted",HttpStatus.OK);

    } 






	@GetMapping("/api/idsize")
     public int idssize()
	{
		int idsize=addrepo.findAll().size();
		System.out.println(idsize);
		return idsize;
		
	}

    
    @GetMapping("/api/view")
     public int view()
	{
		int size=repo.findAll().size();
		return size;
	}


	@GetMapping("/checkemail/{email}")
      public String checkemail(@PathVariable("email") String email) {
    	  Optional<Library> variable = repo.findByemail(email);
    	  String a = null;
    	  if (variable.isPresent()) {
    		   a="mail is already used" ;
    	  }
          return a;
      }




	///////////////////////////////////////////////////////////////////////////////
	@PostMapping("/api/loging")
	private Library check(@RequestBody Library library)
	{
		String email=library.getEmail();
		String psw=library.getPswd();
		
		
		
		List<Library> data=repo.findByEmail(email);
		System.out.println(data);

		System.out.println(data.get(0));

Library lib=null;
		String pasw=data.get(0).pswd;
		String type=data.get(0).type;
		for(int i=0;i<=data.size();i++)
		  {

		   lib=data.get(i);
			System.out.println(lib.getId());
		

		if(psw.equals(pasw))
		{
    

          lib.setPswd(null);
		  

		
			
			break;
		}
		else{
			return null;
		}
	}
		System.out.println(lib.getPswd());
	return lib;
		


		}
	
		
   @GetMapping("/api/get")
    public List<Library> getAllDetails()
    {
       return repo.findAll();


    }

	@GetMapping("/api/getbook")
    public List<Addbook> getAllbook()
    {
       return addrepo.findAll();


    }


	@GetMapping("/api/getuserbook/{userid}")
	private List<Buybooks> getuserbook(@PathVariable String userid)
	{
		
		System.out.println(userid);
		System.out.println(buybookrepo.findByuserid(userid));
	return buybookrepo.findByuserid(userid);

		
	}

////////users book limit
@GetMapping("/api/getuserbooklimit/{userid}")
	private String getuserbooklimit(@PathVariable String userid)
	{
		
		System.out.println(userid);
		List<Buybooks> data=buybookrepo.findByuserid(userid);
		String rply="null";
		int size=data.size();
		System.out.println("RETURN BOOK LIMIT");
		System.out.println(size);
		if(size<=1)
		{
			rply="valid";
		}
		
		
	return rply;

		
	}







	@PutMapping("/update/{id}")
	public ResponseEntity<Addbook> updatebook(@PathVariable("id") String id, @RequestBody Addbook addbook) {
	  System.out.println(id);
		Optional<Addbook> addbookData = addrepo.findById(id);
	  if (addbookData.isPresent()) {
		Addbook Addbook = addbookData.get();
		Addbook.setId(addbook.getId());
			  Addbook.setBookname(addbook.getBookname());
			  Addbook.setAuthor(addbook.getAuthor());
			  Addbook.setTotalcopy(addbook.getTotalcopy());
			  System.out.println(Addbook.getAvilablecopy());
			  Addbook.setAvilablecopy(addbook.getAvilablecopy());
			  
		return new ResponseEntity<>(addrepo.save(Addbook), HttpStatus.OK);
	  } else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	  }
	}

	@PutMapping("/bookbuyupdate/{id}")
	public ResponseEntity<String> updatebuybook(@PathVariable("id") String id, @RequestBody Addbook addbook) {
		System.out.println("HAIIIIIIIIIII");
		System.out.println(id);
		Optional<Addbook> addbookData = addrepo.findById(id);
	  if (addbookData.isPresent()) {
		Addbook Addbook = addbookData.get();
	
			  Addbook.setBookname(addbook.getBookname());
			  Addbook.setAuthor(addbook.getAuthor());
			  Addbook.setTotalcopy(addbook.getTotalcopy());
			  
			  int a=Integer.parseInt(addbook.getAvilablecopy());
			  if(a>=1)
			  {
				String b=Integer.toString(a-1);
				System.out.println("HELLOOOO");
				
				Addbook.setAvilablecopy(b);
				System.out.println(Addbook.getAvilablecopy());
			  }
			  else{
				Addbook.setAvilablecopy("0");

			  }
			  
			  addrepo.save(Addbook);
		return new ResponseEntity<>(Addbook.getAvilablecopy(), HttpStatus.OK);
	  } else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	  }
	  
	}





////buk deleting
@DeleteMapping("api/deletebuybook/{bukid}")
	public String buybookdelete(@PathVariable ("bukid") String bukid)
	{
		buybookrepo.deleteBybukid(bukid);
		System.out.println("BUK DELETING");
		System.out.println(bukid);
		// 
		

		////////////////////////updatereturn book
		Optional<Addbook> addbookData = addrepo.findById(bukid);
	  if (addbookData.isPresent()) {
		Addbook Addbook = addbookData.get();
	
			
			  
			  int a=Integer.parseInt(Addbook.getAvilablecopy());
			
				String b=Integer.toString(a+1);
				
				
				Addbook.setAvilablecopy(b);
				System.out.println(Addbook.getAvilablecopy());
			
			  
			  addrepo.save(Addbook);




	}
	return "sucess";
}




//////






	@GetMapping("/api/findbyid/{id}")
	public Optional<Addbook>findbyid(@PathVariable String id)
	{
		return addrepo.findById(id);
		
	}
	@DeleteMapping("api/deletebook/{id}")
	public String bookdelete(@PathVariable ("id") String id)
	{
		addrepo.deleteById(id);
		System.out.println(id);
		return "sucess";
	}
}

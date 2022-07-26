package New.Product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public class ProductService {
	private static Map<Long,Product> Products= new HashMap<>();
	private static Long pid=3L;
	
	static
	{
		Product Pro1=new Product(1L,"Laptop","hp","200000");
		Product Pro2=new Product(2L,"Desktop","intel","500000");
		Product Pro3=new Product(3L,"Mobile","Redmi","40000");
		Products.put(1L,Pro1);
		Products.put(2L,Pro2);
		Products.put(3L,Pro3);
		
	}
	
	public static Product addProduct(Product prodt)
	{
		pid +=1;
		prodt.setPid(pid);
		Products.put(pid, prodt);
		return prodt;
		
	}
	public static List<Product> getAllProduct()
	{
		return new ArrayList<>(Products.values());
	}

	public static Product getByIdProduct( Long pid)
	{
		return Products.get(pid);
	}
	
	
	public static List<Product> delete(Long pid)
	{
		 Products.remove(pid);
		return new ArrayList<>(Products.values());
	}

	
	public static Product updateProduct( Long productId, Product prodt)
	{
		prodt.setPid(productId);
		Products.put(productId, prodt);
		return prodt;
		
	}
	
}

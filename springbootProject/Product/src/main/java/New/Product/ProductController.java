package New.Product;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
	
	
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product prodt)
	{
		return ProductService.addProduct(prodt);
	}
	
	@GetMapping("/product")
	public List<Product> getAllProduct()
	{
		return ProductService.getAllProduct();
	}
	@GetMapping("/products/{pid}")
	public Product getByIdProduct(@PathVariable Long pid)
	{
		return ProductService.getByIdProduct(pid);
	}
	
	@GetMapping("/idDisplay")
	public String detailsDisplay(@RequestParam Long phnum,
			                     @RequestParam String place)
	{
		return "Phone_Num:"+phnum+"   "+"Place:"+place;
	}
	
	
	@PutMapping("/updatePro/{productId}")
	public Product updateProduct(@PathVariable Long productId,@RequestBody Product prodt)
	{
		return ProductService.updateProduct(productId,prodt);
	}
	@DeleteMapping("/delete/{pid}")
	public List<Product> delete(@PathVariable Long pid)
	{
		return ProductService.delete(pid);
	}

}

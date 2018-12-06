package com.hitek.HitekTP.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hitek.HitekTP.model.Product;
import com.hitek.HitekTP.repository.ProductRepository;


@CrossOrigin(origins = "*",allowedHeaders="*")
@RestController
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository ;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	@GetMapping("/products/{id}")
	public Product getProductById(@PathVariable(value = "id") Long id) {
		
		return productRepository.findById(id).get();
		
		
	}
	
	@GetMapping("/category/{categoryName}")
	public List<Product> getProductByCategory(@PathVariable(value = "categoryName") String categoryName) {
		
		return productRepository.getProductByCategory(categoryName);
		
		
	}
}

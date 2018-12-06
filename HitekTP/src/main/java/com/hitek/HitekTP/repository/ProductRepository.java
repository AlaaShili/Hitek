package com.hitek.HitekTP.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hitek.HitekTP.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	@Query(value = "select * from hitek.products where product_category = :categoryName", nativeQuery=true)
    List<Product> getProductByCategory(@Param("categoryName") String categoryName);
}

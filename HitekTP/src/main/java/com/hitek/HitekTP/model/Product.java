package com.hitek.HitekTP.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "products")
public class Product {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long productId;

@NotBlank
private String productName;
	
private String productDescription;

private String productCategory;

private Long productPrice;

private String productBrand;

private String productImage;

private Boolean availability;

public Long getProductId() {
	return productId;
}

public void setProductId(Long productId) {
	this.productId = productId;
}

public String getProductName() {
	return productName;
}

public void setProductName(String productName) {
	this.productName = productName;
}

public String getProductDescription() {
	return productDescription;
}

public void setProductDescription(String productDescription) {
	this.productDescription = productDescription;
}

public String getProductCategory() {
	return productCategory;
}

public void setProductCategory(String productCategory) {
	this.productCategory = productCategory;
}

public Long getProductPrice() {
	return productPrice;
}

public void setProductPrice(Long productPrice) {
	this.productPrice = productPrice;
}

public String getProductBrand() {
	return productBrand;
}

public void setProductBrand(String productBrand) {
	this.productBrand = productBrand;
}

public String getProductImage() {
	return productImage;
}

public void setProductImage(String productImage) {
	this.productImage = productImage;
}



public Boolean getAvailability() {
	return availability;
}

public void setAvailability(Boolean availability) {
	this.availability = availability;
}
}

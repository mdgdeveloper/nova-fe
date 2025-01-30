"use server";

import { CATEGORIES_TEST, SERVICES_TEST } from "@/temp/testConsts";
import { Category } from "@/types/category";
import { Service } from "@/types/service";

// const API_URL = process.env.API_URL || "http://localhost:3001";

export async function getCategoryList(): Promise<Category[]> {

  // try{
  //   const response = await fetch(`${API_URL}/categories`);
  //   if(!response.ok){
  //     throw new Error(`Error fetching categories: ${response.statusText}`);
  //   }
  //   const data = await response.json();
  //   return data;

  // }catch(error){
  //   console.error("Failing to fetch categories:", error)
  //   throw error
  // }

  return CATEGORIES_TEST;

}

export async function getServicesList(): Promise<Service[]> {
  return SERVICES_TEST;
}
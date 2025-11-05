/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package selectionSort;

/**
 *
 * @author Frederick
 */
public class main {
    public static int[] selectionSort(int[] arr){
        int n;
        n= arr.length;
        
        for (int i = 0; i < n-1; i++) {
              int min_index;
              min_index = i; 
              
              for (int j = i; j < n; j++) {
                  if (arr[j] <  arr[min_index]) {
                        min_index = j;
                  }
            }
            
              int temp;
              temp= arr[i];
              arr[i] = arr[min_index];
              arr[min_index] = temp;
              
               
              
        }
        
        return arr;
        
     
    }
    
    public static void main(String args[]){
        int[] arr = {7,65,4,32,3,55,2,22};
        int[] arr2 = selectionSort(arr);
        
        for (int i = 0; i < arr2.length; i++) {
            System.out.println(arr2[i]);
        }
       
    }
}

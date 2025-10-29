/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package ordenamiento.burbuja;

/**
 *
 * @author Frederick
 */
public class main {

    /**
     * @param args the command line arguments
     */
    
    
    public static void OrdenamientoBurbuja(int arr[], int num){
        int  temp;
        boolean swapped; 
        
        for (int i = 0; i < num-1; i++) {
            swapped = false;
            for (int j = 0; j < (num-i-1); j++) {
                if (arr[j]>arr[j+1]) {
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }
            
            if(swapped == false){
                break;
            }
            
        }
        
        for (int i = 0; i < num; i++) {
            System.out.println(arr[i]);
        }
    }
    public static void main(String[] args) {
        int[] arr = {120,122,64, 34, 25, 10000,12, 22, 11, 90};
        int n = arr.length;
        
        OrdenamientoBurbuja(arr, n);
              
        
        
    }
    
}

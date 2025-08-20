package main

import(
	"fmt"
)
//var email string = "khunnoi_p@silapakorn.edu"
func main()  {
	//var name string = "phcihittra"
	var age int = 20
	
	email := "khunnoi_p@silpakorn.edu"
	gpa := 4.00

	firstname, lastname := "phichittra", "khunnoi"

	fmt.Printf("Name %s %s, age %d, email %s, gpa %.2f\n", firstname, lastname,age,email,gpa)
}
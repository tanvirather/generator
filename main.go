package main

import (
	"fmt"
	"ado/generator/models"
)

func main() {
	param := models.Load()
	fmt.Printf("Param Object: %+v\n", param)
}

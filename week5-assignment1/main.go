package main

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

// Name : giebekery shop
type Menu struct {
	ID       string  `json:"id"`
	Name     string  `json:"name"`
	Category string  `json:"category"`
	Size     int     `json:"size"`
	Price    float64 `json:"price"`
}


var bakeryMenu = []Menu{
	{ID: "1", Name: "Chocolate Cake", Category: "Cake", Size: 3, Price: 350.00},
	{ID: "2", Name: "Blueberry Muffin", Category: "Muffin", Size: 2, Price: 75.00},
	{ID: "3", Name: "Croissant", Category: "Pastry", Size: 2, Price: 50.00},
	{ID: "4", Name: "Strawberrry Cake", Category: "Cake", Size: 3, Price: 350.00},
	{ID: "5", Name: "Coconut Muffin", Category: "Muffin", Size: 2, Price: 75.00},
}


func getMenu(c *gin.Context) {
	categoryQuery := c.Query("category")

	if categoryQuery == "" {
		c.IndentedJSON(http.StatusOK, bakeryMenu)
		return
	}
	filter := []Menu{}
	for _, item := range bakeryMenu {
		if strings.EqualFold(item.Category, categoryQuery) {
			filter = append(filter, item)
		}
	}

	c.IndentedJSON(http.StatusOK, filter)
}

func main() {
	r := gin.Default()

	
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "healthy"})
	})

	api := r.Group("/api/v1")
	{
		api.GET("/menu", getMenu)        
		
	}

	r.Run(":8080")
}

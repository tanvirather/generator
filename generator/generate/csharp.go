package generate

import (
	"fmt"
	"log"
	"os"

	"zuhid.com/generator/models"
	"zuhid.com/generator/tools"
)

// Csharp represents a C# code generator.
type Csharp struct {
	Company    string
	Product    string
	InputPath  string
	OutputPath string
}

// Generate generates C# code based on the provided table data.
func (csharp *Csharp) Generate(tables []models.Table) error {
	if err := os.RemoveAll(csharp.OutputPath); err != nil {
		log.Fatalf("Error deleting output folder: %v", err)
	}

	template := Template{
		Company:    csharp.Company,
		Product:    csharp.Product,
		OutputPath: csharp.OutputPath,
		Folders:    []string{"[Product]", "[Product].Api"},
	}
	template.Generate()

	for _, table := range tables {
		filePath := fmt.Sprintf("%s/%s/%s.csv", csharp.InputPath, table.Schema, table.Table)
		csv := tools.Csv{}
		// columns, err := csv.ReadColumns(filePath)
		_, err := csv.ReadColumns(filePath)
		if err != nil {
			return err
		}
	}

	// log.Printf("Generating C# code for %d tables...\n", len(tables))
	return nil
}


package main

import (
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	_ "github.com/lib/pq"
	_ "github.com/lib/pq/hestore"

	"app/infrastructure/db"
)

func main() {
	con, err := gorm.Open("postgres", "host=db user=postgres dbname=postgres sslmode=disable password=postgres")
	if err != nil {
		panic(err)
	}
	con.AutoMigrate(&db.TimeSession{})
	con.Create(&db.TimeSession{Name: "henrique", StartTime: time.Now(), EndTime: time.Now()})

	var ts db.TimeSession
	con.Last(&ts)

	fmt.Print(ts)
	defer con.Close()
}

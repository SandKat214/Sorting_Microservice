require("dotenv").config()

const express = require("express")
const cors = require("cors")
const routes = require("./routes")

// express app
const app = express()
const PORT = process.env.PORT

// middleware
app.use(cors({ credentials: true, origin: "*" }))
app.use(express.json())

// route
app.use("/api/products-sort/", routes)

// server
app.listen(PORT, () => {
    console.log(
        `Server listening on http://localhost:${PORT}....`
    )
})

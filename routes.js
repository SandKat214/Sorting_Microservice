const express = require("express")

const router = express.Router()
const { ascCompare, descCompare } = require("./utils/compares")

router.post("/", (req, res) => {
	try {
		const { index, order, products } = req.body

		// check if all products contain the property key
		if (products.every((obj) => index in obj)) {
			if (order.toLowerCase() === "asc") {
				products.sort((a, b) => ascCompare(a, b, index))
			} else if (order.toLowerCase() === "desc") {
				products.sort((a, b) => descCompare(a, b, index))
			} else {
				// order property does not match valid strings
				console.log("Invalid request from client on order property.")
				res.status(400).json({
					error: "Invalid request from client on order property.",
				})
			}
			// successful operation
			console.log("Product sort successful.")
			res.status(200).json(products)
		} else {
			// not all products contain the index key
			console.log("Invalid request from client on index property.")
			res.status(400).json({
				error: "Invalid request from client on index property.",
			})
		}
	} catch (error) {
		// something else catches
		console.log(error.message)
		res.status(400).json({
			error: error.message || "Invalid request from client.",
		})
	}
})

module.exports = router

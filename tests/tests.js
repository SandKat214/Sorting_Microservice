require("dotenv").config()

redRisingWeapons = [
	{
		id: 1,
		name: "Plasma Pistol",
		price: 551.0,
	},
	{
		id: 2,
		name: "GravFist",
		price: 475.0,
	},
	{
		id: 3,
		name: "DuroSteel sword",
		price: 297.5,
	},
	{
		id: 4,
		name: "ScatterFlash",
		price: 297.75,
	},
	{
		id: 5,
		name: "Omnivore-540",
		price: 550.75,
	},
	{
		id: 6,
		name: "StunFist",
		price: 345.5,
	},
]

wonkaCandies = [
	{
		id: 1,
		name: "Hair Toffee",
		price: 2.95,
	},
	{
		id: 2,
		name: "Squelchy Snorter",
		price: 5.3,
	},
	{
		id: 3,
		name: "Rainbow drops",
		price: 3.5,
	},
	{
		id: 4,
		name: "Mushroom bulbs",
		price: 4.85,
	},
	{
		id: 5,
		name: "Cream flower",
		price: 1.99,
	},
	{
		id: 6,
		name: "Meadow lollipops",
		price: 5.35,
	},
]

spaceships = [
	{
		id: 1,
		name: "USS Enterprise-D",
		price: 1000000000005.0,
	},
	{
		id: 2,
		name: "Rocinante",
		price: 50000000035.75,
	},
	{
		id: 3,
		name: "Eagle 5",
		price: 15775.09,
	},
	{
		id: 4,
		name: "Serenity",
		price: 50000000.75,
	},
	{
		id: 5,
		name: "Tardis",
		price: 150000000000.0,
	},
	{
		id: 6,
		name: "The Morning Star",
		price: 250000000000.0,
	},
]

function ascName() {
	console.log(
		'1. Testing sort by "name" ascending:\nOriginal list: Spaceships = ',
		spaceships
	)

	// wait 2 secs...
	setTimeout(async () => {
		try {
			const response = await fetch(
				`${process.env.MS_URL}api/products-sort/`,
				{
					method: "POST",
					body: JSON.stringify({
						index: "name",
						order: "aSc",
						products: spaceships,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			const sorted = await response.json()
			console.log("Sorted return: Spaceships = ", sorted)
		} catch (error) {
			console.log(error)
		}
	}, 2000)
}

function ascPrice() {
	console.log(
		'\n2. Testing sort by "price" ascending:\nOriginal list: Wonka Candies = ',
		wonkaCandies
	)

	// wait 2 secs...
	setTimeout(async () => {
		try {
			const response = await fetch(
				`${process.env.MS_URL}api/products-sort/`,
				{
					method: "POST",
					body: JSON.stringify({
						index: "price",
						order: "ASC",
						products: wonkaCandies,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			const sorted = await response.json()
			console.log("Sorted return: Wonka Candies = ", sorted)
		} catch (error) {
			console.log(error.message)
		}
	}, 2000)
}

function descPrice() {
	console.log(
		'\n3. Testing sort by "price" descending:\nOriginal list: SciFi Weapons = ',
		redRisingWeapons
	)

	// wait 2 secs...
	setTimeout(async () => {
		try {
			const response = await fetch(
				`${process.env.MS_URL}api/products-sort/`,
				{
					method: "POST",
					body: JSON.stringify({
						index: "price",
						order: "desC",
						products: redRisingWeapons,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			const sorted = await response.json()
			console.log("Sorted return: SciFi Weapons = ", sorted)
		} catch (error) {
			console.log(error.message)
		}
	}, 2000)
}

function runTests() {
	ascName()

	// wait 3 secs...
	setTimeout(() => {
		ascPrice()
	}, 5000)

	// wait 6 secs...
	setTimeout(() => {
		descPrice()
	}, 10000)
}

runTests()

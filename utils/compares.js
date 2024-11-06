// template to sort ascending
function ascCompare(a, b, prop) {
	let valA = a[prop]
	let valB = b[prop]
	if (typeof a[prop] === "string") {
		valA = a[prop].toUpperCase()
		valB = b[prop].toUpperCase()
	}
	if (valA < valB) {
		return -1
	} else if (valA > valB) {
		return 1
	}
	return 0
}

// template to sort descending
function descCompare(a, b, prop) {
	let valA = a[prop]
	let valB = b[prop]
	if (typeof a[prop] === "string") {
		valA = a[prop].toUpperCase()
		valB = b[prop].toUpperCase()
	}
	if (valA < valB) {
		return 1
	} else if (valA > valB) {
		return -1
	}
	return 0
}

module.exports = {
	ascCompare,
	descCompare,
}

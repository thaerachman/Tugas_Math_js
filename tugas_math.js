// fungsi absolut
function abs (nilai) {
	return Math.abs (nilai)
}

//ini untuk pangkat atau pow
function panggilpow (nilai1, pangkat) {
	return Math.pow (nilai1, pangkat)
}

// ini untuk sqrt
function panggilSQRT (nilai) {
	return Math.sqrt (nilai)
}

//ini untuk logaritma
function panggilLog (nilai) {
	return Math.log (nilai)
}

// Mencari nilai Minimal
// function panggilMin (nilai1,nilai2,nilai3) {
// 	return Math.Min (nilai1,nilai2,nilai3)
// }

// Mencari nilai Maximal
 // function panggilMax (nilai1, nilai2, nilai3) {
	// return Math.Max (nilai1, nilai2, nilai3)
 // }

//min array
function panggilMinArray (nilai) {
	return Math.min.apply (Math, nilai)
}

console.log (abs(-1000))
console.log (panggilpow(3,2))
console.log (panggilSQRT(100))
console.log (panggilLog(5))
// console.log (panggilMin(4,6,2))
// console.log (panggilMax(40,63,21))

nilaiku = [6,5,9,7,10,11,12]
console.log (panggilMinArray(nilaiku))





//fungsi matematika (pembulatan)

// var fisika = 9.8
// var kimia = 9.3
// var bahasa = 9.5
// var ekonomi = 9.7

// console.log (Math.floor(fisika)) //pembulatan kebawah
// console.log (Math.ceil(fisika))  // meneyesuaikan pembulatannya
// console.log (Math.round(fisika)) // pembulatan keatas

// console.log (Math.floor(kimia))
// console.log (Math.ceil(kimia))
// console.log (Math.round(kimia))

// console.log (Math.floor(bahasa))
// console.log (Math.ceil(bahasa))
// console.log (Math.round(bahasa))

// console.log (Math.floor(ekonomi))
// console.log (Math.ceil(ekonomi))
// console.log (Math.round(ekonomi))
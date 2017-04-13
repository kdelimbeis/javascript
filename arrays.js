// var friends=["janice", "marty", "constantine"];

// for (var i=0; i < friends.length; i++) {
// 	console.log(friends[i] + " is my friend");
// 	document.write(friends[i] + " is my friend");
// }

// var kellogs = ["Corn Flakes", "Frosted Flakes", "Apple Jacks", "Honey Bunches of Oats"];
// var post = ["Raisin Bran", "Honey Smacks", "Cookie Crisp", "Count Chocula"];

// var cereal=[kellogs,post]

// for (var i = 0; i < cereal.length; i++) {
//     for (var j = 0; j < cereal[i].length; j++) {
//         console.log(cereal[i][j]);
//     }
// }

// var kellogs = ["Corn Flakes", "Frosted Flakes", "Apple Jacks", "Honey Bunches of Oats"];

// var post = ["Raisin Bran", "Honey Smacks", "Cookie Crisp", "Count Chocula"];

// var cereal = [kellogs, post];

// function printCereal() {

// 	for (var i = 0; i < cereal.length; i++) {
// 		var brand = cereal[i];
// 		cerealNames(brand);
// 	}

// }

// function cerealNames(brand) {
// 	for (var i = 0; i < brand.length; i++) {
// 		console.log(brand[i]);
// 	}
// }

// printCereal();


var kellogs = ["Corn Flakes", "Frosted Flakes", "Apple Jacks", "Honey Bunches of Oats"];

var post = ["Raisin Bran", "Honey Smacks", "Cookie Crisp", "Count Chocula"];

var cereal = [kellogs, post];

function printCereal() {

	for (var i = 0; i < cereal.length; i++) {
		var cerealBrand = cereal[i];
		cerealNames(cerealBrand);
	};

};

function cerealNames(brand) {
	for (var i = 0; i < brand.length; i++) {
		var newDiv = "<div>" + brand[i] + "</div>";
		var cerealBrandsDiv = document.getElementById("cerealBrands");
		cerealBrandsDiv.innerHTML += newDiv;
	};
};

printCereal();
function generatePassword() {
	var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i",
					  "J","j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", 
					  "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "zz"];
	var digitCount = document.getElementById("inputDigits").value;
	var pw = "";
	for(var i = 0;i<digitCount;i++) {
		var ra = Math.floor((Math.random() * characters.length));
		var pw = pw + characters[ra];
	}
	document.getElementById("outputPassword").value = pw;
}
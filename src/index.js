module.exports = function toReadable (n) {
    let humanNumber;
	
    if (n == 0) {
        return humanNumber = "zero";
    }
    
	const humanHundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
	const humanTens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const humanOnes = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	
    const hundreds = Math.floor(n / 100);
    const tens = Math.floor((n - hundreds * 100) / 10);
    let ones;
	
    humanNumber = humanHundreds[hundreds];
    if ((n - hundreds * 100) < 20) {
        ones = n - hundreds * 100;
        humanNumber += " " + humanOnes[ones];
    } else {
        ones = n - hundreds * 100 - tens * 10;
        humanNumber += " " + humanTens[tens] + " " + humanOnes[ones];
    }
	
	return humanNumber.trim();
}

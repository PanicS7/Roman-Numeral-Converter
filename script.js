/* Make roman number convertor for number up to 3999
   Help source - https://www.mathsisfun.com/roman-numerals.html
   Part for freeCodeCamp certification
   https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/

function convertToRoman (num1) {
	var num = num1.toString();
	
	/* 1. Store all basic roman numbers */
		
	var romanBasic = {
		1 : "I",
		5 : "V",
		10 : "X",
		50 : "L",
		100 : "C",
		500 : "D",
		1000 : "M"
	};
	
	
	/* 2. Divide number in roman format */
		
	// 2.1 Take every digit
	var digit = [];
	for (let n in num) {
		digit[n] = num[n];
	}
	
	// 2.2 Replace digit with correct value
	var number = [];
	for (let d = 0;d <= digit.length;d++) {
		// For first digit
		if (d == 0 && digit.length == 4){
			number[d] = digit[d] + "000";
		}
		else if (d == 0 && digit.length == 3){
			number[d] = digit[d] + "00";
		}
		else if (d == 0 && digit.length == 2){
			number[d] = digit[d] + "0";
		}
		else if (d == 0 && digit.length == 1) {
			number[d] = digit[d];
		}
		// For seccond digit
		else if (d == 1 && digit.length == 4){
			number[d] = digit[d] + "00";
		}
		else if (d == 1 && digit.length == 3){
			number[d] = digit[d] + "0";
		}
		else if (d == 1 && digit.length == 2){
			number[d] = digit[d];
		}
		// For third digit
	    else if (d == 2 && digit.length == 4){
			number[d] = digit[d] + "0";
		}
		else if (d == 2 && digit.length == 3){
			number[d] = digit[d];
		}
		// For fourth digit
		else if (d == 3 && digit.length == 4){
			number[d] = digit[d];
		}						
	}



	/* 3. MAIN PART - CONVERT DIGITS TO ROMAN */
	var roman = [];
	for (let r in romanBasic) {
		for (let i in number) {
			
			// For basic number
			if (number[i] == r){
				roman[i] = romanBasic[r];
			}
			// For four digit number
			else if (number[i].length == 4) {
				if (number[i]*1+1000 == r) {
					roman[i] = "M" + romanBasic[r];
				}
				else if (number[i]*1-1000 == r) {
					roman[i] = romanBasic[r] + "M";
			    }
				else if (number[i]*1-2000 == r) {
					roman[i] = romanBasic[r] + "MM";
				}
				else if (number[i]*1-3000 == r) {
					roman[i] = romanBasic[r] + "MMM";
				}
				else if (number[i] == 0) {
					roman[i] = "";
				}
				else {
				
				}
			}
			
			// For three digit number
			else if (number[i].length == 3) {
				if (number[i]*1+100 == r) {
					roman[i] = "C" + romanBasic[r];
				}
				else if (number[i]*1-100 == r) {
					roman[i] = romanBasic[r] + "C";
			    }
				else if (number[i]*1-200 == r) {
					roman[i] = romanBasic[r] + "CC";
				}
				else if (number[i]*1-300 == r) {
					roman[i] = romanBasic[r] + "CCC";
				}
				else if (number[i] == 0) {
					roman[i] = "";
				}
			}
			
			// For two digit number
			else if (number[i].length == 2) {
				if (number[i]*1+10 == r) {
					roman[i] = "X" + romanBasic[r];
				}
				else if (number[i]*1-10 == r) {
					roman[i] = romanBasic[r] + "X";
				}
				else if (number[i]*1-20 == r) {
					roman[i] = romanBasic[r] + "XX";
				}
				else if (number[i]*1-30 == r) {
					roman[i] = romanBasic[r] + "XXX";
				}
				else if (number[i] == 0) {
					roman[i] = "";
				}
			}
			
			// For single digit number
			else if (number[i].length == 1) {
				if (number[i]*1+1 == r) {
					roman[i] = "I" + romanBasic[r];
				}
				else if (number[i]*1-1 == r) {
					roman[i] = romanBasic[r] + "I";
				}
				else if (number[i]*1-2 == r) {
					roman[i] = romanBasic[r] + "II";
				}
				else if (number[i]*1-3 == r) {
					roman[i] = romanBasic[r] + "III";
				}
				else if (number[i] == 0) {
					roman[i] = "";
				}
			}

		}
	}
	
	// 3. FINAL - Put all digits together
	var output = "";
	for(let a of roman) {
		output += a;
	}
	
	document.write(output + "<br>");
	
}

convertToRoman(2); // should return "II".
convertToRoman(3); // hould return "III".
convertToRoman(4); // should return "IV".
convertToRoman(5); // should return "V".
convertToRoman(9); // should return "IX".
convertToRoman(12); // should return "XII".
convertToRoman(16); // should return "XVI".
convertToRoman(29); // should return "XXIX".
convertToRoman(44); // should return "XLIV".
convertToRoman(45); // should return "XLV"
convertToRoman(68); // should return "LXVIII"
convertToRoman(83); // should return "XCVII"
convertToRoman(99); // should return "XCIX"
convertToRoman(400); // should return "CD"
convertToRoman(500); // should return "DI"
convertToRoman(649); // should return "DCXLIX"
convertToRoman(798); // should return "DCCXCVIII"
convertToRoman(891); // should return "DCCCXCI"
convertToRoman(1000); // should return "M"
convertToRoman(1004); // should return "MIV"
convertToRoman(1006); // should return "MVI"
convertToRoman(1023); // should return "MXXIII"
convertToRoman(2014); // should return "MMXIV"
convertToRoman(3999); //should return "MMMCMXCIX"

    
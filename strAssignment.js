//“The cow jumped over the moon.” should return 6 and “jumped”.


var org_str = "The cow jumped over the moon";
var strArr = org_str.split(" ");





var stringLongest = function(strArr){

	var temp_length = 0;
	var temp_element;

	strArr.forEach(function(element){



		if( element.length > temp_length)
		{
			temp_element = element;
			temp_length = element.length
		}


	})


	console.log("Longest String is " + temp_element + " with a length of " + temp_length );

}

//Test Case 1 as given example
console.log("Given String array for test case 1 is " + strArr);
stringLongest(strArr);


console.log("*******************************************************")

//Test Case 2 with all numbers
var str1 = "1 234 3131";
var str1Arr = str1.split(" ");
console.log("Given String array for test case 2 is " + str1Arr);
stringLongest(str1Arr);

console.log("*******************************************************")

//Test Case 3 with repeating strings 
var str2 = "This is newstring newstring ";
var str2Arr = str2.split(" ");
console.log("Given String array for test case 3 is " + str2Arr);
stringLongest(str2Arr);

console.log("*******************************************************")


//Test Case 4 with strings having same length, first longest is detected
var str3 = "This is newstring mystrcomp";
var str3Arr = str3.split(" ");
console.log("Given String array for test case 4 is " + str3Arr);
stringLongest(str3Arr);
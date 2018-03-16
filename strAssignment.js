//“The cow jumped over the moon.” should return 6 and “jumped”.


var org_str = "The cow jumped over the moon";
var strArr = org_str.split(" ");

console.log(strArr);




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

stringLongest(strArr);

var str1 = "My name is HONOLULU HIHIHIHI";
var str1Arr = str1.split(" ");

stringLongest(str1Arr);
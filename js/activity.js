define(["sugar-web/activity/activity"], function (activity) {
	require(['domReady!'], function (doc) {
		//activity.setup();
		var calculation = document.getElementById("calculation");
		var Validate = document.getElementById("Validate");
		var final = document.getElementById("final");
		var op=["+","*","-"];
		var i=1;
		var number_list=[];

		function number(){
			return Math.floor(Math.random() * 30);
		}
		function shuffleArray(array) {
		    for (var i = array.length - 1; i > 0; i--) {
		        var j = Math.floor(Math.random() * (i + 1));
		        var temp = array[i];
		        array[i] = array[j];
		        array[j] = temp;
		    }
		};
		while(i <= 3  )  
			{ 	i=i+1;;
				b=number()
				number_list.push(b);
			}
		
		true_result= function(){
			var r= ""+ number_list[0] +op[0] +number_list[1] +op[1] +number_list[2];
			return eval(r)
		}
		shuffleArray(op);
		calculation.innerHTML="The calculation is " + number_list[0] +" "
		    + op[0] +" "+  number_list[1] +" "+ op[1] +" "+  number_list[2];
		Validate.onclick = function () {
			var response = document.getElementById("response").value;
		if (response == true_result()){
			final.innerHTML="Yes! You are right."
		}else{
			final.innerHTML="No, it's wrong. The result was :" + true_result();
		}
	}
		});
});

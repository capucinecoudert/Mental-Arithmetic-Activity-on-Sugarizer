define(["sugar-web/activity/activity"], function (activity) {
	require(['domReady!'], function (doc) {
		//activity.setup();
		var calculation = document.getElementById("calculation");
		var Validate = document.getElementById("Validate");
		var final = document.getElementById("final");
		var op=["+","*","-"];
		var i;
		var number_list;
		var cpt;
		var score=0;
		var clock=document.getElementById("Clock");
		var score_span=document.getElementById("score");
		var validate=document.getElementById("my-button");
		var timeout;

        validate.onclick = function() {
        	evaluate();
        }

	    function display_score() {
	        score_span.innerHTML="Score: " + score;
	    }

		function global (){
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
			cpt = 20 ;
            number_list=[];
            i=1;
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
            display_score();
			decompte();
		};

	function evaluate () {
		clearTimeout(timeout);
	 	var response = document.getElementById("response").value;
	 	if (response == true_result()){
	 		final.innerHTML="Yes! You are right."
	 		score+=cpt+1;
	 		display_score();
	 	} else {
			final.innerHTML="No, it's wrong. The result was: " + true_result();
		}
		global();
	}

	function decompte(){
	    if(cpt>=0) {
	        if(cpt>1) {
	            var sec = " seconds";
	        } else {
	            var sec = " second";
	        }
	        clock.innerHTML=cpt + sec + " left...";
	        cpt-- ;
	        timeout = setTimeout(decompte, 1000) ;
	    } else {
	        evaluate();
	    }
	}

	global();
	});
});

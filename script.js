$(document).ready(function(){

	$(document).keydown(function(key){

	});
	$("div.numKey").click(function(){
		var newNum = $(this).html();
		$("#keypadDisplay").append(newNum);
	});
	$("#clear").click(function(){
		$("#keypadDisplay").html("");
	});
	$(".enterKey").click(function(){

	});
	$(document).keydown(function(e){
		switch(parseInt(e.which)){
			case 13: /* enter */
				break;
			case 8:
				$("#keypadDisplay").html("");
				break;
			case 46:
				$("#keypadDisplay").html("");
				break;
			case 27:
				$("#keypadDisplay").html("");
				break;
			case 67:
				$("#keypadDisplay").html("");
				break;
			case 83:  /*skip*/
				break;
			case 96:
				$("#keypadDisplay").append("0");
				break;
			case 97:
				$("#keypadDisplay").append("1");
				break;
			case 98:
				$("#keypadDisplay").append("2");
				break;
			case 99:
				$("#keypadDisplay").append("3");
				break;
			case 100:
				$("#keypadDisplay").append("4");
				break;
			case 101:
				$("#keypadDisplay").append("5");
				break;
			case 102:
				$("#keypadDisplay").append("6");
				break;
			case 103:
				$("#keypadDisplay").append("7");
				break;
			case 104:
				$("#keypadDisplay").append("8");
				break;
			case 105:
				$("#keypadDisplay").append("9");
				break;
			case 48:
				$("#keypadDisplay").append("0");
				break;
			case 49:
				$("#keypadDisplay").append("1");
				break;
			case 50:
				$("#keypadDisplay").append("2");
				break;
			case 51:
				$("#keypadDisplay").append("3");
				break;
			case 52:
				$("#keypadDisplay").append("4");
				break;
			case 53:
				$("#keypadDisplay").append("5");
				break;
			case 54:
				$("#keypadDisplay").append("6");
				break;
			case 55:
				$("#keypadDisplay").append("7");
				break;
			case 56:
				$("#keypadDisplay").append("8");
				break;
			case 57:
				$("#keypadDisplay").append("9");
				break;
			default:
				break;
			
		}
	}); //keydown
	timer();

});

var timer = function(){ $('#timer').pietimer({
          timerSeconds: 30,
          color: 'red',
          fill: true,
          showPercentage: false,
          callback: function() {
              //alert("yahoo, timer is done!");
              $('#timer').pietimer('start');
          }
      });
    
}
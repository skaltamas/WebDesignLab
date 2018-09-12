$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO)|(EE)|(DEE)|(EX)|(DEX)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})+/gi.test(this.value)){
			alert("Invalid Roll No");
			this.value="";
		}
	});
	$('#sname').on('keypress',function(e){
		if(/[^a-zA-Z ]/.test(e.key)){
			alert("Invalid Name. Only alphabets and space is allowed");
			this.value="";
			return false;
		}
	});
	$('#semail').on('blur',function(e){
		if(!/(^(([a-zA-Z])|([0-9]))+@([a-zA-Z])+.([a-zA-Z]{2,3})$)/gi.test(this.value)){
			alert("Invalid Email");
			this.value="";
			return false;
		}
	})
	$('#address').on('blur',function(e){
		var len=$("#address").val().length;
		if(len<25 || length>140){
			alert("Invalid address. Length should be more than 25 and less than 140");
			this.value="";
			return false;
		}
	});
});

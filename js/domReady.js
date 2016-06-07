
function $(fn){	
	if(document.addEventListener){//高级
		document.addEventListener("DOMContentLoaded",fn,false);
	} else {
		document.attachEvent("onreadystatechange",function(){
			if(document.readyState == "complete"){
				fn &&fn();
			}	
			
		});
	}
};

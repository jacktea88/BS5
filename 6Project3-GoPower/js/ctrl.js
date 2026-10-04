
	$(function(){
		document.onkeydown=function(e){
			// alert(e.keyCode)
			if(e.keyCode===17 ||e.keyCode===85||e.keyCode===123){
				$("#warning").modal("show")
				return false;
			}else{
				return true;
			}
		}
		$("body").on('contextmenu',function(){
			$("#warning").modal("show")
			return false;
		})
	})
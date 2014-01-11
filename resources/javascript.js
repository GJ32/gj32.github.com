// Your Javascript will go here!
$(document).ready(function() {
	function replaceName() {
	    var myNewName = window.prompt('Pick a new name!');
	    //document.getElementById('user-name').innerHTML = myNewName;
	    $("#user-name").html(myNewName);
	    $("#user-name").css({color: 'blue'});
	} 
	function clickEvent () {
		$('#copyright').click(function(){
			$(this).css ({ 'color':'green', 'font-size': '20px'});
		});
	}


   replaceName();
   clickEvent();
});

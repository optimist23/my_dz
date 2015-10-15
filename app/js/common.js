$(document).ready(function(){
		$("#add_proj").on('click', function(e) {
			e.preventDefault();
			$("#add_new_project").bPopup({
				speed:650,
				transition: 'slideIn',
				transitionClose: 'slideBack'
			});
		});


	}); // --> END READY <--
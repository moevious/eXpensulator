
function GetButtons() {
	 
    $.ajax({
		url: "DBLayer/categories.php",
		type: "POST",
		data: {
			Operation: "GetButtons"
		},
		
		success: function (data) {
			
			var jsData = JSON.parse(data);
			if (jsData.ErrorCode != 0) {
				alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
				return;
			}
			for(var i = 0; i < jsData.Data.length; i++) {
				$("#btn" + i)
						.text(jsData.Data[i].cat)
						.attr("data-cat", jsData.Data[i].cat)
						.attr("data-cat-id", jsData.Data[i].cat_id)
			}       
		},
		error: function(data) {
			alert("Ajax problem! " + data.statusText);
		}
    });

}; 


function SetButtons(buttonNameId, newButtonName) {
    $.ajax({
    	url: "DBLayer/categories.php",
	    type: "POST",
        data: {
		Operation: "SetButtons",
		oldCat_php : buttonNameId,
		newCat_php : newButtonName
        },
        
        success: function (data) {
		var jsData = JSON.parse(data);
		if (jsData.ErrorCode != 0) {
			alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
			return;
		}
		
		//$("#btn").val(jsData.Data[0].cat)
		
	//for(var i = 0; i < jsData.Data.length; i++) {
				//$(this)
						//.text(jsData.Data[0].cat)
						//.attr("data-cat", jsData.Data[0].cat)
						//.attr("data-cat-id", jsData.Data[0].cat_id)
			//}
        },
		error: function(data) {
			alert("Ajax problem! " + data.statusText);
		}
     }); 
}; 



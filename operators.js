function GetButtons() {
	// alert ("1");
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

function ChgOnClickOpBtn() {
			$(".opKey").click(function() {
				var attrCat = $(this).attr("data-cat");
				var attrCatId = $(this).attr("data-cat-id");
				var  = "<div class='opKey' id='ScreenXpend'><input id='submit' type='button' value='Xpend' onclick='SendData();'/></div>";
					
				$(".screen").html(screenBody);
				
			});
		}


function TestEcho() {
	$.ajax({
		url: "DBLayer/Users.php",
		type: "POST",
		success: function(jsResponse) {
			var jsData = JSON.parse(jsResponse);
			
			if (jsData.ErrorCode == 0) {
				var zero = jsData.Data[0];
				var one = jsData.Data[1];
			}
		},
		error: function(data) {
			alert("Ajax problem! " + data);
		}
	});
}

function GetUser(id) {
	$.ajax({
		url: "DBLayer/Users.php",
		type: "POST",
		data: { 
			Operation: "GetUser",
			Id: id
		},
		success: function(jsResponse) {
			var jsData = JSON.parse(jsResponse);

			if (jsData.ErrorCode != 0) {
				alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
				return;
			} 
			
			alert("Name of user [" + id + "]: " + jsData.Data.Name);
		},
		error: function(data) {
			alert("Ajax problem! " + data.statusText);
		}
	});
}

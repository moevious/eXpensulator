// Total Functions


function InsertAllData(amount, date, cats_id, notes) {

    $.ajax({
    	url: "DBLayer/spendings.php",
	    type: "POST",
        data: {
		Operation: "InsertAllData",
			amount : amount,
			date : date,
			cats_id: cats_id,
			notes : notes
		},
        
        
        
		success: function (data) {
			var jsData = JSON.parse(data);
			if (jsData.ErrorCode != 0) {
				alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
				return;
			}
			
			
			//alert("Last ID: " + jsData.Data)
			
        },
		error: function(data) {
			alert("Ajax problem! " + data.statusText);
		}
		
     }); 
}; 



function FormatDateTime(date) {
    
    if (date == null) return null;
    
    var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(date - tzoffset)).toISOString().slice(0,-5);
    return localISOTime.replace(/[T]/g, ' ');
    
}



//function GetSpendings(users_id, cats_id, dateFrom, dateTo) {
function GetStatisticsHour(cats_id, dateFrom, dateTo) {
	
	    $.ajax({
    		url: "DBLayer/spendings.php",
	    	type: "POST",
        	data: {
			Operation: "GetStatisticsHour",
				//users_id: users_id,
				cats_id: cats_id,
				dateFrom: FormatDateTime(dateFrom),
				dateTo: FormatDateTime(dateTo)
			},
	
	
	success: function (data) {
			
			var jsData = JSON.parse(data);
			
			if (jsData.ErrorCode != 0) {
				alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
				return;
			}
			
			$("#totals-hour").html("Daily: " + jsData.Data[0].amount)

        
		    },
			
			error: function(data) {
				alert("Ajax problem! " + data.statusText);
			}
			
		
     }); 
}; 



function GetStatistics(cats_id, dateFrom, dateTo) {
	
	    $.ajax({
    		url: "DBLayer/spendings.php",
	    	type: "POST",
        	data: {
			Operation: "GetStatistics",
				//users_id: users_id,
				
				cats_id_php: cats_id,
				dateFrom_php: FormatDateTime(dateFrom),
				dateTo_php: FormatDateTime(dateTo)
			},

	
	success: function (data) {
			
			var jsData = JSON.parse(data);
			
			if (jsData.ErrorCode != 0) {
				alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
				return;
			}
			
			$("#totals-month").html("Monthly: " + jsData.Data[0].amount)

        
		    },
			
			error: function(data) {
				alert("Ajax problem! " + data.statusText);
			}
			
		
     }); 
}; 
	

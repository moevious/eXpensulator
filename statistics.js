
function FormatDateTime(date) {
    
    if (date == null) return null;
    
    var tzoffset = date.getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(date - tzoffset)).toISOString().slice(0,-5);
    return localISOTime.replace(/[T]/g, ' ');
    
}

function GetStatsData(categoryId, dateFrom, dateTo) {
	$.ajax({
		url: "DBLayer/statistics.php",
		type: "POST",
		data: {
			Operation: "GetStatsData",
			//users_id: users_id,
			cats_id_php: categoryId,
			dateFrom_php: FormatDateTime(dateFrom),
			dateTo_php: FormatDateTime(dateTo)
		
		},

	
		success: function (data) {
			
			var jsData = JSON.parse(data);
			
			if (jsData.ErrorCode != 0) {
				alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
				return;
			}
			
			$("#totals-statistics").html("You spent: " + jsData.Data[0].amount)

        
		    },
			
			error: function(data) {
				alert("Ajax problem! " + data.statusText);
			}
			
		
     }); 
};



function GetStatsTable(categoryId, dateFrom, dateTo, notes) {
	$.ajax({
		url: "DBLayer/statistics.php",
		type: "POST",
		data: {
			Operation: "GetStatsTable",
			//users_id: users_id,
			cats_id_php: categoryId,
			dateFrom_php: FormatDateTime(dateFrom),
			dateTo_php: FormatDateTime(dateTo),
			sub_cat: notes
		},

	
		success: function (data) {
			
			var jsData = JSON.parse(data);
			
			if (jsData.ErrorCode != 0) {
				alert("Error [" + jsData.ErrorCode + "]: " + jsData.ErrorMessage);
				return;
			}
									
			
			var MENU_TAGS_COLUMN_COUNT = 4;
			
		
				var html = '<table name="expensuTable" cellpadding="1" border="1"><thead></thead><tbody>' + "\n";
				var cellIndex=1;
				for (var i=0; i < jsData.Data.length; i++) {
					if (cellIndex == 1) {
						html += '<tr>';
						
					}
					var $getDate    = jsData.Data[i].date;
					var $getCat  =  jsData.Data[i].cat;    //jsData.Data[i].cats_id;
					var $getAmount  = jsData.Data[i].amount;
					var $getNotes  =  jsData.Data[i].sub_cat;
					
					
					
					html += '<td width="90">' + $getDate + '</td>' + '<td width="90">' + $getCat + '</td>' + '<td width="90">' + $getNotes + '</td>' + '<td width="90">' + $getAmount + '</td>' + "\n";
					
					if (++cellIndex > 1) { //close the row
						html += '</tr>';
						cellIndex = 1;
						
					}
					
				}
			
				html += '</tbody></table>' + "\n";
			
				document.getElementById('expensuTable').innerHTML = html;
				
			
        
		},
			
		error: function(data) {
			alert("Ajax problem! " + data.statusText);
		}
			
		
     }); 
    


};




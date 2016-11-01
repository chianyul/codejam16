function doGet(e) {
	var output = HtmlService.createHtmlOutputFromFile('form.html').setTitle("CodeJam 2016 Registration");
	output.addMetaTag("viewport", "width=device-width, initial-scale=1.0");
	return output;
}

function uploadFileToGoogleDrive(data, file, fname, lname) {	
	try {
		var dropbox = "CodeJam Participant Resumes";
		var folder, folders = DriveApp.getFoldersByName(dropbox);
	
		if (folders.hasNext()) {
			folder = folders.next();
		} else {
			folder = DriveApp.createFolder(dropbox);
		}

		var filename = "Resume -" + [fname, lname].join(" ");
		
		var contentType = data.substring(5,data.indexOf(';')),
		bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,')+7)),
		blob = Utilities.newBlob(bytes, contentType, filename),
		// file = folder.createFolder([fname, lname].join(" ")).createFile(blob);
		file = folder.createFile(blob);
	
		return "OK";
	
	} catch (f) {
		return f.toString();
	}
}

function addResponseToSheet(q0, q1, q2, q3, q4, q5, q6, q7, q8, q9) {
	var mySheet = SpreadsheetApp.openById("1FA4eRtrpiNYj7bi2UUYS7Byxmon4iNAMAEdeV53YUSI").getSheets()[0];
	var timestamp = new Date();
	mySheet.appendRow([timestamp, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9]);
}
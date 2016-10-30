function doGet(e) {
	return HtmlService.createHtmlOutputFromFile('forms.html').setTitle("CodeJam 2016 Registration");
}

function uploadFileToGoogleDrive(data, file, name, email) {
	
	try {
		var dropbox = "Received Files";
		var folder, folders = DriveApp.getFoldersByName(dropbox);
	
		if (folders.hasNext()) {
			folder = folders.next();
		} else {
			folder = DriveApp.createFolder(dropbox);
		}

		var contentType = data.substring(5,data.indexOf(';')),
		bytes = Utilities.base64Decode(data.substr(data.indexOf('base64,')+7)),
		blob = Utilities.newBlob(bytes, contentType, file),
		file = folder.createFolder([name, email].join(" ")).createFile(blob);
	
		return "OK";
	
	} catch (f) {
		return f.toString();
	}
}

function assignEditUrls() {
	var form = FormApp.openById('yourFormKey');
		//enter form ID here

	var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('yourWorksheetName');

		//Change the sheet name as appropriate
	var data = sheet.getDataRange().getValues();
	var urlCol = ; // column number where URL's should be populated; A = 1, B = 2 etc
	var responses = form.getResponses();
	var timestamps = [], urls = [], resultUrls = [];
	
	for (var i = 0; i < responses.length; i++) {
		timestamps.push(responses[i].getTimestamp().setMilliseconds(0));
		urls.push(responses[i].getEditResponseUrl());
	}
	for (var j = 1; j < data.length; j++) {

		resultUrls.push([data[j][0]?urls[timestamps.indexOf(data[j][0].setMilliseconds(0))]:'']);
	}
	sheet.getRange(2, urlCol, resultUrls.length).setValues(resultUrls);
}
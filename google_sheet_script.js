// Google Apps Script to process waitlist form submissions
function doGet(e) {
  // Get email from URL parameters
  var email = e.parameter.email;
  
  // Check if email is provided
  if (!email) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'No email provided' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  try {
    // Get the active sheet
    var sheet = SpreadsheetApp.openById('1TxYXufwv-qAXG3kNdcHxTC3raHthrE_0Oedo71sKH5E').getSheetByName('Waitlist');
    
    // If the sheet doesn't exist, create it with a header row
    if (!sheet) {
      sheet = SpreadsheetApp.openById('1TxYXufwv-qAXG3kNdcHxTC3raHthrE_0Oedo71sKH5E').insertSheet('Waitlist');
      sheet.appendRow(['Email', 'Timestamp']);
    }
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([email, timestamp]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Email added to waitlist' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Set up web app permissions
function setup() {
  /*
  After saving this script in Google Apps Script editor:
  1. Click on Deploy > New deployment
  2. Select "Web app" as the type
  3. Set "Execute as" to "Me"
  4. Set "Who has access" to "Anyone"
  5. Click "Deploy"
  6. Copy the Web app URL and use it in your React component
  */
} 
# Setting Up Google Sheets Waitlist Integration

Follow these step-by-step instructions to set up a Google Sheet to collect emails from your GymBro waitlist form.

## 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Rename the spreadsheet to "GymBro Waitlist" (or any name you prefer)
3. In the first row, add two column headers: "Email" and "Timestamp"
4. **Important**: Copy the Spreadsheet ID from the URL. The URL will look like:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID_HERE/edit
   ```

## 2. Create a Google Apps Script

1. In Google Drive, click on "New" > "More" > "Google Apps Script"
2. Delete any template code in the editor
3. Copy and paste the code from `google_sheet_script.js` in this project
4. Replace `YOUR_SPREADSHEET_ID_HERE` with the ID you copied in step 1.4
5. Click "Save" and name the project "GymBro Waitlist Form"

## 3. Deploy the Script as a Web App

1. Click on "Deploy" > "New deployment"
2. Select "Web app" as the deployment type
3. Configure the deployment:
   - Description: "GymBro Waitlist Form Handler"
   - Execute as: "Me" (your Google account)
   - Who has access: "Anyone"
4. Click "Deploy"
5. Authorize the app when prompted
6. **Important**: Copy the Web App URL provided after deployment

## 4. Update Your React Application

1. Open `src/components/CtaSection.jsx` in your project
2. Replace `YOUR_SCRIPT_ID_HERE` in the `GOOGLE_SHEET_URL` constant with the Web App URL you copied in step 3.6

## 5. Test the Integration

1. Run your React application
2. Go to the waitlist section
3. Enter a test email and submit the form
4. Check your Google Sheet to verify that the email was added

## Troubleshooting

If emails aren't showing up in your sheet:

1. Make sure you've authorized the Google Apps Script properly
2. Check that the Spreadsheet ID is correct
3. Verify that the web app URL is correct in your React component
4. Check the browser console for any errors

## Security Notes

- This implementation uses `no-cors` mode, which is necessary for cross-origin requests to Google Apps Script
- While this approach works for a waitlist, consider a more secure backend for handling sensitive user data in production 
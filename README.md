# Job Search Frontend

## Run Project

```bash
npm install
npm run dev
```

## Deploy in Vercel

1. Upload this project to GitHub
2. Login to Vercel
3. Import GitHub repository
4. Deploy

## Google Sheet Integration

1. Open Google Sheets
2. Extensions -> Apps Script
3. Paste below code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.designation,
    data.location,
    data.gender,
    data.appliedJob,
    data.createdAt
  ]);

  return ContentService.createTextOutput("Success");
}
```

4. Deploy as Web App
5. Copy Web App URL
6. Paste URL in App.jsx:
   GOOGLE_SCRIPT_URL

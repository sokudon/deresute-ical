/**
 * Return a list of sheet names in the Spreadsheet with the given ID.
 * @param {String} a Spreadsheet ID.
 * @return {Array} A list of sheet names.
 */

var sid="1oPHe9iVIYBIacyaQRSJX7oJey2Zs1-0IkEmKSzwyLHk";
var sname="ぼーだー";

/**
 * Return a list of sheet names in the Spreadsheet with the given ID.
 * @param {String} a Spreadsheet ID.
 * @return {Array} A list of sheet names.
 */

var sid="1oPHe9iVIYBIacyaQRSJX7oJey2Zs1-0IkEmKSzwyLHk";
var sname="イベ設定";

function doGet() {
  var ss = SpreadsheetApp.openById(sid);
  var sheets = ss.getSheetByName(sname);
  
　var last_row = 2;
　var last_col = 6;
  
   var values= sheets.getRange(1,1,last_row ,last_col).getValues();
  var value=JSON.parse(JSON.stringify(values));
  
  var ibemie="[デレステ]"+value[1][0];
  var ibekaishi= value[1][1];
  var ibeowari = value[1][2]; 
  var pendingend ="";


var tmp="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//はんようたいまー//NONSGML v1.0//EN\r\nBEGIN:VEVENT\r\nUID:\r\nDTSTART:20200423T150000Z\r\nDTEND:20200424T150000Z\r\nSUMMARY:うづき\r\nEND:VEVENT\r\nEND:VCALENDAR";

var moment = Moment.load();
  if(ibeowari=="" || ibeowari=="--"){
  ibeowari = ibekaishi;
  pendingend ="(※終了時未定です)";
  }
  
tmp=tmp.toString().replace(/DTSTART:\d+T\d+Z/,"DTSTART:"+moment.utc(ibekaishi).format("YYYYMMDDTHHmmss[Z]"));
tmp=tmp.toString().replace(/DTEND:\d+T\d+Z/,"DTEND:"+moment.utc(ibeowari).format("YYYYMMDDTHHmmss[Z]"));
tmp=tmp.replace(/SUMMARY:うづき/,"SUMMARY:"+ibemie+pendingend);
  tmp=tmp.replace(/UID:/,"UID:DRESUTE"+moment.utc(ibekaishi).format("YYYYMMDDTHHmmss[Z]"));
  
  return ContentService.createTextOutput(tmp).setMimeType(ContentService.MimeType.ICAL);
  
}


function TextDL(n,t){b=new Blob([n],{type:"text/plain"}),a=document.createElement("a"),a.download=t,a.href=window.URL.createObjectURL(b),e=document.createEvent("MouseEvent"),e.initEvent("click",!0,!0),a.dispatchEvent(e)}


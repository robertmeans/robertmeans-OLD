// JavaScript Document

// today's date
function todayIs(){
var now = new Date();
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number)	{
	return (number < 1000) ? number + 1900 : number;
								}
today =  days[now.getDay()] + ", " +
			  months[now.getMonth()] + " " +
			   date + ", " +
				(fourdigits(now.getYear())) ;
}

// time function for clocks across the top of page
function getTime(){
if (!document.all&&!document.getElementById) return;
currentPacificTime=document.getElementById? document.getElementById("pacific"): document.all.pacific;
currentMountainTime=document.getElementById? document.getElementById("mountain"): document.all.mountain;
currentCentralTime=document.getElementById? document.getElementById("central"): document.all.central;
currentEasternTime=document.getElementById? document.getElementById("eastern"): document.all.eastern;

var now=new Date();
var hours=now.getHours();
var minutes=now.getMinutes();
var seconds=now.getSeconds();

// these clocks are set for Mountain Time Zone
// that's why they're wired weird. you're weird.
pacificHours=hours - 1;
mountainHours=pacificHours + 1;
centralHours=pacificHours + 2;
easternHours=pacificHours + 3;

if (seconds<=9) seconds="0"+seconds;
if (minutes<=9) minutes="0"+minutes;

if (pacificHours<=9) pacificHours="0"+pacificHours;
if (mountainHours<=9) mountainHours="0"+mountainHours;
if (centralHours<=9) centralHours="0"+centralHours;
if (easternHours<=9) easternHours="0"+easternHours;

var pacificTime=pacificHours+":"+minutes;
var mountainTime=mountainHours+":"+minutes;
var centralTime=centralHours+":"+minutes;
var easternTime=easternHours+":"+minutes+":"+seconds;

currentPacificTime.innerHTML=pacificTime;
currentMountainTime.innerHTML=mountainTime;
currentCentralTime.innerHTML=centralTime;
currentEasternTime.innerHTML=easternTime;

setTimeout("getTime()",1000);
}

// reset all form onload
function clearForms()
{
  var i;
  for (i = 0; (i < document.forms.length); i++) {
    document.forms[i].reset();
  }
}

// set focus to url field
function setFocus()
{
    document.getElementById('addressfield').focus();
	document.urlField.address.value='http\://';
}

// decide where to send for dictionary or thesaurus search  
function OnSubmitForm()
{
  if(document.reference.dictionary.checked == true) {
    document.reference.action ="http://dictionary.reference.com/search";
  } else {
    document.reference.action ="http://thesaurus.com/the";
  }
  return true;
}

// bing search
function submitBing()
{
  if(document.getElementById("bingImages").checked == true) {
    document.bing.action ="http://www.bing.com/images/search";
  } else if (document.getElementById("bingMaps").checked == true) { 
  	document.bing.action ="http://www.bing.com/maps/default.aspx";
  } else {
    document.bing.action ="http://www.bing.com/search";
  }
  return true;
}

// google search
function submitGoogle()
{
  if(document.getElementById("googleImages").checked == true) {
    document.google.action ="http://images.google.com/images";
  } else if (document.getElementById("googleMaps").checked == true) { 
  	document.google.action ="http://maps.google.com/maps";
  } else {
    document.google.action ="http://www.google.com/search";
  }
  return true;
}

// cookies for message function at bottom of page
var expDays = 30;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
var ShowCount = 0;
var SwapColour;
function ListToDoItems() {
var NumToDoItems = GetCookie('PT_NumToDoList');
var i;
var ToDoItem;
if (NumToDoItems == null) {
NumToDoItems = 0;
}
ShowCount = 0; SwapColour = 0;
for (i=1; i <= NumToDoItems; i++) {
ToDoItem = GetCookie('PT_ToDoItem'+i);
if (ToDoItem != null) {
PrintItem(ToDoItem, i);
      }
   }
}
function DeleteItem(Count) {
DeleteCookie('PT_ToDoItem'+Count);
window.location = window.location;
}
function PrintItem (ToDoItem, Count) {
var color = "";
SwapColour = 1 - SwapColour;
if (SwapColour==1) {color = "bgcolor='#FFFF00'"} ;
ShowCount++;
document.write("<tr " + color + ">");
document.write("<td width=10% align=center valign=middle><div class=\"msgNumber\"><b>"+ShowCount+"<\/div>");
document.write("<td width=75% align=left><div class=\"msgText\">"+ToDoItem+"<\/div>");
document.write("<td width=15% align=center valign=middle><small>"+"<a class=\"msgDelete\" href='javascript:DeleteItem(" + Count + ")' onMouseOver=\"window.status='Delete this item.'; return true;\" onMouseOut=\"window.status=''; return true;\">Delete</a>");
}
function AddItem() {
var NumToDoItems = GetCookie('PT_NumToDoList');
var i;
var ToDoItem;
if (NumToDoItems == null) {
NumToDoItems = 0;
}
ToDoItem = prompt("Type your message here:\n(You can type, \"<br />\" to create a carriage return.)");
if ((ToDoItem != null) && (ToDoItem != "undefined" )) {
NumToDoItems++;
SetCookie('PT_ToDoItem'+NumToDoItems, ToDoItem, exp);
SetCookie('PT_NumToDoList',NumToDoItems, exp);
window.location = window.location;
   }
}
function set() {
Visitorname = prompt("Who are you?");
SetCookie ('Visitorname', Visitorname, exp);
SetCookie ('WWHCount', 0, exp);
SetCookie ('WWhenH', 0, exp);
}
function getCookieVal (offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}

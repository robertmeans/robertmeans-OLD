<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<META Http-Equiv="Cache-Control" Content="no-cache">
<META Http-Equiv="Pragma" Content="no-cache">
<META Http-Equiv="Expires" Content="0">
<title>Robert Means, Conspectus</title>

<script type="text/javascript">
<!--
if (screen.width <= 699) {
if (document.referrer.indexOf("mobile.htm") == -1){
document.location = 'mobile.htm';
}}
-->
</script>
<!-- local testing
<link rel="stylesheet" href="myConspectus.css?<?php echo time(); ?>" type="text/css" />
-->

<link href="myConspectus.css" rel="stylesheet" type="text/css" />


<style type="text/css">
#dhtmltooltip{
position: absolute;
width: 150px;
border: 1px solid #a4946d;
padding: 5px 5px 5px 10px;
-moz-border-radius: 5px;
-webkit-border-radius: 5px;
border-radius: 5px;
text-align: left;
background-color: lightyellow;
visibility: hidden;
z-index: 100;
}

</style>
<script type="text/javascript">
<!--
function mouseover1()
{
document.getElementById("topLeftBox").style.backgroundColor='#ffffff';
document.getElementById("topLeftBox").style.border='1px solid #836b33';
}
function mouseout1()
{
document.getElementById("topLeftBox").style.backgroundColor='';
document.getElementById("topLeftBox").style.border='';
}

//-->
</script>
<script language="Javascript">
<!--
function validateEmail(emailStr) {
var emailPat=/^(.+)@(.+)$/
var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
var validChars="\[^\\s" + specialChars + "\]"
var quotedUser="(\"[^\"]*\")"
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
var atom=validChars + '+'
var word="(" + atom + "|" + quotedUser + ")"
var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
var matchArray=emailStr.match(emailPat)
if (document.forms[0].email.value == "")
      {
      alert("\nThe e-mail field is blank.\n\nPlease enter your e-mail address.")
      document.forms[0].email.focus()
      return false
}
if (matchArray==null) {
  /* Too many/few @'s or something; basically, this address doesn't
     even fit the general mould of a valid e-mail address. */
	alert("_____________________________\n\nYour e-mail address seems incorrect. Please check the following\n\n1. Did you include the \"@\" and the \" . \" (dot)?\n2. Did you include anything other than a \"@\" & \" . \"?\n\nPlease re-enter your e-mail address.\n_____________________________")
	document.forms[0].email.select();
    document.forms[0].email.focus();
	return false
}
var user=matchArray[1]
var domain=matchArray[2]
if (user.match(userPat)==null) {
    // user is not valid
    alert("_____________________________\n\nThe username does not seem to be valid.\n\nPlease check the following:\n\n1. That you entered your e-mail address correctly.\n\nThank you.\n_____________________________")
    document.forms[0].email.select();
    document.forms[0].email.focus();
    return false
}
var IPArray=domain.match(ipDomainPat)
if (IPArray!=null) {
    // this is an IP address
	  for (var i=1;i<=4;i++) {
	    if (IPArray[i]>255) {
	        alert("_____________________________\n\nThe destination IP address you entered is invalid.\n\nPlease check your e-mail address and make the necessary corrections.\n\nThank you.\n_____________________________")
	        document.forms[0].email.select();
			document.forms[0].email.focus();
		return false
	    }
    }
    return true
}
var domainArray=domain.match(domainPat)
if (domainArray==null) {
	alert("_____________________________\n\nAre you making stuff up now?\n\nThe e-mail address portion of this form is not something to scoff at.\n\nI've been placed here in  your computer to make sure your information is valid. You\nneed to enter your real e-mail address or successfully fake me out to proceed.\n\nThank you.\n_____________________________")
	document.forms[0].email.select();
	document.forms[0].email.focus();
    return false
}
var atomPat=new RegExp(atom,"g")
var domArr=domain.match(atomPat)
var len=domArr.length
if (domArr[domArr.length-1].length<2 ||
    domArr[domArr.length-1].length>3) {
   // the address must end in a two letter or three letter word.
   alert("_____________________________\n\nYour e-mail address must end in a three-letter domain, or two letter country.\n\n_____________________________")
   document.forms[0].email.select();
   document.forms[0].email.focus();
   return false
}
if (len<2) {
   var errStr="_____________________________\n\nYour e-mail address is missing either a username, a hostname or a domain.\nAn e-mail address should include these three basic components:\n\n1. A username - (e.g., YOURNAME@yahoo.com, YOURNAME@mho.net)\n2. A host - (e.g., yourname@YAHOO.com, yourname@MHO.net)\n3. A domain - (e.g., yourname@yahoo.COM, yourname@mho.NET)\n\nPlease make the necessary corrections and press \"Send\".\n-- Thank you, The unforgiving script validating this e-mail field.\n\n_____________________________"
   alert(errStr)
   document.forms[0].email.select();
   document.forms[0].email.focus();
   return false
}
return true;
}

function rUSure() {
	if (confirm("Are you sure you want to delete all of the information you have entered?")) 
		{
		document.forms[0].reset();
		
}	else	{

			}
}
//-->
</script>
<script src="../jscripts/jquery-1.7.1.js" type="text/javascript" language="javascript"></script>
<script src="../jscripts/defaultFocusText.js" type="text/javascript"></script>
</head>
<body>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="resumeCoverNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/resumeCoverNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="resumeResumeNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/resumeResumeNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="resumePrintNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/resumePrintNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="resumeContactNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/resumeContactNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="resumeHomeNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/resumeHomeNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>

<div id="dhtmltooltip"></div>
<script type="text/javascript">
var offsetxpoint=1 //Customize x offset of tooltip
var offsetypoint=-33 //Customize y offset of tooltip
var ie=document.all
var ns6=document.getElementById && !document.all
var enabletip=false
if (ie||ns6)
var tipobj=document.all? document.all["dhtmltooltip"] : document.getElementById? document.getElementById("dhtmltooltip") : ""

function ietruebody(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function ddrivetip(thetext, thecolor, thewidth){
if (ns6||ie){
if (typeof thewidth!="undefined") tipobj.style.width=thewidth+"px"
if (typeof thecolor!="undefined" && thecolor!="") tipobj.style.backgroundColor=thecolor
tipobj.innerHTML=thetext
enabletip=true
return false
}
}

function positiontip(e){
if (enabletip){
var curX=(ns6)?e.pageX : event.clientX+ietruebody().scrollLeft;
var curY=(ns6)?e.pageY : event.clientY+ietruebody().scrollTop;
//Find out how close the mouse is to the corner of the window
var rightedge=ie&&!window.opera? ietruebody().clientWidth-event.clientX-offsetxpoint : window.innerWidth-e.clientX-offsetxpoint-20
var bottomedge=ie&&!window.opera? ietruebody().clientHeight-event.clientY-offsetypoint : window.innerHeight-e.clientY-offsetypoint-20

var leftedge=(offsetxpoint<0)? offsetxpoint*(-1) : -1000

//if the horizontal distance isn't enough to accomodate the width of the context menu
if (rightedge<tipobj.offsetWidth)
//move the horizontal position of the menu to the left by it's width
tipobj.style.left=ie? ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px" : window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
else if (curX<leftedge)
tipobj.style.left="5px"
else
//position the horizontal position of the menu where the mouse is positioned
tipobj.style.left=curX+offsetxpoint+"px"

//same concept with the vertical position
if (bottomedge<tipobj.offsetHeight)
tipobj.style.top=ie? ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px" : window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px"
else
tipobj.style.top=curY+offsetypoint+"px"
tipobj.style.visibility="visible"
}
}

function hideddrivetip(){
if (ns6||ie){
enabletip=false
tipobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
tipobj.style.width=''
}
}

document.onmousemove=positiontip
</script>

<div id="wrapper">
  <div id="leftShadow"></div>
  <div id="parchmentBodyResume">
  
    <div id="resumeHeader">
        <center>
          <span class="myName">Robert H. Means</span><br />
			30623 Sun Creek Drive, Evergreen, CO 80439<br />
            720.319.8316 | <a href="contact.htm" class="textNav">robert@robertmeans.com</a><br />
            <img src="images/spacer.gif" border="0" width="1" height="15" /><br />
            <img src="images/graySpacer.gif" border="0" width="650" height="2" /><br />
            <img src="images/spacer.gif" border="0" width="1" height="15" /><br />
          <span class="heading01">Website Solutions</span>
        </center>
        <p><span class="heading02">Overview</span><span class="heading03">:</span> <em>The following is a sample of Website projects that demonstrate creative organizational approaches and practical features and showcase a variety of solutions available by way of the ubiquitous Web browser. </em> <a href="#" class="textMO" onmouseover="mouseover1()" onmouseout="mouseout1()" onClick="return false;">At a glance</a>:</p>
     </div> <!-- resumeHeader end -->     

        <div id="topLeftBox">
          <span class="heading02AtAGlance">What's here</span>
  	      <ul>
    <li><a href="#" class="textMO" onMouseover="ddrivetip('Interact with your visitors','#fffff0', 190)"; onMouseout="hideddrivetip()" onClick="return false;">PHP</a></li>
    <li><a href="#" class="textMO" onMouseover="ddrivetip('Database management','#fffff0', 160)"; onMouseout="hideddrivetip()" onClick="return false;">mySQL</a></li>
    <li><a href="#" class="textMO" onMouseover="ddrivetip('Image galleries, event handling and more...','#fffff0', 308)"; onMouseout="hideddrivetip()" onClick="return false;">jQuery</a></li>
        <li><a href="#" class="textMO" onMouseover="ddrivetip('What CAN&acute;T you do with JavaScript?','#fffff0', 255)"; onMouseout="hideddrivetip()" onClick="return false;">JavaScript</a></li>
    <li><a href="#" class="textMO" onMouseover="ddrivetip('Industry standards ensures a stable environment','#fffff0', 340)"; onMouseout="hideddrivetip()" onClick="return false;">CSS3/HTML5</a></li>
    <li><a href="#" class="textMO" onMouseover="ddrivetip('More efficient/robust CSS','#fffff0', 210)"; onMouseout="hideddrivetip()" onClick="return false;">Sass</a></li>
    <li><a href="#" class="textMO" onMouseover="ddrivetip('Sass to CSS magic','#fffff0', 130)"; onMouseout="hideddrivetip()" onClick="return false;">Compass</a></li>
    </ul>
        </div> <!-- topLeftBox end -->
        
        <div id="topLeftVertLine"><img src="images/spacer.gif" border="0" width="1" height="6" /><br /><img src="images/graySpacer.gif" border="0" width="2" height="170" /></div>
        <div id="professionalSummary">
          <p>Most of the projects you will find here I designed in Photoshop and built using Dreamweaver. Lately I have delved into <a href="../joomla" class="textNav">Joomla!</a> and <a href="../wordpress" class="textNav">WordPress</a> as they continue to grow in popularity. These <a href="#" class="textMO" onMouseover="ddrivetip('Content Management System','#fffff0', 210)"; onMouseout="hideddrivetip()" onClick="return false;">CMS</a> publishing platforms offer a variety of tools along with an intuitive <a href="#" class="textMO" onMouseover="ddrivetip('User Interface','#fffff0', 110)"; onMouseout="hideddrivetip()" onClick="return false;">UI</a> and an editing environment that virtually anyone can manage. Even these  CMS options can be enhanced by someone familiar with the programming that wires them together.</p>
          <p>The video projects are edited using Premiere.</p>
          <div id="notableProjects"><img src="images/bullet01.png" width="12" height="12" /><img src="images/spacer.gif" border="0" width="9" height="1" />Noteworthy projects  include:<img src="images/spacer.gif" border="0" width="15" height="1" /><a href="../fhl" title="Forest Heights Lodge" target="_blank" class="textNav">Forest Heights Lodge</a> | <a href="../acts" title="Acts Church" target="_blank" class="textNav">Acts Church</a> | <a href="http://www.satillainc.com" title="Satilla, Inc." target="_blank" class="textNav">Satilla, Inc.</a></div>
        </div> <!-- professionalSummary end -->
        
 <div id="resumeExperience"><center><img src="images/graySpacer.gif" border="0" width="842" height="1" /><br />
            <img src="images/spacer.gif" border="0" width="1" height="1" /><br />
            <span class="heading01">Project Pen</span><br /><img src="images/spacer.gif" border="0" width="1" height="1" /><br /><img src="images/graySpacer.gif" border="0" width="842" height="1" /><br /></center>
 
 
   <div id="resumeWebWrap">
     <div id="resumeWeb"><span class="heading01">Web Developer</span><br />
       <img src="images/graySpacer02.gif" border="0" width="252" height="1" /><br /><span class="heading02Titles">Outsource Contractor</span></div><!-- resumeWeb end -->
     <div id="resumeWebContent"><span class="heading01">&nbsp;</span><br />
     <ul>
     <li>Development of Website concepts and design for small businesses</li>
     <li>Skilled with incorporating complex styles and features within custom design</li></ul></div><!-- resumeWebContent end -->
   </div><!-- resumeWebWrap end -->
   
<div id="resumeTERRaceWrap">
  <div id="resumeTERRace"><span class="heading01">Team Evergreen Racing</span><br />
       <img src="images/graySpacer02.gif" border="0" width="252" height="1" /><br /><span class="heading02Titles">Race Director</span></div><!-- resumeTERRace end -->
       <div id="resumeTERRaceContent"><span class="heading01">&nbsp;</span><br />
         The Burn Mountain Bike Time Trial 2009 &amp; 2012<br />
         Volunteer endeavor sanctioned by USA Cycling
         <ul>
         <li>Responsible for the organization of event.</li>
         <li>Developed <a href="../theburn2012" title="The Burn Mountain Bike Time Trial" target="_blank" class="textNav">Website</a> and created content for the site.</li>
       <li>Created a training manual (<a href="http://www.robertmeans.com/theburn2012/ter_bod/_step-by-step/step-by-step_DG.htm" title="The Burn Director's Guide" target="_blank" class="textNav">Director&acute;s Guide</a>) for use in managing event in the future. Manual includes instruction for all aspects of event.</li>
       <li>Managed <a href="http://www.robertmeans.com/theburn2012/ter_bod/_financials/TheBurn2012_financials.htm" class="textNav">Finances</a> - each expense hyperlinks to exhaustive details.</li>
       <li>Designed promotional materials: <a href="http://www.robertmeans.com/theburn2012/ter_bod/_financials/_pdf/02.24.12_TheBurn2012_PromotionalCard.pdf" target="_blank" class="textNav">Cards</a>, <a href="http://www.robertmeans.com/theburn2012/ter_bod/_financials/_pdf/t-shirt.jpg" target="_blank" class="textNav">T-shirts</a>, <a href="http://www.robertmeans.com/theburn2012/ter_bod/_financials/_pdf/awardExample.jpg" target="_blank" class="textNav">Awards</a>, etc.</li>
       </ul>
       </div><!-- resumeTERRaceContent end -->
 </div><!-- resumeTERRaceWrap end -->

   <div id="lumberjackWrap">
     <div id="lumberjack"><span class="heading01">Lumberjack</span><br />
     <img src="images/graySpacer02.gif" border="0" width="252" height="1" /><br />
     <span class="heading02Titles">Evergreen, Colorado</span></div><!-- lumberjack end -->
     <div id="lumberjackContent"><span class="heading01">&nbsp;</span><br />Haven&acute;t used our heat in over 2 years - and counting.
     <ul>
     <li>I do not wear women's clothing and/or hang around in bars: <a href="http://www.youtube.com/watch?v=5Q_akWyekoY&amp;feature=plcp" target="_blank" class="textNav">Video 1</a></li>
     <li>Not sure if this is suitable for the whole family but I had fun making it: <a href="http://www.youtube.com/watch?v=rFzUNkrQknw" target="_blank" class="textNav">Video 2</a></li>
     </ul></div><!-- lumberjackContent end -->
   </div><!-- lumberjackWrap end --> 
   
   <div id="dadWrap">
     <div id="dad"><span class="heading01">Captain Dad, Domestic Hero</span><br />
     <img src="images/graySpacer02.gif" border="0" width="252" height="1" /><br />
     <span class="heading02Titles">Professional Rug Rat Wrangler</span></div><!-- dad end -->
     <div id="dadContent"><span class="heading01">&nbsp;</span><br />Exponentially aging yet somehow enjoying it.
     <ul>
     <li>Doting Dad not afraid to paint fingernails or otherwise fawn over daughter: <a href="http://www.youtube.com/watch?v=dH-1JZ2jKSo&amp;feature=plcp" target="_blank" class="textNav">Video 3</a></li>
     <li>Super Son Sharp Shooter: <a href="http://www.youtube.com/watch?v=rFumHZChV6U" target="_blank" class="textNav">Video 4</a></li>
     <li>Christmas 2012: <a href="http://www.youtube.com/watch?v=Z8WOMtcydSE" target="_blank" class="textNav">Video 5</a></li>
     </ul>
     </div><!-- dadContent end -->
   </div><!-- dadWrap end -->     
 </div><!-- resumeExperience end -->        
        

            
    <div id="resumeReferences"><center><img src="images/graySpacer.gif" border="0" width="842" height="1" /><br />
            <img src="images/spacer.gif" border="0" width="1" height="1" /><br />
            <span class="heading01">Quick Contact</span><br /><img src="images/spacer.gif" border="0" width="1" height="1" /><br /><img src="images/graySpacer.gif" border="0" width="842" height="1" /><br /></center>
            <img src="images/spacer.gif" border="0" width="1" height="20" /><br />
            
<form action="formmail_references.php" method="post" onSubmit="return validateEmail(document.forms[0].email.value);">
<table width="842px">
	<tr> 
    	<td width="842" valign="top" align="center">
            Hey Robert, This is &nbsp;&nbsp;<input type="text" class="default-value" name="name" value=" Your name" maxlength="30" size="20" tabindex="1" />&nbsp;&nbsp;at&nbsp;&nbsp;<input type="text" class="default-value" name="email" value=" Your e-mail address" maxlength="30" size="20" tabindex="2" />&nbsp;&nbsp;Let&acute;s talk!<img src="images/spacer.gif" border="0" width="10" height="1" /><input name="submit" type="submit" value="Send" onClick='forms[0].submit.value="Hire Robert!";return true' onmouseout='forms[0].submit.value="Send";return true' tabindex="3" />
            <img src="images/spacer.gif" border="0" width="5" height="1" /> <span class="smallTxt"> Or - <a href="contact.htm" class="textNav">send a more detailed message</a></span></td>
    </tr>   
</table></form>      
    </div> <!-- resumeReferences end -->           
            
  </div> <!-- parchmentBodyResume end -->
  <div id="rightShadow"></div>
  <div id="bottomShadow"></div>
</div> <!-- wrapper end -->
</body>
</html>

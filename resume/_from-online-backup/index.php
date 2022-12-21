<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<META Http-Equiv="Cache-Control" Content="no-cache">
<META Http-Equiv="Pragma" Content="no-cache">
<META Http-Equiv="Expires" Content="0">
<title>Robert Means, Conspectus Introduction</title>
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
if (screen.width <= 699) {
if (document.referrer.indexOf("mobile.htm") == -1){
document.location = 'mobile.htm';
}}
-->
</script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38678515-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>

<body>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="coverNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/coverNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="resumeNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/resumeNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="printNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/printNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="contactNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/contactNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>
<script type="text/javascript">var MenuLinkedBy="AllWebMenus [4]",awmMenuName="homeNav",awmBN="902";</script><script charset="UTF-8" src="menuScripts/homeNav.js" type="text/javascript"></script><script type="text/javascript">awmBuildMenu();</script>

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
  
  <div id="parchmentBody">
 
    <div id="headerName">Robert H. Means</div>
    <div id="headerContact">720.319.8316 | <a href="contact.htm" class="textNav">robert@robertmeans.com</a></div>
    
    <div id="bodyDate">
	  <script language="JavaScript">
            <!--
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
            document.write("" +today+ "");
            -->
       </script> 
    </div>
    <div id="bodyContent">
   	  <p>Hello,</p>
      <p><img src="images/spacer.gif" border="0" width="50" height="1" />Welcome to my playground. This area is designed to organize a selection of online projects for reference. </p>
      
      <p><img src="images/spacer.gif" border="0" width="50" height="1" />I have to admit, I'm not comfortable using the word &quot;conspectus&quot; but the following's neither a résumé nor a portfolio although it looks like a résumé and acts like a portfolio. I'm beginning to think it's more of an excuse to use these backgrounds together.</p>

      <p><img src="images/spacer.gif" border="0" width="50" height="1" />If you find anything here that inspires you to involve me in an online project then it has served its purpose. Please poke through the links (<a href="#" class="textNav" onMouseover="ddrivetip('This blue link won&acute;t take you anywhere.','#fffff0', 270)"; onMouseout="hideddrivetip()" onClick="return false;">blue underlined links</a> will take you somewhere, <a href="#" class="textMO" onMouseover="ddrivetip('This is mouseover information.','#fffff0', 210)"; onMouseout="hideddrivetip()" onClick="return false;">non-underlined links</a> will only provide mouseover information) and  <a href="contact.htm" class="textNav">let me know</a> how I can help.</p>      
    </div>
    <div id="bodySignature">
    Cordially,<br />
    <img src="images/signature.png" width="320" height="69" /><br />
    Robert H. Means<br />
    </div>
    <div id="bodyContentBtm">
      <p>Enclosure: <a href="conspectus.php" class="textNav">Conspectus</a></p>

    </div>
  </div>
  <div id="rightShadow"></div>
  <div id="bottomShadow"></div>
</div>
</body>
</html>

imageX01='plus';
imageX02='plus';
imageX03='plus';
// imageX04='plusEven';
// imageX05='plus';


function toggleOdd(ee){
imgX="imagePM"+ee;
divX="div"+ee;
imageX="imageX"+ee;
divLink="divHref"+ee;
imageXval=eval("imageX"+ee);
element = document.getElementById(divX).style;
if (element.display=='none') {element.display='block';}
else {element.display='none';}
if (imageXval=='plus') {document.getElementById(imgX).src='_images/minus2.gif';eval("imageX"+ee+"='minus';");document.getElementById(divLink).title='Hide Content';}
else {document.getElementById(imgX).src='_images/plus.gif';eval("imageX"+ee+"='plus';");document.getElementById(divLink).title='Show Content';}
}

function toggleEven(ee){
imgX="imagePM"+ee;
divX="div"+ee;
imageX="imageX"+ee;
divLink="divHref"+ee;
imageXval=eval("imageX"+ee);
element = document.getElementById(divX).style;
if (element.display=='none') {element.display='block';}
else {element.display='none';}
if (imageXval=='plus') {document.getElementById(imgX).src='_images/minus2.gif';eval("imageX"+ee+"='minus';");document.getElementById(divLink).title='Hide Content';}
else {document.getElementById(imgX).src='_images/plus.gif';eval("imageX"+ee+"='plus';");document.getElementById(divLink).title='Show Content';}
}
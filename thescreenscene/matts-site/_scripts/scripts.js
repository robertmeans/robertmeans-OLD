function validateEmail(a){var b=/^(.+)@(.+)$/,c='\\(\\)<>@,;:\\\\\\"\\.\\[\\]',d="[^\\s"+c+"]",e='("[^"]*")',f=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/,g=d+"+",h="("+g+"|"+e+")",i=new RegExp("^"+h+"(\\."+h+")*$"),j=new RegExp("^"+g+"(\\."+g+")*$"),k=a.match(b);if(""==document.forms[0].email.value)return alert("\nThe e-mail field is blank.\n\nPlease enter your e-mail address."),document.forms[0].email.focus(),!1;if(null==k)return alert('_____________________________\n\nYour e-mail address seems incorrect. Please check the following\n\n1. Did you include the "@" and the " . " (dot)?\n2. Did you include anything other than a "@" & " . "?\n\nPlease re-enter your e-mail address.\n_____________________________'),document.forms[0].email.select(),document.forms[0].email.focus(),!1;var l=k[1],m=k[2];if(null==l.match(i))return alert("_____________________________\n\nThe username does not seem to be valid.\n\nPlease check the following:\n\n1. That you entered your e-mail address correctly.\n\nThank you.\n_____________________________"),document.forms[0].email.select(),document.forms[0].email.focus(),!1;var n=m.match(f);if(null!=n){for(var o=1;4>=o;o++)if(n[o]>255)return alert("_____________________________\n\nThe destination IP address you entered is invalid.\n\nPlease check your e-mail address and make the necessary corrections.\n\nThank you.\n_____________________________"),document.forms[0].email.select(),document.forms[0].email.focus(),!1;return!0}var p=m.match(j);if(null==p)return alert("_____________________________\n\nAre you making stuff up now?\n\nThe e-mail address portion of this form is not something to scoff at.\n\nI've been placed here in  your computer to make sure your information is valid. You\nneed to enter your real e-mail address or successfully fake me out to proceed.\n\nThank you.\n_____________________________"),document.forms[0].email.select(),document.forms[0].email.focus(),!1;var q=new RegExp(g,"g"),r=m.match(q),s=r.length;if(r[r.length-1].length<2||r[r.length-1].length>3)return alert("_____________________________\n\nYour e-mail address must end in a three-letter domain, or two letter country.\n\n_____________________________"),document.forms[0].email.select(),document.forms[0].email.focus(),!1;if(2>s){var t='_____________________________\n\nYour e-mail address is missing either a username, a hostname or a domain.\nAn e-mail address should include these three basic components:\n\n1. A username - (e.g., YOURNAME@yahoo.com, YOURNAME@mho.net)\n2. A host - (e.g., yourname@YAHOO.com, yourname@MHO.net)\n3. A domain - (e.g., yourname@yahoo.COM, yourname@mho.NET)\n\nPlease make the necessary corrections and press "Send".\n-- Thank you, The unforgiving script validating this e-mail field.\n\n_____________________________';return alert(t),document.forms[0].email.select(),document.forms[0].email.focus(),!1}return!0}function validateForm(a){var b=document.getElementById(a);return 0==b.checked?(alert("Please agree to conditions before submitting message."),document.getElementById("agreeBox").style.backgroundColor="#ffffff",document.getElementById("agreeBox").style.color="#ff0000",document.getElementById("agreeBox").style.border="1px solid #ff0000",!1):!0}function rUSure(){confirm("Are you sure you want to delete all of the information you have entered?")&&(document.forms[0].reset(),document.getElementById("agreeBox").style.backgroundColor="#666",document.getElementById("agreeBox").style.color="#fff",document.getElementById("agreeBox").style.border="1px solid transparent",document.forms[0].name.focus())}function myFunction(){var a=confirm("The following are answers to frequently asked hypothetical questions. Legal questions are complex and fact specific. Thus, the answers to these questions do not address to your specific case and are not legal advice. By clicking OK you acknowledge that the questions answered do not create an attorney client relationship between the reader and The Law Firm of Matthew Beach, LLC.");return 1!=a?!1:void(document.location="faq_7b3677ed17a0b68707c2d47aba7cf270.php")}function sticky_relocate(){var a=$(window).scrollTop(),b=$("#sticky-anchor").offset().top;a>b?$("#sticky").addClass("stick"):$("#sticky").removeClass("stick")}$(document).ready(function(){var a=$(".back-to-top");a.on("click",function(a){$("html, body").animate({scrollTop:0},500),a.preventDefault()}),$(window).on("scroll",function(){var b=$(this),c=b.height(),d=b.scrollTop();d>.4*c?a.is(":visible")||a.show():a.hide()})}),$(document).ready(function(){$(".tabs .tab-links a").on("click",function(a){var b=$(this).attr("href");$(".tabs "+b).slideDown(400).siblings().slideUp(400),$(this).parent("li").addClass("active").siblings().removeClass("active"),a.preventDefault()})}),$(function(){$(window).scroll(sticky_relocate),sticky_relocate()});
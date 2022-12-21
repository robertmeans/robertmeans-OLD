// load clock based on window size
if (document.documentElement.clientWidth < 600) { 
document.write('<scr'+'ipt type="text/javascript" src="_scripts/coolclock-sm.js?<?php echo time(); ?>"></scr'+'ipt>');
} else if (document.documentElement.clientWidth < 860) { 
document.write('<scr'+'ipt type="text/javascript" src="_scripts/coolclock-med.js?<?php echo time(); ?>"></scr'+'ipt>');
} else { 
document.write('<scr'+'ipt type="text/javascript" src="_scripts/coolclock-lg.js?<?php echo time(); ?>"></scr'+'ipt>');
}
// reload clock if window is resized
$(window).on('resize', function() {
if (window.matchMedia("only screen and (max-width: 600px)").matches) {
    $.getScript('_scripts/coolclock-sm.js?<?php echo time(); ?>');
  } else if (window.matchMedia("only screen and (max-width: 860px)").matches) {
    $.getScript('_scripts/coolclock-med.js?<?php echo time(); ?>');
	} else {
    $.getScript('_scripts/coolclock-lg.js?<?php echo time(); ?>');
	}
});
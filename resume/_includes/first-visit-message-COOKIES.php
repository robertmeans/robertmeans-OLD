<?php if ($first_visit): ?>
<div id="bobs-message-first-visit">
	<div class="inside-message-first">
			<p class="eyecon">FIRST VISIT - Please note:<br />
				<br />
			<i class="far fa-eye"></i> <i class="far fa-hand-point-left"></i> Where you see this icon (eye-con, har) click on it for additional information.</p>	

	</div>
	<div class="close-cc">
		<a id="open-close" class="cc-x" onClick="hideInitialBobsMessage(); return false;" href="#"><i class="fas fa-chevron-circle-up"></i></a>
	</div><!-- #close-cc -->
</div><!-- #bobs-message-first-visit -->
<?php endif; ?>



<?php /*  if ((!$first_visit) && ($countVisit <= 1)): ?>
<div id="bobs-message">
	<div class="inside-message">
			<p><i class="far fa-eye"></i> first visit still, just browsing</p>	

	</div>
	<div class="close-cc">
		<a id="open-close" class="cc-x" onClick="hideBobsMessage(); return false;" href="#"><i class="fas fa-chevron-circle-down"></i></a>
	</div><!-- #close-cc -->
</div><!-- #bobs-message -->
<?php endif; */ ?>





<?php if (!$first_visit): ?>
<div id="bobs-message">
	<div class="inside-message">

			<p class="eyecon"><i class="far fa-eye"></i> <i class="far fa-hand-point-left"></i> Where you see this icon (eye-con, har) click on it for additional information.</p>	

	</div>
	<div class="close-cc">
		<a id="open-close" class="cc-x" onClick="hideBobsMessage(); return false;" href="#"><i class="fas fa-chevron-circle-down"></i></a>
	</div><!-- #close-cc -->
</div><!-- #bobs-message -->
<?php endif; ?>
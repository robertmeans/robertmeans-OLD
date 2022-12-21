<?php $layout_context = "contact"; ?>
<?php require('_includes/head.php'); ?>
<body>
<?php require('_includes/first-visit-message.php'); ?>
	<div id="cv">
		<?php require('_includes/nav.php'); ?>
		<?php require('_includes/cv-header.php'); ?>
		<div id="contact-body">
			<p class="intro">I am quick to reply unless I am out of pocket (*mountaineering enthusiast*) in which case it is safe to presume your message will inspire immediate apologies upon return.</p>

			<div class="form-container">
				<div class="left-side">
					<img src="_images/robert-means.png"><span class="bob">*Hair may vary</span>
				</div>
				<div class="right-side">
					<?php require('_includes/contact-form-processing.php'); ?>
				</div>
			</div>
		</div><!-- #contact-body -->
		<div id="ornate-footer">
			<img src="_images/ornate-footer.png">
		</div>	
	</div><!-- #cv -->
	<div class="cf">&nbsp;</div>

<?php require('_includes/footer.php'); ?>	
</body>
</html>
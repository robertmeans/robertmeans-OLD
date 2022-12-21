<?php $layout_context = "cover"; ?>
<?php require('_includes/head.php'); ?>
<body>
<?php require('_includes/first-visit-message.php'); ?>
	<div id="cv">
		<?php require('_includes/nav.php'); ?>
		<?php require('_includes/cv-header.php'); ?>
		<div id="cover-body">
			<p class="date"><?php echo date("l, F d, Y") ?></p>
			<!-- <p class="covid">*Coronavirus free!*</p> -->
			<p class="open">Hello,</p>
			<p class="body-copy">In full disclosure, this snazzy presentation is deliberately intended as a decoy. It aims to spotlight the pride I invest in my work while gracefully masking a dearth of traditional résumé fodder.</p>
			<p class="body-copy">Now that we're off to an honest start, I am wide open to entertaining virtually <i>any</i> business ideas. Please do not let a history of Web development typecast my skill set. <!-- The aptitude required for this field of work combined with personality, motivation and spirit translates into a broad range of potential. --> &nbsp;<button id="button-box-01" class="click-box-01"><i class="far fa-eye"></i></button></p>

			<div id="box-01">
				<p>A perfect fit would utilize communication and organizational skills and include outside travel. Open to new industry including sales opportunities. [ Pandemic Addendum: This can be temporarily put on hold. &nbsp;<i class="far fa-smile"></i> ]</p>

				<p>Also happy to discuss small ideas or full-scale solutions to deploy online or on your local server.</p>

				<!-- <p>An imperfect fit would be a phone monkey, dialing for dollars chained to a desk all day.</p> -->
			</div>
			<p class="small-gone">&nbsp;</p>
			<p class="small-gone">Please see the square icons on the right for navigating.</p>
			<p class="body-copy">Let's talk!</p>
			<div id="signature">
				<img src="_images/signature.png" alt="Robert H. Means">
				<p>Cordially,</p>
				<p class="name">Robert H. Means</p>
			</div>
		</div>
		<div id="ornate-footer">
			<img src="_images/ornate-footer.png">
		</div>	
	</div><!-- #cv -->
	<div class="cf">&nbsp;</div>

<?php require('_includes/footer.php'); ?>	
</body>
</html>
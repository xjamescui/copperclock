<div>
	<script
		type="text/javascript"
		src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
	></script>
	<!-- https://developer.apple.com/documentation/sign_in_with_apple/displaying_sign_in_with_apple_buttons_on_the_web -->
	<div
		id="appleid-signin"
		data-color="black"
		data-border="true"
		data-height="64"
		data-type="sign in"
	></div>
	<script type="text/javascript">
		AppleID.auth.init({
			clientId: '[CLIENT_ID]',
			scope: '[SCOPES]',
			redirectURI: '[REDIRECT_URI]',
			state: '[STATE]',
			nonce: '[NONCE]',
			usePopup: true
		});
	</script>
</div>

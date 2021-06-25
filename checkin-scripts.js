//remove stock stylesheet
$('link[rel=stylesheet][href*="css/site.css"]').remove();

// if first element isn't the breadcrumb, move it to under the breadcrumb.
// check if the first element is the breadcrumb (= 0 if not)
var firstElement = $(".body-layout div:not([style*='display: none']").eq(0);
if(firstElement.find("#breadcrumbs").length == 0) {
	//first element isn't the breadcrumb.  move it to under the breadcrumb.
	firstElement.insertAfter($("#breadcrumbs").parent());
}


var breadcrumbHtml = `
<nav id="breadcrumbs" role="navigation" aria-label="breadcrumb">
	<div class="container-fluid">
		<ol class="breadcrumb">
			<li><a href="https://www.toronto.ca/" data-wt_params="WT.z_click_from=Breadcrumb;;WT.z_cat=Home"><span class="bc_home_link">City of Toronto</span></a></li>
			&nbsp;
			<li><a href="https://www.toronto.ca/getting-married/">Marriage Services</a></li>
			&nbsp;
			<li><a href="header-footer-design.step0.html">Book a Marriage Licence Appointment</a></li>
			&nbsp;
			<li class="active">Step 1 of 3 – Complete an Online Marriage Licence Application</li>
		</ol>
	</div>
</nav>`;
$("header").eq(0).append(breadcrumbHtml);

var footerHtml = `
<footer id="footer" role="contentinfo">
	<div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-8 col-md-9 col-lg-8">
					<nav id="footer-nav" aria-label="Page Footer">
						<a href="https://www.toronto.ca/home/jobs/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-group.svg" alt="">Jobs at the City</a>
						&nbsp;<a href="https://www.toronto.ca/home/media-room/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-chat.svg" alt="">Media Room</a>
						&nbsp;<a href="https://www.toronto.ca/home/contact-us/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-mobile.svg" alt="">Contact Us</a>
						&nbsp;<a href="https://www.toronto.ca/home/311-toronto-at-your-service/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-311.svg" alt="3-1-1 Toronto"></a>
						&nbsp;<a href="https://www.toronto.ca/home/translate/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-flag.svg" alt="">Translate</a>
					</nav>
				</div>
				<div class="col-sm-4 col-md-3 col-lg-4">
					<nav id="social-nav">
						<div id="f-connect" class="col-lg-4 col-md-6">Connect:</div>
						<div id="f-icons-1" class="col-lg-4 col-md-6">
							<a href="https://twitter.com/cityoftoronto" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-twitter.svg" alt="Twitter"></a>
							&nbsp;<a href="https://www.facebook.com/cityofto/" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-facebook.svg" alt="Facebook"></a>
							&nbsp;<a href="https://www.instagram.com/cityofto/" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-instagram.svg" alt="Instagram"></a>
						</div>
						<div id="f-icons-2" class="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-6">
							<a href="https://youtube.com/thecityoftoronto" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-youtube.svg" alt="Youtube"></a>
							<a href="https://www.linkedin.com/company/city-of-toronto" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-linkedin.svg" alt="LinkedIn"></a>
							<a href="https://www.toronto.ca/home/social-media/" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-blank.svg" alt=""></a>
							<div id="view-all-icon-text">VIEW ALL<span class="sr-only">TORONTO.CA SOCIAL MEDIA ACCOUNTS</span></div>
						</div>
					</nav>
				</div>
			</div>
			<hr>
			<p>
				<a href="https://www.toronto.ca/home/copyright-information/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">© City of Toronto 1998 - 2021</a>
				&nbsp;<span class="separator">|</span>&nbsp;<a href="https://www.toronto.ca/home/privacy/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">Privacy</a>
				&nbsp;<span class="separator">|</span>&nbsp;<a href="https://www.toronto.ca/city-government/accessibility-human-rights/accessibility-at-the-city-of-toronto/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">Accessibility at the City of Toronto</a>
			</p>
		</div>
	</div>
</footer>`;

$("footer").replaceWith(footerHtml);

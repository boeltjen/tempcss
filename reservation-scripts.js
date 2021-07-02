//remove stock stylesheet
$('link[rel=stylesheet][href*="bundle.css"]').remove();

// if first element isn't the breadcrumb, move it to under the breadcrumb.
// check if the first element is the breadcrumb (= 0 if not)
/*var firstElement = $(".body-layout div:not([style*='display: none']").eq(0);
if(firstElement.find("#breadcrumbs").length == 0) {
	//first element isn't the breadcrumb.  move it to under the breadcrumb.
	firstElement.insertAfter($("#breadcrumbs").parent());
}*/


//find the breadcrumbs and place it under the header
var breadcrumbElement = $("#breadcrumbs").parent();
breadcrumbElement.insertAfter($("header"));

$(".button, .mdc-button").addClass("btn btn-primary");


if($("div.date.one-queue").length > 0) {
	// hide appointment times before rewriting in <cotui-accordion>
	$("div.date.one-queue").css("display","none");

	var appointmentDateSections = [];
	$("div.date.one-queue").each(function() {
		var tempDateTitle = $(this).find("a.title").eq(0).text().trim();
		var tempDateTitleId = tempDateTitle.replace(/[^a-zA-Z0-9]/g, '');
		var tempDateTitleHeaderId = tempDateTitleId+"-header";
		var tempDateHeaderEle = $("<h2/>")
			.attr({
			  "data-type":"toggle",
			  "aria-controls":tempDateTitleId,
			  "aria-expanded":"false"
			})
			.text(tempDateTitle);

		var tempHiddenTitle = $("<div/>")
			.attr({
			  "id": tempDateTitleHeaderId,
			  "class":"hidden"
			})
			.text(tempDateTitle);


		var tempInnerDiv = $("<div/>")
			.attr({
			  "id":tempDateTitleId,
			})
			.append(tempHiddenTitle);


		$(this).find("ul.times-list li").each(function() {
			if($(this).hasClass("hour-line")) {
				tempInnerDiv.append("<br/>");
			} else {
				var tempLink = $(this).children("a");
				tempLink.attr("aria-describedby",tempDateTitleHeaderId);
				tempInnerDiv.append(
					$("<div/>").addClass("time ampm-format").append(tempLink)
				);
			}
		});
		var tempSectionEle = $("<section/>").append(tempDateHeaderEle).append(tempInnerDiv);

		appointmentDateSections.push(tempSectionEle);


	});

	var accordionEle = $("<cotui-accordion/>")
		.attr({
		  "id": "times-list-accordion",
		  "class": "cot-accordion",
		  "data-title": "Select Appointment Time",
		  "data-level": "2",
		  "data-button-expand": "btn btn-link",
		  "data-button-collapse": "btn btn-link",
		  "data-allow-multiple": true
		})
		.append(appointmentDateSections);

	$("div.date.one-queue").remove();

	$("#dateTimesContainer").append(accordionEle);
}

var footerHtml = `
<br/><br/>
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

$("footer").eq(0).replaceWith(footerHtml);

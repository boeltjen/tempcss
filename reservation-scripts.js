// hide appointment times before rewriting in <cotui-accordion> if timelist is present
if($("div.date.one-queue").length > 0)
	$("div.date.one-queue").css("display","none");



var cframeHeaderHtml = 									
'	<a id="skippy" class="sr-only sr-only-focusable" href="#main"><span>Skip to content</span></a>'
+'	<img class="visible-print-block" src="https://www.toronto.ca/wp-content/themes/cot/img/logo-print.svg" width="175" height="53" alt="City of Toronto">'
+'	<!-- <div id="global-alertbox" w3-include-html="https://www.toronto.ca/cot/globalalert/"></div> -->'
+'	<header id="header" role="banner">'
+'	<div class="container-fluid">'
+'	<div id="header-left">'
+'		<div id="logo">'
+'					<a href="https://www.toronto.ca/" data-wt_params="WT.z_click_from=header;;WT.z_cat=Home">'
+'			<img src="https://www.toronto.ca/wp-content/themes/cot/img/logo.svg" width="225" height="70" alt="City of Toronto">'
+'			</a>'
+'				</div>'
+'		<button id="want-to-mobile" class="btn btn-warning" data-target="#want-to-modal" data-toggle="modal">I want to...</button>'
+'		<button id="nav-trigger" class="btn btn-default visible-xs visible-sm" aria-expanded="false" aria-haspopup="true"><span>Navigation Menu</span></button>'
+'	</div>'
+'		<div id="header-right">'
+'			<div id="top-bar">'
+'<!--				<form id="siteSearch" class="form-inline" action="--><!--searchblox/servlet/SearchServlet" method="get" role="search" name="s">-->'
+'			  '
+'				<form id="siteSearch" class="form-inline" action="https://find.toronto.ca/searchblox/servlet/SearchServlet" method="get" role="search" name="s">'
+'					<div role="search" aria-label="site search">'
+'						<label class="sr-only" for="query">Search</label>'
+'						<input id="query" name="query" class="form-control" placeholder="Search" type="text">'
+'						<button id="query-search" type="submit" class="btn btn-default"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-search.svg" alt="Search"></button>'
+'						<input type="hidden" name="cname" value="www1">'
+'					</div>'
+'				</form>'
+'				<button id="text-increase" class="btn btn-default hidden-sm hidden-xs" title="Increase text size"><span class="sr-only">Increase text size</span><i id="i-text-increase" aria-hidden="true">A+</i></button>'
+'				<button id="text-decrease" class="btn btn-default hidden-sm hidden-xs" title="Decrease text size"><span class="sr-only">Decrease text size</span><i id="i-text-decrease" aria-hidden="true">A-</i></button>'
+'				<button id="want-to" class="btn btn-warning" data-target="#want-to-modal" data-toggle="modal">I want to...</button>'
+'			</div>'
+'			<div w3-include-html="https://boeltjen.github.io/tempcss/globalnav-header.html" id="main-nav-container"><a href="https://boeltjen.github.io/tempcss/globalnav-header.html"></a></div>'
+'		</div>'
+'	</div>'
+'<!--startindex-->'
+'<!--stopindex-->'
+'            <nav id="breadcrumbs" aria-label="breadcrumb">'
+'            <div class="container-fluid">'
+'                <ol class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">'
+'                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.toronto.ca/" itemscope itemtype="http://schema.org/Thing" itemprop="item" data-wt_params="WT.z_click_from=Breadcrumb;;WT.z_cat=Home"><i class="glyphicon glyphicon-home"></i><span itemprop="name" class="bc_home_link">City of Toronto</span></a></li>'
+'                    '
+'                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="active"><span itemprop="name">Book an Appointment</span></li>'
+'                </ol>'
+'            </div>'
+'            </nav>'
+'        <!--startindex-->'
+'	</header>'
+'	'
+'	<!-- columned template -->'
+'	'
+'	<section id="main" class="content-page" role="main">'
+'		<div class="container-fluid">'
+'			<div id="cotHeaderTop" class="cotPlaceholder"></div>'
+'			<div class="page-header">'
+'			    <h1 id="torontopageheader">Book an Appointment</h1>'
+'			    <nav id="actions" aria-label="Page Actions">'
+'				<!--stopindex--> '
+'				<div id="sharebutton">'
+'				    <button id="shareit" class="btn btn-default" aria-haspopup="true" aria-expanded="false" aria-controls="sharebox" aria-label="share this page">Share</button> '
+'				    <div id="sharebox" class="sharebox" tabindex="-1" aria-labelledby="shareit">'
+'					<ul class="share-list">'
+'					    <li> <a target="shareit" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F" id="share-link-1"><img src="https://www.toronto.ca/wp-content/themes/cot/img/social_facebook.png" id="share-img-1" alt=""><span class="sr-only">Share to </span><span>Facebook</span></a> </li>'
+'					    <li> <a target="shareit" href="https://twitter.com/share?url=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F&amp;text=Step+1%3A+Apply+for+a+Marriage+Licence&amp;via=cityoftoronto" id="share-link-2"><img src="https://www.toronto.ca/wp-content/themes/cot/img/social_twitter.png" id="share-img-2" alt=""><span class="sr-only">Share to </span><span>Twitter</span></a> </li>'
+'					    <li> <a target="shareit" href="https://pinterest.com/pin/create/bookmarklet/?media=https://www.toronto.ca/wp-content/themes/cot/img/share_toronto_twitter.jpg&amp;url=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F&amp;description=Step+1%3A+Apply+for+a+Marriage+Licence" id="share-link-3"><img src="https://www.toronto.ca/wp-content/themes/cot/img/social_pinterest.png" id="share-img-4" alt=""><span class="sr-only">Share to </span><span>Pinterest</span></a> </li>'
+'					    <li> <a target="shareit" href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F&amp;title=Step+1%3A+Apply+for+a+Marriage+Licence" id="share-link-4"><img src="https://www.toronto.ca/wp-content/themes/cot/img/social_linkedin.png" id="share-img-5" alt=""><span class="sr-only">Share to </span><span>LinkedIn</span></a> </li>'
+'					</ul>'
+'				    </div>'
+'				</div>'
+'				<button id="print" class="btn btn-default" onclick="window.print();">Print</button> <!--startindex--> '
+'			    </nav>'
+'			</div>'
+'			<div id="cotHeaderBottom" class="cotPlaceholder"></div>'
+'			<div class="row">'
+'			    <div id="page-content" class="col-md-8 col-lg-9">'
+'				<div class="pagecontent" id="torontopagecontent">'
+'					<!-- insert booking content here -->'
+'				</div>'
+'			    </div>'
+'				<aside class="col-md-4 col-lg-3">'
+'				<div id="cotSidebarTop" class="cotPlaceholder"></div>'
+'				<div id="sidebar">'
+'					<!--stopindex--> '
+'					<div id="sidebarContact" class="list-group no-border">'
+'					<h4 class="list-group-item">Contact Information</h4>'
+'					<div class="list-group-item">'
+'						<p class="contact-information"><strong>North York Civic Centre</strong><br> 5100 Yonge Street<br> (south entrance off of North York Blvd.)<br> <strong>Telephone:</strong> 416-392-7036<br> </p>'
+'						<p class="contact-information"><strong>Email:</strong> <a href="mailto:marriage@toronto.ca">marriage@toronto.ca</a><br> </p>'
+'					</div>'
+'					</div>'
+'					<!--startindex--> '
+'				</div>'
+'				<div id="cotSidebarBottom" class="cotPlaceholder"></div>'
+'				</aside>'
+'			</div>'
+'		</div>'
+'	</section>'
;


var cframeFooterHtml = 
'	<!-- cotfooter here -->'
+''
+'	<div id="cotFooterAbove" class="cotPlaceholder"></div>'
+'	<footer id="footer" role="contentinfo">'
+'	<div id="cotFooterTop" class="cotPlaceholder"></div>'
+''
+'	<div w3-include-html="https://boeltjen.github.io/tempcss/globalnav-footer.html?fb=false">'
+'		<a href="https://boeltjen.github.io/tempcss/globalnav-footer.html?fb=false"></a>'
+'	</div>'
+''
+'	    <!--stopindex-->'
+'	    <a href="#header" id="return-to-top">'
+'				<img src="https://www.toronto.ca/wp-content/themes/cot/img/back-to-top-arrow.png" alt=""/>'
+'				<span class="return-to-top-tip">Back to Top</span>'
+'			</a>'
+'	    <!--startindex-->'
+'	<div id="cotFooterBottom" class="cotPlaceholder"></div>'
+'	</footer>'
+'	<div id="want-to-modal" class="modal fade" tabindex="-1" role="dialog">'
+'	    <div w3-include-html="https://boeltjen.github.io/tempcss/globalnav-iwantto.html">'
+'		<a href="https://boeltjen.github.io/tempcss/globalnav-iwantto.html"></a></div>'
+'	</div>'
+''
+'	<script src="https://www.toronto.ca/wp-content/themes/cot/js/jquery-migrate-3.0.1.min.js"></script>'
+'	<script src="https://www.toronto.ca/cot/jquery-additional-custom-js.js?ver=1.0.0"></script>'
+'	<script src="https://www.toronto.ca/wp-content/themes/cot/js/bootstrap.3.4.1.min.js"></script>'
+'	<script src="https://www.toronto.ca/wp-content/themes/cot/js/footer.js"></script>'
+'	<script>'
+'		//activate the w3-includes:'
+'		setTimeout(function() {'
+'			w3IncludeHTML(function () {'
+'				var scriptTag = document.createElement("script"), // create a script tag'
+'				firstScriptTag = document.getElementsByTagName("script")[0]; // find the first script tag in the document'
+'				scriptTag.src = "https://www.toronto.ca/wp-content/themes/cot/js/scripts.js";  // set the source of the script to your script'
+'				firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);'
+'			});'
+'		},500);'
+'	</script>'
;

//remove stock stylesheets
$('link[rel=stylesheet][href*="bundle.css"]').remove();

$('link[rel=stylesheet][href*="stackpath.bootstrapcdn.com"]').remove();
$('script[src*="stackpath.bootstrapcdn.com"]').remove();

//remove and replace favicons
faviconsHtml = 
'	<!-- Favicons -->'
+'	<link rel="apple-touch-icon" sizes="180x180" href="https://www.toronto.ca/wp-content/themes/cot/img/apple-touch-icon.png">'
+'	<link rel="icon" type="image/png" href="https://www.toronto.ca/wp-content/themes/cot/img/favicon-32x32.png" sizes="32x32">'
+'	<link rel="icon" type="image/png" href="https://www.toronto.ca/wp-content/themes/cot/img/favicon-16x16.png" sizes="16x16">'
+'	<link rel="mask-icon" href="https://www.toronto.ca/wp-content/themes/cot/img/safari-pinned-tab.svg" color="#165788">'
;

$('link[rel*="icon"').remove();
$("head").eq(0).append(faviconsHtml);

	

//remove any empty h3s
$("main").find("h3").each(function() {
	if($(this).html().trim().length == 0) $(this).remove();
});

//check if footer contains a ul with links.  If it does, save them for later moving to the breadcrumb
var footerUlLinks = $("footer").eq(0).find("ul > li > a").clone();

//replace header and footer with cframe (through copied w3 pages to github for now)
$("footer").eq(0).replaceWith(cframeFooterHtml);
$("header").eq(0).replaceWith(cframeHeaderHtml);
$("main").eq(0).appendTo("#torontopagecontent");


// if footer contains a ul with links, and was saved, move them to the breadcrumb.
var lastBreadcrumb = $("#breadcrumbs").find("li").eq(-1);
footerUlLinks.each(function() {
	lastBreadcrumb.before('<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="' + 
			      $(this).attr('href') + '"><span itemprop="name">' + 
			      $(this).text() + '</span></a></li>');
});

//check if on the sms validation page by find #code.  if not sms validation, find the first H1 header. else use default header "Book an Appointment" if no other H1 is present
if($("#code").length > 0) {
	var customPageHeaderH1 = $("<h1>Enter Verification Code</h1>");
} else {
	var customPageHeaderH1 = $("h1:not('#torontopageheader')").eq(0);
}

// move customPageHeaderH1 to the #torontopageheader, then add to the last breadcrumb.  If the customPageHeaderH1 is the same as the last link, remove the li.  
if(customPageHeaderH1.length > 0) {
	$("#torontopageheader").text(customPageHeaderH1.text());
	$("#breadcrumbs").find("li").eq(-1).text(customPageHeaderH1.text());

	customPageHeaderH1.remove();
	if($("#breadcrumbs").find("li").eq(-1).text().trim().toLowerCase() == $("#breadcrumbs").find("li").eq(-2).text().trim().toLowerCase()) { 
		$("#breadcrumbs").find("li").eq(-2).remove();
	}
}

// Set the final #torontopageheader as the document.title for wcag
document.title = $("#torontopageheader").text() + " - City of Toronto";

//add bootstrap button classes to all button like links
$(".button, .mdc-button").addClass("btn btn-primary");


//convert any visible non-button input fields with cot styling
var visibleInputFields = $("main").eq(0).find("form").eq(0).find("input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']):not([type='submit'])");
visibleInputFields.each(function(index) {
	var inputSectionContainerRow = $('<div class="row" />');
	var inputSectionContainerCol = $('<div class="col-xs-12 col-sm-6 form-group form-group-vertical has-feedback" />');
	var inputContainer = $('<div class="entryField"/>');
	var tempDivSection = $(this).parents("div.section").eq(0);
	var tempInput = $(this).detach();
			
	if(tempDivSection.length > 0 ) { //check if input includes validation + helper fields
		var tempLabel = tempDivSection.find("label").eq(0).detach();
		var tempDivSectionChildren = tempDivSection.children().detach();
		
		tempDivSection.append(inputSectionContainerRow);
		if((index+1) % 2 == 0) {
			inputSectionContainerRow.append(inputSectionContainerCol);
			inputSectionContainerCol.append(tempDivSectionChildren);
		} else {
			tempDivSection.prev("div.section").children("div.row").append(inputSectionContainerCol);
			inputSectionContainerCol.append(tempDivSectionChildren);
			tempDivSection.remove();
		}
	} else {
		var tempLabel = $(this).parents("label").eq(0);
		inputSectionContainerRow.insertAfter(tempLabel);
		inputSectionContainerRow.append(inputSectionContainerCol);
	}

	inputSectionContainerCol.prepend(inputContainer);
	inputSectionContainerCol.prepend(tempLabel);
	
	var intlTelInputDiv = inputSectionContainerCol.children(".intl-tel-input").eq(0).detach();
	if(intlTelInputDiv.length > 0) {
		intlTelInputDiv.append(tempInput);
		inputContainer.append(intlTelInputDiv);
	} else {
		inputContainer.append(tempInput);
	}
	
	tempInput.addClass("form-control");
	tempLabel.addClass("control-label");
	
	//remove extra br whitespaces
	inputSectionContainerCol.find("br").remove();
});


//convert to cotui-accordio
if($("div.date.one-queue").length > 0) {

	var appointmentDateSections = [];
	$("div.date.one-queue").each(function() {
		var timesListLi = $(this).find("ul.times-list li");
		
		//check for regular set of dates vs. full / closed dates
		if(timesListLi.length > 0 ) {
			var tempDateTitle = $(this).children(".title").eq(0).text().trim();
		} else {
			var tempDateTitle = $(this).children().eq(0).children().eq(0).text().trim();
		}
		
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



		timesListLi.each(function() {
			if($(this).hasClass("hour-line")) {
				tempInnerDiv.append("<br/>");
			} else {
				var tempLink = $(this).children("a, button");
				tempLink.attr("aria-describedby",tempDateTitleHeaderId);
				tempInnerDiv.append(
					$("<div/>").addClass("time ampm-format").append(tempLink)
				);
			}
		});
		
		// if no list, pass error text to
		if(timesListLi.length == 0 ) {
			tempInnerDiv.append(
			    $("<div/>")
			    .addClass("text-danger")
			    .attr("aria-describedby",tempDateTitleHeaderId)
			    .text($(this).children().eq(0).children().eq(0).siblings().text().trim())
			);
		}
		
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

	$("div.date.one-queue").after("<div id='dateTimesContainer'/>")
	$("div.date.one-queue").remove();

	$("#dateTimesContainer").append(accordionEle);

	// hide dateTimesContainer before appending <cotui-accordion>.  then unhide after 0.5 sec
	$("#dateTimesContainer").css("display","none").append(accordionEle);

	setTimeout(function() {
		$("#dateTimesContainer").css("display","block");
	},500);
}




var footerHtml = 
' <footer id="footer" role="contentinfo">'
+'	<div>'
+'		<div class="container-fluid">'
+'			<div class="row">'
+'				<div class="col-sm-8 col-md-9 col-lg-8">'
+'					<nav id="footer-nav" aria-label="Page Footer">'
+'						<a href="https://www.toronto.ca/home/jobs/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-group.svg" alt="">Jobs at the City</a>'
+'						&nbsp;<a href="https://www.toronto.ca/home/media-room/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-chat.svg" alt="">Media Room</a>'
+'						&nbsp;<a href="https://www.toronto.ca/home/contact-us/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-mobile.svg" alt="">Contact Us</a>'
+'						&nbsp;<a href="https://www.toronto.ca/home/311-toronto-at-your-service/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-311.svg" alt="3-1-1 Toronto"></a>'
+'						&nbsp;<a href="https://www.toronto.ca/home/translate/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-flag.svg" alt="">Translate</a>'
+'					</nav>'
+'				</div>'
+'				<div class="col-sm-4 col-md-3 col-lg-4">'
+'					<nav id="social-nav">'
+'						<div id="f-connect" class="col-lg-4 col-md-6">Connect:</div>'
+'						<div id="f-icons-1" class="col-lg-4 col-md-6">'
+'							<a href="https://twitter.com/cityoftoronto" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-twitter.svg" alt="Twitter"></a>'
+'							&nbsp;<a href="https://www.facebook.com/cityofto/" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-facebook.svg" alt="Facebook"></a>'
+'							&nbsp;<a href="https://www.instagram.com/cityofto/" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-instagram.svg" alt="Instagram"></a>'
+'						</div>'
+'						<div id="f-icons-2" class="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-6">'
+'							<a href="https://youtube.com/thecityoftoronto" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-youtube.svg" alt="Youtube"></a>'
+'							<a href="https://www.linkedin.com/company/city-of-toronto" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-linkedin.svg" alt="LinkedIn"></a>'
+'							<a href="https://www.toronto.ca/home/social-media/" data-wt_params="WT.z_click_from=footer;;WT.cat=Social Media"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-blank.svg" alt=""></a>'
+'							<div id="view-all-icon-text">VIEW ALL<span class="sr-only">TORONTO.CA SOCIAL MEDIA ACCOUNTS</span></div>'
+'						</div>'
+'					</nav>'
+'				</div>'
+'			</div>'
+'			<hr>'
+'			<p>'
+'				<a href="https://www.toronto.ca/home/copyright-information/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">© City of Toronto 1998 - 2021</a>'
+'				&nbsp;<span class="separator">|</span>&nbsp;<a href="https://www.toronto.ca/home/privacy/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">Privacy</a>'
+'				&nbsp;<span class="separator">|</span>&nbsp;<a href="https://www.toronto.ca/city-government/accessibility-human-rights/accessibility-at-the-city-of-toronto/" data-wt_params="WT.z_click_from=footer;;WT.cat=Internal">Accessibility at the City of Toronto</a>'
+'			</p>'
+'		</div>'
+'	</div>'
+'    </footer>'
;



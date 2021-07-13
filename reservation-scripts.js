



var cframeHeaderHtml = `									
	<a id="skippy" class="sr-only sr-only-focusable" href="#main"><span>Skip to content</span></a>
	<img class="visible-print-block" src="https://www.toronto.ca/wp-content/themes/cot/img/logo-print.svg" width="175" height="53" alt="City of Toronto">
	<div id="global-alertbox" w3-include-html="https://cors-anywhere.herokuapp.com/https://www.toronto.ca/cot/globalalert/"></div>
	<header id="header" role="banner">
	<div class="container-fluid">
	<div id="header-left">
		<div id="logo">
					<a href="https://www.toronto.ca/" data-wt_params="WT.z_click_from=header;;WT.z_cat=Home">
			<img src="https://www.toronto.ca/wp-content/themes/cot/img/logo.svg" width="225" height="70" alt="City of Toronto">
			</a>
				</div>
		<button id="want-to-mobile" class="btn btn-warning" data-target="#want-to-modal" data-toggle="modal">I want to...</button>
		<button id="nav-trigger" class="btn btn-default visible-xs visible-sm" aria-expanded="false" aria-haspopup="true"><span>Navigation Menu</span></button>
	</div>
		<div id="header-right">
			<div id="top-bar">
<!--				<form id="siteSearch" class="form-inline" action="--><!--searchblox/servlet/SearchServlet" method="get" role="search" name="s">-->
			  
				<form id="siteSearch" class="form-inline" action="https://find.toronto.ca/searchblox/servlet/SearchServlet" method="get" role="search" name="s">
					<div role="search" aria-label="site search">
						<label class="sr-only" for="query">Search</label>
						<input id="query" name="query" class="form-control" placeholder="Search" type="text">
						<button id="query-search" type="submit" class="btn btn-default"><img src="https://www.toronto.ca/wp-content/themes/cot/img/icon-search.svg" alt="Search"></button>
						<input type="hidden" name="cname" value="www1">
					</div>
				</form>
				<button id="text-increase" class="btn btn-default hidden-sm hidden-xs" title="Increase text size"><span class="sr-only">Increase text size</span><i id="i-text-increase" aria-hidden="true">A+</i></button>
				<button id="text-decrease" class="btn btn-default hidden-sm hidden-xs" title="Decrease text size"><span class="sr-only">Decrease text size</span><i id="i-text-decrease" aria-hidden="true">A-</i></button>
				<button id="want-to" class="btn btn-warning" data-target="#want-to-modal" data-toggle="modal">I want to...</button>
			</div>
			<div w3-include-html="https://cors-anywhere.herokuapp.com/https://www.toronto.ca/globalnav/header/" id="main-nav-container"><a href="https://cors-anywhere.herokuapp.com/https://www.toronto.ca/globalnav/header/"></a></div>
		</div>
	</div>
<!--startindex-->
<!--stopindex-->
            <nav id="breadcrumbs" aria-label="breadcrumb">
            <div class="container-fluid">
                <ol class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="https://www.toronto.ca/" itemscope itemtype="http://schema.org/Thing" itemprop="item" data-wt_params="WT.z_click_from=Breadcrumb;;WT.z_cat=Home"><i class="glyphicon glyphicon-home"></i><span itemprop="name" class="bc_home_link">City of Toronto</span></a></li>
                    
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="active"><span itemprop="name">Book an Appointment</span></li>
                </ol>
            </div>
            </nav>
        <!--startindex-->
	</header>
	<br />
`;


var cframeFooterHtml = `
	<div id="cotFooterAbove" class="cotPlaceholder"></div>
	<footer id="footer" role="contentinfo">
	<div id="cotFooterTop" class="cotPlaceholder"></div>

	<div w3-include-html="https://cors-anywhere.herokuapp.com/https://www.toronto.ca/globalnav/footer/?fb=false">
		<a href="https://cors-anywhere.herokuapp.com/https://www.toronto.ca/globalnav/footer/?fb=false"></a>
	</div>

	    <!--stopindex-->
	    <a href="#header" id="return-to-top">
				<img src="https://www.toronto.ca/wp-content/themes/cot/img/back-to-top-arrow.png" alt=""/>
				<span class="return-to-top-tip">Back to Top</span>
			</a>
	    <!--startindex-->
	<div id="cotFooterBottom" class="cotPlaceholder"></div>
	</footer>
	<div id="want-to-modal" class="modal fade" tabindex="-1" role="dialog">
	    <div w3-include-html="https://cors-anywhere.herokuapp.com/https://www.toronto.ca/globalnav/iwantto/"><a
			href="https://cors-anywhere.herokuapp.com/https://www.toronto.ca/globalnav/iwantto/"></a></div>
	</div>

	<script>
		//activate the w3-includes:
		w3IncludeHTML(function () {
			var scriptTag = document.createElement('script'), // create a script tag
			firstScriptTag = document.getElementsByTagName('script')[0]; // find the first script tag in the document
			scriptTag.src = "https://www.toronto.ca/wp-content/themes/cot/js/scripts.js";  // set the source of the script to your script
			firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
		});
	</script>
`;

//remove stock stylesheets
$('link[rel=stylesheet][href*="bundle.css"]').remove();
// $('link[rel=stylesheet][href*="stackpath.bootstrapcdn.com"]').remove();
// $('script[src*="stackpath.bootstrapcdn.com"]').remove();

// if first element isn't the breadcrumb, move it to under the breadcrumb.
// check if the first element is the breadcrumb (= 0 if not)
/*var firstElement = $(".body-layout div:not([style*='display: none']").eq(0);
if(firstElement.find("#breadcrumbs").length == 0) {
	//first element isn't the breadcrumb.  move it to under the breadcrumb.
	firstElement.insertAfter($("#breadcrumbs").parent());
}*/


//replace header and footer with cframe (through corsAnywhere for now)
// $("footer").eq(0).replaceWith(footerHtml);

$("footer").eq(0).replaceWith(cframeFooterHtml);
$("header").eq(0).replaceWith(cframeHeaderHtml);



//find the breadcrumbs and place it under the header
$("header").eq(0).append($("#breadcrumbs"));



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



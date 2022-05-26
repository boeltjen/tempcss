// var defaultContactInfoHtmlString =  
//     '<p class="contact-information"><strong>Toronto City Hall</strong><br>100 Queen Street West<br>(main entrance off Nathan Phillips Square)<br><strong>Telephone</strong>: 416-392-7036</p><p class="contact-information"><strong>Email</strong>: marriage@toronto.ca</p>';

if(defaultContactInfoHtmlString == undefined) {
	var defaultContactInfoHtmlString = 
	'				            <p class="contact-information">'
	+'						<strong>City Hall</strong><br>'
	+'						100 Queen St. W.<br>'
	+'						Toronto, ON<br>'
	+'						M5H 2N2<br>'
	+'						<br>'
	+'						<strong>Telephone:</strong> 311<br>'
	+'						<strong>TTY:</strong> 416-338-0TTY (0889)<br>'
	+'					     </p>'
	+'					     <p class="contact-information">Outside city limits phone:<br>'
	+'						416-392-CITY (2489)<br>'
	+'						<strong>Fax:</strong> 416-338-0685<br>'
	+'						<strong>Email:</strong> <a href="mailto:311@toronto.ca">311@toronto.ca</a><br>'
	+'					     </p>';
}

var cframeHeaderHtml = 									
'	<a id="skippy" class="sr-only sr-only-focusable" href="#main"><span>Skip to content</span></a>'
+'	<img class="visible-print-block" src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/logo-print.svg" width="175" height="53" alt="City of Toronto">'
+'	<!-- <div id="global-alertbox" w3-include-html="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/components/globalalert/"></div> -->'
+'	<header id="header" role="banner">'
+'	<div class="container-fluid">'
+'	<div id="header-left">'
+'		<div id="logo">'
+'					<a href="https://www.toronto.ca/" data-wt_params="WT.z_click_from=header;;WT.z_cat=Home">'
+'			<img src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/logo.svg" width="225" height="70" alt="City of Toronto">'
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
+'						<button id="query-search" type="submit" class="btn btn-default"><img src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/icon-search.svg" alt="Search"></button>'
+'						<input type="hidden" name="cname" value="www1">'
+'					</div>'
+'				</form>'
+'				<button id="text-increase" class="btn btn-default hidden-sm hidden-xs" title="Increase text size"><span class="sr-only">Increase text size</span><i id="i-text-increase" aria-hidden="true">A+</i></button>'
+'				<button id="text-decrease" class="btn btn-default hidden-sm hidden-xs" title="Decrease text size"><span class="sr-only">Decrease text size</span><i id="i-text-decrease" aria-hidden="true">A-</i></button>'
+'				<button id="want-to" class="btn btn-warning" data-target="#want-to-modal" data-toggle="modal">I want to...</button>'
+'			</div>'
+'			<div w3-include-html="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/components/globalnav-header.html" id="main-nav-container"><a href="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/components/globalnav-header.html"></a></div>'
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
+'			    <h1 id="torontopageheader" tabindex="-1">Book an Appointment</h1>'
+'			    <nav id="actions" aria-label="Page Actions">'
+'				<!--stopindex--> '
+'				<div id="sharebutton">'
+'				    <button id="shareit" class="btn btn-default" aria-haspopup="true" aria-expanded="false" aria-controls="sharebox" aria-label="share this page">Share</button> '
+'				    <div id="sharebox" class="sharebox" tabindex="-1" aria-labelledby="shareit">'
+'					<ul class="share-list">'
+'					    <li> <a target="shareit" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F" id="share-link-1"><img src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/social_facebook.png" id="share-img-1" alt=""><span class="sr-only">Share to </span><span>Facebook</span></a> </li>'
+'					    <li> <a target="shareit" href="https://twitter.com/share?url=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F&amp;text=Step+1%3A+Apply+for+a+Marriage+Licence&amp;via=cityoftoronto" id="share-link-2"><img src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/social_twitter.png" id="share-img-2" alt=""><span class="sr-only">Share to </span><span>Twitter</span></a> </li>'
+'					    <li> <a target="shareit" href="https://pinterest.com/pin/create/bookmarklet/?media=https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/share_toronto_twitter.jpg&amp;url=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F&amp;description=Step+1%3A+Apply+for+a+Marriage+Licence" id="share-link-3"><img src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/social_pinterest.png" id="share-img-4" alt=""><span class="sr-only">Share to </span><span>Pinterest</span></a> </li>'
+'					    <li> <a target="shareit" href="http://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.toronto.ca%2Fservices-payments%2Fvenues-facilities-bookings%2Fgetting-married%2Fstep-1-applying-for-a-marriage-licence%2F&amp;title=Step+1%3A+Apply+for+a+Marriage+Licence" id="share-link-4"><img src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/social_linkedin.png" id="share-img-5" alt=""><span class="sr-only">Share to </span><span>LinkedIn</span></a> </li>'
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
+'				</div>'
+'			    </div>'
+'				<aside class="col-md-4 col-lg-3">'
+'				<div id="cotSidebarTop" class="cotPlaceholder"></div>'
+'				<div id="sidebar">'
+'					<!--stopindex--> '
+'					<div id="sidebarContact" class="list-group no-border">'
+'					<h4 class="list-group-item">Contact Information</h4>'
+'					<div class="list-group-item">'
+ '' + defaultContactInfoHtmlString + ''
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
+'	<div w3-include-html="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/components/globalnav-footer.html?fb=false">'
+'		<a href="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/components/globalnav-footer.html?fb=false"></a>'
+'	</div>'
+''
+'	    <!--stopindex-->'
+'	    <a href="#header" id="return-to-top">'
+'				<img src="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/back-to-top-arrow.png" alt=""/>'
+'				<span class="return-to-top-tip">Back to Top</span>'
+'			</a>'
+'	    <!--startindex-->'
+'	<div id="cotFooterBottom" class="cotPlaceholder"></div>'
+'	</footer>'
+'	<div id="want-to-modal" class="modal fade in" tabindex="-1" role="dialog">'
+'	    <div w3-include-html="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/components/globalnav-iwantto.html">'
+'		<a href="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/components/globalnav-iwantto.html"></a></div>'
+'	</div>'
+''
+'	<script>'
+'	</script>'
+'	<script src=" https://frontdesk-cdn.inter.prod-toronto.ca/themes/toronto_ca/js/footer.js"></script>'
+''
+'	<script type="text/javascript">'
+'		var meta=document.createElement("meta");'
+'		meta.name="DCSext.dcsid";'
+'		meta.setAttribute("content", "dcs222ldvxk938tpne9uk1e3u_1c4g");'
+'		document.getElementsByTagName("head")[0].appendChild(meta);'
+''
+'		var meta2=document.createElement("meta");'
+'		meta2.name="WT.sp";'
+'		meta2.setAttribute("content", "FrontDesk");'
+'		document.getElementsByTagName("head")[0].appendChild(meta2);'
+''
+'		file_var = "https://c.oracleinfinity.io/acs/account/97j62divdr/js/main/odc.js?_ora.context=analytics:development";'
+'		var myscript=document.createElement("script");'
+'		myscript.src=file_var;'
+'		myscript.type="text/javascript";'
+'		document.getElementsByTagName("head")[0].appendChild(myscript);'
+'	</script>'
;

//remove stock stylesheets
$('link[rel=stylesheet][href*="bundle.css"]').remove();
$('link[rel=stylesheet][href*="/css/site.css"]').remove();

$('link[rel=stylesheet][href*="stackpath.bootstrapcdn.com"]').remove();
$('script[src*="stackpath.bootstrapcdn.com"]').remove();

//remove and replace favicons
faviconsHtml = 
'	<!-- Favicons -->'
+'	<link rel="apple-touch-icon" sizes="180x180" href="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/apple-touch-icon.png">'
+'	<link rel="icon" type="image/png" href="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/favicon-32x32.png" sizes="32x32">'
+'	<link rel="icon" type="image/png" href="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/favicon-16x16.png" sizes="16x16">'
+'	<link rel="mask-icon" href="https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/img/safari-pinned-tab.svg" color="#165788">'
;


var updateW3Includes = function() {
	var w3CallInt = setInterval(function() {
		if(typeof w3IncludeHTML === "function") {
			clearInterval(w3CallInt);
			if($("[w3-include-html]").length > 0) {
				w3IncludeHTML(function () {
					var scriptTag = document.createElement("script"),
					firstScriptTag = document.getElementsByTagName("script")[0];
					scriptTag.src = "https://frontdesk-cdn.inter.dev-toronto.ca/themes/toronto_ca/js/scripts.js";
					firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
				});
			}
		}
	},200);
}

	
$('link[rel*="icon"').remove();
$("head").eq(0).append(faviconsHtml);

	
var fronteskMainEle = $("main").eq(0);
var newFrontdeskMainEle = $("<div class='frontdesk-main' />");

//remove any empty h3s
fronteskMainEle.find("h3").each(function() {
	if($(this).html().trim().length == 0) $(this).remove();
});

//remove any main styling
fronteskMainEle.removeClass();

//remove div.row class under main or under div.content
fronteskMainEle.children("div.row").removeClass("row");
fronteskMainEle.children("div.content").children("div.row").removeClass("row");



//check if footer contains a ul with links.  If it does, save them for later moving to the breadcrumb
var footerUlLinks = $("footer").eq(0).find("ul > li > a").clone();

//check if page contains a frontdesk breadcrumb.  If so, save links text and href to later append to #breadcrumbs, and then remove
var frontDeskBreadcrumbLinks = [];
$("#breadcrumb").find("a").each(function() {
	if($(this).text()) {
		frontDeskBreadcrumbLinks.push({
			"href": $(this).attr("href"),
			"text": $(this).text()
		});
	}
});
$("#breadcrumb").parent().remove();

// Check if footer contains contact information by-way-of <p>'s following an h4-contact information -> until the next header, <ul> or end of the parent div.  
// If it does, save it for later moving to the contact-information <p> of the cframe.
var contactInformationElements = false;
$("footer").eq(0).find("h4").each(function() {
	if($(this).text().toLowerCase().indexOf("contact information") > -1) {
		contactInformationElements = $(this).nextUntil("h4, ul");
	}
});


//replace header and footer with cframe
$("footer").eq(0).replaceWith(cframeFooterHtml);
$("header").eq(0).replaceWith(cframeHeaderHtml);
newFrontdeskMainEle.append(fronteskMainEle.children().detach());
fronteskMainEle.remove();
//reappend newFrontdeskMainEle to #torontopagecontent at end 


// if footer contains a ul with links, and was saved, move them to the breadcrumb.
var lastBreadcrumb = $("#breadcrumbs").find("li").eq(-1);
footerUlLinks.each(function() {
	lastBreadcrumb.before('<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="' + 
			      $(this).attr('href') + '"><span itemprop="name">' + 
			      $(this).text() + '</span></a></li>');
});

//additionally append any extra frontdesk breadcrump to the main #breadcrumps
frontDeskBreadcrumbLinks.forEach(function(fdBreadcrumbLink) {
	lastBreadcrumb.before('<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="' + 
			     fdBreadcrumbLink.href + '"><span itemprop="name">' + 
			      fdBreadcrumbLink.text + '</span></a></li>');
});

// if footer contained contact information, replace the generic contact info with the one from the footer (contained in <p>'s)
if (contactInformationElements) {
	var cframeContactInfoContainer = $("aside p.contact-information").eq(0).parent();
	cframeContactInfoContainer.empty();
	contactInformationElements.filter("p").each(function() {
		cframeContactInfoContainer.append($(this).addClass("contact-information"));
	});
}

//check if on the sms validation page by find #code. Or if on an error page containing a single div.alert role alert with no H1;  if not sms validation, find the first H1 header. else use default header "Book an Appointment" if no other H1 is present
if(newFrontdeskMainEle.find("#code").length > 0) {
	var customPageHeaderH1 = $("<h1>Enter Verification Code</h1>");
} else if(newFrontdeskMainEle.find("div.alert").filter('[role="alert"]').siblings(":not('script')").text().trim().length == 0 && newFrontdeskMainEle.find("h1").length == 0) {
	var customPageHeaderH1 = $("<h1>Oops! Something went wrong.</h1>");
	newFrontdeskMainEle.find("div.alert").filter('[role="alert"]').after("<p>Please try again. If it still doesn't work, please contact us for further assistance.</p>");
} else {
	var customPageHeaderH1 = newFrontdeskMainEle.find("h1").eq(0);
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
newFrontdeskMainEle.find(".button, .mdc-button, button.action").addClass("btn btn-primary");
newFrontdeskMainEle.find("a.action").addClass("btn btn-default");

//add cancel class to all "delete reservation" and "cancel appointment" buttons (interim fix)
newFrontdeskMainEle.find("a.btn, button.btn")
	.filter(function() {
		return ($(this).text().trim().toLowerCase() == "delete reservation" || $(this).text().trim().toLowerCase() == "cancel appointment");
	})
	.removeClass("btn-primary").removeClass("btn-default").addClass("btn-cancel");


//remove bootstrap p padding from buttons
newFrontdeskMainEle.find("a > p, button > p").addClass("no-margin");

//remove font awesome icons from inside buttons
newFrontdeskMainEle.find("a > i.fas, button > i.fas").remove()


// function for converting pseudo-tags for buttons '<= ' or '=>' or '=!' and update button class appropriately
var convertButtonPseudoTags = function(mainElementToUpdate) {
	// check for buttons with pseudo-tags '<= ' or '=>' or '=!' and update button class appropriately
	var backButtonLinkElements = mainElementToUpdate.find("button.btn:contains('<= '),a.btn:contains('<= ')").removeClass("btn-primary").addClass("btn-default");
	if(backButtonLinkElements.length) backButtonLinkElements.html(backButtonLinkElements.html().replace("<= ","").replace("&lt;= ",""));

	var forwardButtonLinkElements = mainElementToUpdate.find("button.btn:contains(' =>'),a.btn:contains(' =>')").removeClass("btn-primary").addClass("btn-success");
	if(forwardButtonLinkElements.length) forwardButtonLinkElements.html(forwardButtonLinkElements.html().replace(" =>","").replace(" =&gt;",""));

	var cancelButtonLinkElements = mainElementToUpdate.find("button.btn:contains(' =!'),a.btn:contains(' =!')").removeClass("btn-primary").addClass("btn-cancel");
	if(cancelButtonLinkElements.length) cancelButtonLinkElements.html(cancelButtonLinkElements.html().replace(" =!","").replace(" =&#33;",""));
}

// check for buttons with pseudo-tags '<= ' or '=>' or '=!' and update button class appropriately
convertButtonPseudoTags(newFrontdeskMainEle);



// add highlight to ticket class
// newFrontdeskMainEle.find("div.ticket").addClass("highlightedcontent").attr("role","mark");

//function to set first H2 "status" content (until first div, h2 or end) to highlighted and aria-live.
var updateActiveContentWithAriaLive = function(activeElementToUpdate, newContentElement) {
		
	var newContentProvided = false
	if(newContentElement || false) {
		newContentProvided = true;	
	} else {
		newContentProvided = false;
		newContentElement = activeElementToUpdate;
	}		
	
	var firstH2EleHtml = "";
	var firstH2NewElement = newContentElement.find("h2").eq(0) || $("<div></div>");
	// wrap plain text in span so they can be selected by jquery
	$(firstH2NewElement.parent().prop("childNodes")).filter(function() {
		return this.nodeType === 3;
	}).wrap("<span>");

	
	// check if the new content's first H2 contains "status".  If so, assume the following content until the first div, h2 or end requires highlighting / aria-live 
	if(firstH2NewElement.text().toLowerCase().indexOf("status") > 0) {
		var firstH2NewEleContent = firstH2NewElement.nextUntil("div,h2");
		if(firstH2NewEleContent.length > 0) {
			firstH2EleHtml = firstH2NewElement.html();
			var firstH2NewElementHtml = "";
			firstH2NewEleContent.each(function() { firstH2NewElementHtml += $(this).html(); });
			firstH2NewElement.after(
				$("<p/>")
				.addClass("highlightedcontent livestatus")
				.html(firstH2NewElementHtml)
				.attr("aria-live","assertive")
			);
		}
		firstH2NewEleContent.remove();

	}
	
	// if newContent was provided then transform the newContent and then update the ActiveContent
	if(newContentProvided) {
	
		//if active page is a status page AND the new page also has a "status" h2, then update only the html of the status section, and replace the rest of the content
		if(activeElementToUpdate.find("p.livestatus").length > 0 && firstH2EleHtml.length > 0) {
			var firstH2ActiveElement = activeElementToUpdate.find("h2").eq(0);	

			//update first h2 html and remove the element from the newContent
			firstH2ActiveElement.html(firstH2EleHtml);
			firstH2NewElement.remove();

			var activeLiveStatusElement = activeElementToUpdate.find("p.livestatus");
			var newLiveStatusContent = newContentElement.find("p.livestatus");
			
			//update livestatus section html and remove the element from the newContent
			//only update if html has changed in order not to trigger the aria-live unnecessarily
			if(activeLiveStatusElement.html() != newLiveStatusContent.html()) {
				activeLiveStatusElement.html(newLiveStatusContent.html());
			}
			newLiveStatusContent.remove();

			//replace the rest of the activeElement with the rest of the newContentElement
			activeLiveStatusElement.nextAll().remove();
			activeLiveStatusElement.after(newContentElement);
						
		} else {
		//if active page is not a status page OR the new page is not "status"-h2 page, then simply update the whole activeContent with the new Content
			activeElementToUpdate.replaceWith(newContentElement);
			
		}


	}

}

// if check-in page, then updateActiveContentWithAriaLive
if(window.location.origin.toLowerCase().indexOf("checkin")>0) {
	updateActiveContentWithAriaLive(newFrontdeskMainEle);
}


//add styling for reservation delete options
newFrontdeskMainEle.find(".existing-reservation-block").each(function() {
	$(this).addClass("row").after("<br/>");

	var reservationInfo = $(this).children("div:nth-child(1)");
	reservationInfo.addClass("col-xs-12 col-sm-8 col-md-9");
	var dateTimeEle = reservationInfo.children("div:last-child");
	var ariaDescrId = (dateTimeEle.text().replace(/[^a-zA-Z0-9]/g, ''))+"-descr";
	dateTimeEle.attr("id", ariaDescrId);
	
	var reservationDelButton = $(this).children("div:nth-child(2)");
	reservationDelButton.addClass("col-xs-12 col-sm-4 col-md-3");
	reservationDelButton.find("a, button").eq(0).attr("aria-describedby",ariaDescrId);
});
				      
//convert any visible non-button input fields with cot styling
var visibleInputFields = newFrontdeskMainEle.find("form").eq(0).find("input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']):not([type='submit'])");
visibleInputFields.each(function(index) {
	var inputSectionContainerRow = $('<div class="row" />');
	var inputSectionContainerCol = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 form-group form-group-vertical has-feedback" />');
	var inputContainer = $('<div class="entryField"/>');
	var tempDivSection = $(this).parents("div.section").eq(0);
	var tempLabel = $(this).parents("label").eq(0);
	var tempInput = $(this).detach();
			
	if(tempDivSection.length > 0 ) { //check if input includes validation + helper fields
		tempLabel = tempDivSection.find("label").eq(0).detach();
		var tempDivSectionChildren = tempDivSection.children().detach();
		
		if((index+1) % 2 != 0) {
			tempDivSection.append(inputSectionContainerRow);
			inputSectionContainerRow.append(inputSectionContainerCol);
			inputSectionContainerCol.append(tempDivSectionChildren);
		} else {
			tempDivSection.prevAll("div.section").eq(0).children("div.row").append(inputSectionContainerCol);
			inputSectionContainerCol.append(tempDivSectionChildren);
			tempDivSection.remove();
			inputSectionContainerCol.parents("div.section").eq(0).next("br").remove();			
		}
		
	} else {
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
	
	//remove any mandarory asterisk (manually configure 'optional' on optional fields instead)
	tempLabel.find('span[style*="color:red"]:contains("*")').remove();
});

//remove h3:contains("time") as interim fix of extra header
newFrontdeskMainEle.find('h3:contains("Time")').parent().remove();

// check for 'shortcodes' of "[[[ XXX ]]]"
var shortCodeRegEx = /\[\[\[[^\[^\]]*\]\]\]/g;
var divs_w_shortcodes = newFrontdeskMainEle.find("div.section").filter(function () {
    // console.log($(this).text());
    return ($(this).text().search(shortCodeRegEx) > 0);
	
});

divs_w_shortcodes.each(function() {
	
	//find all shortcodes in the div
	var shortCodesInDiv = $(this).text().match(shortCodeRegEx);
	var classStrToAdd = "";
	var isPageAlertBox = false;
	var rolesToAdd = "";
	var ariaToAdd = [];

	
	// for each shortcode found, convert as follows:
	shortCodesInDiv.forEach(function(shortcode) {
		classStrToAdd += (shortcode.indexOf("addClass=") > 0) ? shortcode.substring( shortcode.indexOf("addClass=")+10, shortcode.indexOf("]]]")-1 ) + " " : ""; 
		isPageAlertBox = (shortcode.indexOf('page-alert-box') > 0);
		rolesToAdd += (shortcode.indexOf("role=") > 0) ? shortcode.substring( shortcode.indexOf("role=")+6, shortcode.indexOf("]]]")-1 ) + " " : "";
		var tempAriaToAddPair = (shortcode.indexOf("aria-") > 0) ? (shortcode.substring( shortcode.indexOf("aria-"), shortcode.indexOf("]]]") )).split("=") : "";
		if(tempAriaToAddPair.length) ariaToAdd.push({ "ariaAttr" : tempAriaToAddPair[0], "ariaVal" : tempAriaToAddPair[1].slice(1,-1) });
	});
	
	// append (if) any classes using '[[[addClass="class1 class2"]]]' -> ex. 'calltoaction', 'highlight', etc
	if(classStrToAdd) $(this).addClass(classStrToAdd);
	
	// replace any pre-existing id="page-alert-box" with the newest one tagged by '[[[id="page-alert-box"]]]'
	if(isPageAlertBox) {
		newFrontdeskMainEle.find("#page-alert-box").attr("id","").addClass("inactive-page-alert-box");
		$(this).attr("id","page-alert-box");
	}
	
	//add any added roles
	if(rolesToAdd) $(this).attr("role",(($(this).attr("role") || "") ? $(this).attr("role") + " " : "") + rolesToAdd.trim());

	
	//add/update any added aria
	let tempDivWithShortcode = $(this);
	ariaToAdd.forEach(function(ariaPair) {
		tempDivWithShortcode.attr(ariaPair.ariaAttr,ariaPair.ariaVal);
	});
	
	//remove any shortcode text
	$(this).html($(this).html().replace(shortCodeRegEx,''));

	
});


var refreshAlertElements = function(refreshPeriod) {
	//refresh alert elements since not ajax to trigger sr-alerts
	var alertElements = $("[role='alert']");
	alertElements.each(function(index,alertEle) {
		let tempAlertEleHtml = $(alertEle).html();
		$(alertEle).html("");
		setTimeout(function() {
			$(alertEle).html(tempAlertEleHtml);
		},refreshPeriod);
	});
};

//convert to cotui-accordion if any appointment times are present
var datelistElement = newFrontdeskMainEle.find("div.section.date-list").eq(0);
if(datelistElement.length > 0) {

	
	var appointmentDateSections = [];
	var divDateOneQueues = datelistElement.find("div.date");
	
	//hide date-time selector and display rest of page while the new selector loads
	divDateOneQueues.eq(0).parent().css("display","none");	
	newFrontdeskMainEle.appendTo("#torontopagecontent");
	
	//call w3Includes		
	updateW3Includes();
	
	$("body").css("display","block");
	
	//refresh alert elements since not ajax to trigger sr-alerts
	refreshAlertElements(100);

	//convert date-time selector to cotui
	divDateOneQueues.each(function() {
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
				tempInnerDiv.append("<hr/>");
			} else {
				var tempLink = $(this).children("a, button");
				tempLink.attr("aria-describedby",tempDateTitleHeaderId).removeClass("btn-primary").addClass("btn-default");
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
		.css("display","none")
		.append(appointmentDateSections);

	datelistElement.after("<div id='dateTimesContainer'/>")
	datelistElement.remove();

	// hide dateTimesContainer before appending <cotui-accordion>.  then unhide after 0.5 sec
	newFrontdeskMainEle.find("#dateTimesContainer").append(accordionEle);

	//only unhide dateTimesContainer once cotui is done rendering.
	accordionEle.on('ready',event=>{
		// console.info("cotui-accordion rendered");
		accordionEle.css("display","block");
 		// $("#torontopageheader").focus();
	})
} else {	
	// if no appointment selector is present
	newFrontdeskMainEle.appendTo("#torontopagecontent");
	
	//call w3Includes		
	updateW3Includes();
	
	$("body").css("display","block");
	// $("#torontopageheader").focus();
	
	//refresh alert elements since not ajax to trigger sr-alerts
	refreshAlertElements(100);
		
}

// TEMP FIX - switch check-in page auto-reload, to auto-content update for Accessibility reasons
	
	// check for reloadPage function
	var scriptTag_w_reloadPage = $("script:contains('reloadPage')");
	
	// if tag exists, continue
	if(scriptTag_w_reloadPage.length > 0) {
		
		//read and parse existing reloadPage function parameters
		var getReloadPageParams = function(temp_scriptTag_w_reloadPage) {
			if(temp_scriptTag_w_reloadPage.length == 0) {
				temp_scriptTag_w_reloadPage = $("<script/>");
			}
			var tempUpdatePageParams = { ajaxDataStr:false, ajaxType:false, ajaxUrl:false, reloadInterval: 0 };
			if(temp_scriptTag_w_reloadPage.html().indexOf('CheckInId') < 0) {
				// user not yet logged in -> replace with static reloadContent function
				tempUpdatePageParams.ajaxDataStr = "";
				tempUpdatePageParams.ajaxType = "GET"
				tempUpdatePageParams.ajaxUrl = window.location.href;
				tempUpdatePageParams.reloadInterval = 60000;
				// note ideally add a role="timer" and an aria-live to the countdown timer

			} else {
				// user has already logged in -> replace with dynamic reloadContent function
				var scriptHtmlMin = temp_scriptTag_w_reloadPage.html().replace(/\s/g, '').replace(/'/g,'"').replace('CheckInId','"CheckInId"').replace('QueueEntryId','"QueueEntryId"').replace('type','"type"').replace('url','"url"').replace('data','"data"');
				var ajaxOptions = JSON.parse((scriptHtmlMin.substring(scriptHtmlMin.indexOf('ajax(')+5,scriptHtmlMin.indexOf('}',scriptHtmlMin.indexOf('data:')+5)+1))+"}");
				tempUpdatePageParams.ajaxDataStr = ajaxOptions.data;
				tempUpdatePageParams.ajaxType = ajaxOptions.type;
				tempUpdatePageParams.ajaxUrl = ajaxOptions.url;
				tempUpdatePageParams.reloadInterval = 5000;		

			}		

			// remove existing script tag with reloadPage function
			temp_scriptTag_w_reloadPage.remove();
			
			return tempUpdatePageParams;
		}
		
		//replace autoload function with one that only replaces main content w/o reloading on success
		function updatePage(params) {

			//clear any previous setTimeouts or setIntervals to stop autorefresh
			var i = setTimeout(function(){}); while(i--) {clearTimeout(i);}
			
			
			//recall w3Includes		
			updateW3Includes();
	
			setTimeout(function () {
				$.ajax({
					type: params.ajaxType,
					url: params.ajaxUrl,
					data: params.ajaxDataStr,
					success: function(htmlData) { 
						reloadContent(htmlData);
					}
				});
			}, params.reloadInterval);			
			
		}

		var reloadContent = function(newContentHtml) {
				
			var newContentMain = $(newContentHtml).find("main").eq(0);
			var newContentPageHeader = newContentMain.find("h1").eq(0);
			// move newContentPageHeader to the #torontopageheader, then add to the last breadcrumb.  If the newContentPageHeader is the same as the last link, remove the li.  
			if(newContentPageHeader.length > 0) {
				$("#torontopageheader").text(newContentPageHeader.text());
				$("#breadcrumbs").find("li").eq(-1).text(newContentPageHeader.text());
				newContentPageHeader.remove();

				// update the document.title for wcag
				document.title = $("#torontopageheader").text() + " - City of Toronto";
			}

			
			//remove any main styling
			newContentMain.removeClass();
			
			//re-add bootstrap button classes to all button like links
			newContentMain.find(".button, .mdc-button, button.action").addClass("btn btn-primary");
			newContentMain.find("a.action").addClass("btn btn-default");
			
			// check for buttons with pseudo-tags '<= ' or '=>' or '=!' and update button class appropriately
			convertButtonPseudoTags(newContentMain);
			
			//re-remove bootstrap p padding from buttons
			newContentMain.find("a > p, button > p").addClass("no-margin");

			//re-remove font awesome icons from inside buttons
			newContentMain.find("a > i.fas, button > i.fas").remove()
			
			//remove div.row class under main or under div.content
			newContentMain.children("div.row").removeClass("row");
			newContentMain.children("div.content").children("div.row").removeClass("row");

			// updateContent without reloading, adding / updating aria-live if status-h2
			updateActiveContentWithAriaLive($("div.frontdesk-main").eq(0),newContentMain);
			
			// add highlight to ticket class
			// newContentMain.find("div.ticket").addClass("highlightedcontent").attr("role","mark");
			
			//update the page contents without reloading
			// $("#torontopagecontent").empty().append(newContentMain);
			
			//reset autoloading of content only - update ajax reload params
			updatePage(getReloadPageParams($(newContentHtml).filter("script:contains('reloadPage')")));


			console.log("page contents updated");
		}

		$(document).ready(() => {
			//reset autoloading of content only - update ajax reload params
			updatePage(getReloadPageParams(scriptTag_w_reloadPage));
		});
	}
// End of Temp Fix for Auto-load

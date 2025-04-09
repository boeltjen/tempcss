/// Focus on first error
/// Email address errro message isn't associated.
/// aria-hidden --> should be connected to single name

var generateID = ()=> {
    return Math.random().toString(36).substr(2, 9)
  }

let getSiblings = function ({el,selector,getClosest}={}) {
    // for collecting siblings
    // console.log('getSiblings',{el,selector,getClosest})
    let siblings = [];
    // if no parent, return no sibling
    if(!el.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = el.parentNode.firstChild;

    // collecting siblings
    while (sibling) {
        if ((sibling.nodeType === 1 && sibling !== el) ) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }


    let filteredSibling = siblings.filter(siblingsEL=>{
    	if(selector.indexOf('.') > -1)
    		return Array.from(siblingsEL.classList).includes(selector.replace(/\./,''))

    	if(selector.indexOf('#') > -1)
    		return siblingsEL.id = selector
    })

    return getClosest?filteredSibling.at(-1):filteredSibling
};

var frontdeskDomain = 'frontdesk-cdn.inter.prod-toronto.ca';
var cframeHeaderHtml =
'	<a id="skippy" class="sr-only sr-only-focusable" href="#main"><span>Skip to content</span></a>'
+'	<img class="visible-print-block" src="https://'+frontdeskDomain+'/themes/toronto_ca/img/logo-print.svg" width="175" height="53" alt="City of Toronto">'
+'	<!-- <div id="global-alertbox" w3-include-html="https://'+frontdeskDomain+'/themes/toronto_ca/components/globalalert/"></div> -->'
+'	<header id="header" role="banner">'
+'	<div class="container-fluid">'
+'	<div id="header-left">'
+'		<div id="logo">'
+'					<a href="https://www.toronto.ca/" data-wt_params="WT.z_click_from=header;;WT.z_cat=Home">'
+'			<img src="https://'+frontdeskDomain+'/themes/toronto_ca/img/logo.svg" width="225" height="70" alt="City of Toronto">'
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
+'						<button id="query-search" type="submit" class="btn btn-default"><img src="https://'+frontdeskDomain+'/themes/toronto_ca/img/icon-search.svg" alt="Search"></button>'
+'						<input type="hidden" name="cname" value="www1">'
+'					</div>'
+'				</form>'
+'				<button id="text-increase" class="btn btn-default hidden-sm hidden-xs" title="Increase text size"><span class="sr-only">Increase text size</span><i id="i-text-increase" aria-hidden="true">A+</i></button>'
+'				<button id="text-decrease" class="btn btn-default hidden-sm hidden-xs" title="Decrease text size"><span class="sr-only">Decrease text size</span><i id="i-text-decrease" aria-hidden="true">A-</i></button>'
+'				<button id="want-to" class="btn btn-warning" data-target="#want-to-modal" data-toggle="modal">I want to...</button>'
+'			</div>'
+'			<div w3-include-html="https://'+frontdeskDomain+'/themes/toronto_ca/components/globalnav-header.html" id="main-nav-container"><a href="https://'+frontdeskDomain+'/themes/toronto_ca/components/globalnav-header.html"></a></div>'
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
+'				    <button class="btn btn-default btn-menu" aria-haspopup="true" aria-expanded="false" aria-controls="sharebox" aria-label="share this page">Share</button> '
+'				    <div class="sharebox" tabindex="-1" aria-labelledby="shareit">'
+'					<ul class="share-list">'
+'					    <li> <a target="shareit" href="https://www.facebook.com/sharer/sharer.php?u='+encodeURI(window.location)+'" id="share-link-1"><img src="https://'+frontdeskDomain+'/themes/toronto_ca/img/social_facebook.png" id="share-img-1" alt=""><span class="sr-only">Share to </span><span>Facebook</span></a> </li>'
+'					    <li> <a target="shareit" href="https://twitter.com/share?url='+encodeURI(window.location)+'" id="share-link-2"><img src="https://'+frontdeskDomain+'/themes/toronto_ca/img/social_twitter.png" id="share-img-2" alt=""><span class="sr-only">Share to </span><span>Twitter</span></a> </li>'
+'					    <li> <a target="shareit" href="https://pinterest.com/pin/create/bookmarklet/?media=https://'+frontdeskDomain+'/themes/toronto_ca/img/share_toronto_twitter.jpg&amp;url='+encodeURI(window.location)+'" id="share-link-3"><img src="https://'+frontdeskDomain+'/themes/toronto_ca/img/social_pinterest.png" id="share-img-4" alt=""><span class="sr-only">Share to </span><span>Pinterest</span></a> </li>'
+'					    <li> <a target="shareit" href="http://www.linkedin.com/shareArticle?url='+encodeURI(window.location)+'" id="share-link-4"><img src="https://'+frontdeskDomain+'/themes/toronto_ca/img/social_linkedin.png" id="share-img-5" alt=""><span class="sr-only">Share to </span><span>LinkedIn</span></a> </li>'
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
+'						<div w3-include-html="https://'+frontdeskDomain+'/apps/${APP_NAME}/sideBarContact.html"><a href="https://'+frontdeskDomain+'/apps/${APP_NAME}/sideBarContact.html"></a></div>'
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
+'	<div w3-include-html="https://'+frontdeskDomain+'/themes/toronto_ca/components/globalnav-footer.html?fb=false">'
+'		<a href="https://'+frontdeskDomain+'/themes/toronto_ca/components/globalnav-footer.html?fb=false"></a>'
+'	</div>'
+''
+'	    <!--stopindex-->'
+'	    <a href="#header" id="return-to-top">'
+'				<img src="https://'+frontdeskDomain+'/themes/toronto_ca/img/back-to-top-arrow.png" alt=""/>'
+'				<span class="return-to-top-tip">Back to Top</span>'
+'			</a>'
+'	    <!--startindex-->'
+'	<div id="cotFooterBottom" class="cotPlaceholder"></div>'
+'	</footer>'
+'	<div id="want-to-modal" class="modal fade in" tabindex="-1" role="dialog">'
+'	    <div w3-include-html="https://'+frontdeskDomain+'/themes/toronto_ca/components/globalnav-iwantto.html">'
+'		<a href="https://'+frontdeskDomain+'/themes/toronto_ca/components/globalnav-iwantto.html"></a></div>'
+'	</div>'
+''
+'	<script src="https://'+frontdeskDomain+'/themes/toronto_ca/js/jquery-migrate-3.0.1.min.js"></script>'
+'	<script src="https://'+frontdeskDomain+'/themes/toronto_ca/js/jquery-additional-custom-js.js?ver=1.0.0"></script>'
+'	<script src="https://'+frontdeskDomain+'/themes/toronto_ca/js/bootstrap.3.4.1.min.js"></script>'
+'	<script src="https://'+frontdeskDomain+'/themes/toronto_ca/js/footer.js"></script>'
+'	<script>'
+'		var w3CallInt = setInterval(function() {'
+'			if(typeof w3IncludeHTML === "function") {'
+'				clearInterval(w3CallInt);'
+'				w3IncludeHTML(function () {'
+'					var scriptTag = document.createElement("script"),'
+'					firstScriptTag = document.getElementsByTagName("script")[0];'
+'					scriptTag.src = "https://'+frontdeskDomain+'/themes/toronto_ca/js/scripts.js";'
+'					firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);'
+'				});'
+'			}'
+'		},200);'
+'	</script>'
+''
+'	<script type="text/javascript">'
+''
+'		var meta2=document.createElement("meta");'
+'		meta2.name="WT.sp";'
+'		meta2.setAttribute("content", "FrontDesk");'
+'		document.getElementsByTagName("head")[0].appendChild(meta2);'
+''
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
+'	<link rel="apple-touch-icon" sizes="180x180" href="https://'+frontdeskDomain+'/themes/toronto_ca/img/apple-touch-icon.png">'
+'	<link rel="icon" type="image/png" href="https://'+frontdeskDomain+'/themes/toronto_ca/img/favicon-32x32.png" sizes="32x32">'
+'	<link rel="icon" type="image/png" href="https://'+frontdeskDomain+'/themes/toronto_ca/img/favicon-16x16.png" sizes="16x16">'
+'	<link rel="mask-icon" href="https://'+frontdeskDomain+'/themes/toronto_ca/img/safari-pinned-tab.svg" color="#165788">'
;

$('link[rel*="icon"').remove();
$("head").eq(0).append(faviconsHtml);


// Added Language selector
var $languageSelectorOptions = document.querySelectorAll('#fd-language-select li[data-value]')
var languageSelectorOptions = [];

if($languageSelectorOptions.length > 0){
	$languageSelectorOptions.forEach(function(el){
		languageSelectorOptions.push({
			label: $(el).find('.mdc-list-item__text').text(),
			url: $(el).data('value'),
			selected: $(el).hasClass('mdc-list-item--selected')
		})
	});

	languageSelectorOptions.sort(function(a,b){
		if(a.label){
			return a.label > b.label
		}
	})
}


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


//replace header and footer with cframe (through copied w3 pages to github for now)
var APP_NAME = window.location.pathname.split(/\//gi)[2]
$("footer").eq(0).replaceWith(cframeFooterHtml.replace(/(\$\{APP_NAME\})/gi,APP_NAME));
$("header").eq(0).replaceWith(cframeHeaderHtml.replace(/(\$\{APP_NAME\})/gi,APP_NAME));

// Translate Function

var $translationList = document.createElement('div');
	$translationList.classList.add('cot-translate--list');
	$translationList.classList.add('sharebox');

	$translationList.setAttribute('tabindex','-1');
var $list = ''
if(languageSelectorOptions.length > 0){
	$list += "<ul id=\"js-cot-translate__list\" role=\"menu\" aria-labelledby=\"translate\">";
	for(var ndx =0;ndx < languageSelectorOptions.length;ndx++){
		$list += "<li><a role=\"menuitem\" href=\""+languageSelectorOptions[ndx].url+"\">"+languageSelectorOptions[ndx].label+"</a></li>"
	}
	$list += "</ul>"
	$translationList.innerHTML += $list;

	$('#actions').append( `<div class="cot-translate"><button type="button" class="btn btn-default btn-menu" aria-expanded="false" aria-haspopup="true" aria-controls="js-cot-translate__list">Translate</button></div>`);
	$('#actions .cot-translate').append( $translationList )
}

// On translate to french

$( document ).ready( function() {

  var culture = new URL(location.href).searchParams.get('culture')

  if ( !culture || culture == "en" ) return;

  $( 'html' ).removeAttr( "lang" );
  $( '#breadcrumbs li:not(:first)' ).attr( "lang", culture );
  $( 'h1' ).attr( "lang", culture );
  $( '#page-content .body-layout' ).attr( "lang", culture );

} );

// Share Button
document.querySelectorAll('.btn-menu').forEach(function($btnMenu){

	function toggleMenu(evt){

		var isExpanded = $btnMenu.getAttribute('aria-expanded') === 'true';

		$btnMenu.setAttribute('aria-expanded', isExpanded?'false':'true' );

		var $optionPanels = $btnMenu.parentElement.querySelectorAll('.sharebox');
			$optionPanels.forEach(function($optionPanel){
				$optionPanel.style.display = !isExpanded?'block':'none';
				//$optionPanel.querySelector('li').setAttribute('tabindex','-1')
				$optionPanel.querySelector('li a').focus();
			})
		evt.stopPropagation();

	}

	function closeMenu(evt){
		if ((evt.keyCode || evt.which) === 27) {
			var isExpanded = false;
			$btnMenu.setAttribute('aria-expanded', !isExpanded?'false':'true' );

			var $optionPanels = $btnMenu.parentElement.querySelectorAll('.sharebox');
				$optionPanels.forEach(function($optionPanel){
					$optionPanel.style.display = isExpanded?'block':'none';
					$btnMenu.focus();
				})
		}
		evt.stopPropagation();
	}

	$btnMenu.addEventListener('click', toggleMenu)

	var $optionPanelSetup = $btnMenu.parentElement.querySelectorAll('.sharebox');
		$optionPanelSetup.forEach(function($optionPanel){
			$optionPanel.style.display = 'none';
			$optionPanel.addEventListener('keydown', closeMenu)

		})





	// return;
	// if (imageCaption !== null) {
	// 	captionButton = imageCaption;
	// 	$imageCredits = imageCaption.parentElement.querySelectorAll('.sharebox');

	// 	console.log({$imageCredits})
	// 	$imageCredits.forEach(function($imageCredit){
	// 		$imageCredit.style.display = 'none'
	// 	})



	// 	captionButton.addEventListener('click', function(evt) {
	// 		var pressed = captionButton.getAttribute('aria-expanded');

	// 		if (captionButton.getAttribute('aria-expanded') === 'false') {
	// 			captionButton.setAttribute('aria-expanded', 'true');
	// 		} else {
	// 			captionButton.setAttribute('aria-expanded', 'false');
	// 		}


	// 		$imageCredits.forEach(function($imageCredit){

	// 			//$imageCredit.style.display = $imageCredit.style.display==='block'?'block':'none';

	// 			$imageCredit.focus();
	// 		})
	// 		evt.stopPropagation();
	// 	});


	// 	$imageCredits.forEach(function($imageCredit){

			// $imageCredit.addEventListener('keydown', function(evt) {
			// 	if ((evt.keyCode || evt.which) === 27) { // escape pressed.
			// 	var pressed = captionButton.getAttribute('aria-expanded');
			// 	if (pressed === 'false') {
			// 		captionButton.setAttribute('aria-expanded', 'true');
			// 	} else {
			// 		captionButton.setAttribute('aria-expanded', 'false');
			// 	}
			// 	captionButton.focus();

			// 	}
			// 	evt.stopPropagation();
			// });
	// 	})


	// } else {
	// 	return;
	// }

	// window.addEventListener("resize", function() {
	// 	// assume for example purpses that 'myHeader' references a collapsible header...
	// 	if (window.getComputedStyle(imageCaption, null).getPropertyValue("visibility") === "hidden") {
	// 		// remove the role, aria, and tabindex attributes from the heading and div
	// 		imageCaption.removeAttribute('aria-haspopup');
	// 		imageCaption.removeAttribute('aria-expanded');
	// 		imageCaption.removeAttribute('aria-controls');
	// 	} else {
	// 		// add the role, aria, and tabindex attributes from the heading and div
	// 		imageCaption.setAttribute('aria-haspopup', 'true');
	// 		imageCaption.setAttribute('aria-expanded', 'false');
	// 		imageCaption.setAttribute('aria-controls', 'sharebox');
	// 		imageCredit.style.display = "none";
	// 	}
	// });

})

// End Share Button






newFrontdeskMainEle.append(fronteskMainEle.children().detach());
fronteskMainEle.remove();
//reappend newFrontdeskMainEle to #torontopagecontent at end

function renderBreadcrumbs() {

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

  // Remove Link from last Breadcrub
  var $bcSPAN = document.createElement('span');
      $bcSPAN.innerText = $("#breadcrumbs").find("li").eq(-2).find('a').text()
  $("#breadcrumbs").find("li").eq(-2).find('a').replaceWith($bcSPAN);
  $("#torontopageheader").text($bcSPAN.innerText);
  $("#breadcrumbs").find("li").eq(-1).remove();

  if ( window.location.pathname.startsWith( "/tph" ) ) {

    var breadcrumbs = $( "#breadcrumbs" );

    // var breadcrumbCopy = breadcrumbs.find( "li" ).eq( 0 ).clone();

    breadcrumbs.find( "li" ).eq( 0 ).after(
        '<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">'
      +   '<a itemscope="" itemtype="http://schema.org/Thing" itemprop="item" href="http://tphbookings.ca/">'
      +     '<span itemprop="name">Toronto Public Health</span>'
      +   '</a>'
      + '</li>' );

    // console.log( "Breadcrumb Items: \n", breadcrumbItems );

  }

  // console.log( "Render breadcrumbs called" );

}

renderBreadcrumbs();

function renderPageTitle() {

  //check if on the sms validation page by find #code. Or if on an error page containing a single div.alert role alert with no H1;  if not sms validation, find the first H1 header. else use default header "Book an Appointment" if no other H1 is present
  if(newFrontdeskMainEle.find("#code").length > 0) {
  	var customPageHeaderH1 = $("<h1>Enter Verification Code</h1>");
  } 
//   else if( ( newFrontdeskMainEle.find("div.alert").filter('[role="alert"]').length == 1 && !newFrontdeskMainEle.find("div.alert").filter('[role="alert"]')[0].parent().hasClass( 'd-none' ) ) && newFrontdeskMainEle.find("h1").length == 0) {
//   	var customPageHeaderH1 = $("<h1>Oops! Something went wrong.</h1>");
//   	newFrontdeskMainEle.find("div.alert").filter('[role="alert"]').after("<p>Please try again. If it still doesn't work, please contact us for further assistance.</p>");
//   } 
  else {
  	var customPageHeaderH1 = newFrontdeskMainEle.find("h1").eq(0);
  }

  // move customPageHeaderH1 to the #torontopageheader, then add to the last breadcrumb.  If the customPageHeaderH1 is the same as the last link, remove the li.
  if(customPageHeaderH1.length > 0) {
  	$("#torontopageheader").text(customPageHeaderH1.text());
  	$("#breadcrumbs").find("li").eq(-1).text(customPageHeaderH1.text());

  	$( customPageHeaderH1 ).parent().remove();
  	if($("#breadcrumbs").find("li").eq(-1).text().trim().toLowerCase() == $("#breadcrumbs").find("li").eq(-2).text().trim().toLowerCase()) {
  		$("#breadcrumbs").find("li").eq(-2).remove();
  	}
  }

  // Set the final #torontopageheader as the document.title for wcag
  document.title = $("#torontopageheader").text() + " - City of Toronto";

}

renderPageTitle();

// if footer contained contact information, replace the generic contact info with the one from the footer (contained in <p>'s)
if (contactInformationElements) {
	var cframeContactInfoContainer = $("aside p.contact-information").eq(0).parent();
	cframeContactInfoContainer.empty();
	contactInformationElements.filter("p").each(function() {
		cframeContactInfoContainer.append($(this).addClass("contact-information"));
	});
}

//add bootstrap button classes to all button like links
newFrontdeskMainEle.find(".button, .mdc-button, button.action").addClass("btn btn-primary");
newFrontdeskMainEle.find("a.action").addClass("btn btn-default");

//add cancel class to all "delete reservation" and "cancel appointment" buttons (interim fix)
newFrontdeskMainEle.find("a.btn, button.btn")
	.filter(function() {
		var text = $(this).text().trim().toLowerCase();
		return (text == "delete reservation" || text == "cancel appointment" || text.indexOf('cancel') != -1 || text.indexOf('delete') != -1);
	})
	.removeClass("btn-primary").removeClass("btn-default").removeClass('btn-danger').addClass("btn-cancel");


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

	var cancelButtonLinkElements = mainElementToUpdate.find("button.btn:contains(' =!'),a.btn:contains(' =!')").removeClass("btn-primary").removeClass('btn-danger').addClass("btn-cancel");
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

	// check if the new content's first H2 contains "status".  If so, assume the following content until the first div, h2 or end requires highlighting / aria-live
	if(firstH2NewElement.text().toLowerCase().indexOf("status") > 0) {
		var firstH2NewEleContent = firstH2NewElement.nextUntil("div,h2");
		if(firstH2NewEleContent.length > 0) {
			firstH2EleHtml = firstH2NewElement.html();
			firstH2NewElement.after(
				$("<p/>")
				.addClass("highlightedcontent livestatus")
				.html(firstH2NewEleContent.html())
				.attr("aria-live","assertive")
			);
		}
		firstH2NewEleContent.remove();

	}

	// if newContent was provided then transform the newContent and then update the ActiveConent
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
newFrontdeskMainEle.find(".existing-reservation-block, .reservation-info-text").each(function(ndx,el) {
	$(el).addClass("row").after("<br/>");

	var reservationInfo = $(el).children("div:nth-child(1)");
	reservationInfo.addClass("col-xs-12 col-sm-8 col-md-9");
	var dateTimeEle = reservationInfo.children("div:last-child");
	var ariaDescrId = (dateTimeEle.text().replace(/[^a-zA-Z0-9]/g, ''))+"-descr";
	dateTimeEle.attr("id", ariaDescrId);

	var reservationDelButton = $(el).children("div:nth-child(2)");
	reservationDelButton.addClass("col-xs-12 col-sm-4 col-md-3");
	reservationDelButton.find("a, button").eq(0).attr("aria-describedby",ariaDescrId);
});

//convert any visible non-button input fields with cot styling
setTimeout(function(){

	if(document.querySelectorAll('.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12').length > 0){
		document.querySelectorAll('.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12').forEach(function(el){el.classList.add('row');})
	}

	var $sections = $("#mainForm .section");

	if(document.querySelectorAll('.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12').length > 0){
		$("#mainForm").addClass('col-xs-12');
	}

	$sections.each(function(index,$section){

		if(document.querySelectorAll('.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12').length == 0){
			$section.classList.add('col-xs-12');
		}

		var $inputs = $section.querySelectorAll('input,textarea')

		$inputs.forEach(function($input){
			
			var $label;

			// Helper Text
			var $helpText = document.querySelector( '[id="'+$input.getAttribute('name').toLowerCase()+'-helper"],[id="'+$input.getAttribute('name').toLowerCase()+'helper-text"]')

			// Validation Message
			var $validation = document.querySelector( '[data-valmsg-for="'+$input.getAttribute('name')+'"]')

			// New Container
			var $container = document.createElement('div')

			if($input.hasAttribute('aria-labelledby')){

				$input.classList.add('form-control');

				$label = document.querySelector( '[id="'+$input.getAttribute('aria-labelledby')+'"]')

				// $label.classList.remove( 'mdf-floating-label' );

				if($input.hasAttribute('required') && $input.getAttribute('required')==='required'){
				// if($input.hasAttribute('required')){
					$label.innerText += ' (Required)';
					// $label.setAttribute('style','font-weight: bold;')
				}

				if($label) $container.append($label);

				if($input) $container.append($input);

				// if ($helpText) $container.append($helpText);

				if($validation) $container.append($validation);

				// $container.classList.add( 'new-container' );

				$section.prepend($container);

				if ( $input.getAttribute( 'type' ) == 'email' ) {

					$inputSibling = $( $input ).parent().next();

					if ( $inputSibling.hasClass( 'mdc-text-field' )  ) {
						$inputSibling.remove()
					}

				}

			} else {

				if($input.getAttribute('type')==="checkbox" || $input.getAttribute('type')==="radio"){
					
					var $fieldset = document.getElementById(`${$input.getAttribute('name')}`)
						$fieldset.setAttribute('style','margin-top: 1em;');

					$label = $section.querySelector( '[for="'+$input.getAttribute('id')+'"]');

					if ( !$label ) return;

					$input.classList.remove('mdc-checkbox__native-control');

					var $div = document.createElement('div');

					// Added by Kevin

					if ( $input.getAttribute( 'type' ) == 'checkbox' ) {
						$div.classList.add('checkbox');
					} else {
						$div.classList.add('radio');
					}

					$label.prepend($input);
					$div.append($label)

					var $legend = $fieldset.querySelector('legend');
						$legend.setAttribute('style','margin-bottom: 0em;');

					$fieldset.append($div);
					//$fieldset.append($label);
					if($validation) $fieldset.append($validation);

					// Added by Kevin

					$( '.mdc-form-field:has(.mdc-radio)' ).next( 'br' ).remove()

					$section.querySelectorAll('fieldset br').forEach(el=>el.remove())
					//$section.append($container);
				}
			}

			// var $emptyDivs = $section.querySelectorAll('div:empty,.mdc-form-field');
			
			// $emptyDivs.forEach(function(div){
			// 	if(div.innerText == '')
			// 		div.remove()
			// })

			// Added by Kevin

			var $emptyDivs = $section.querySelectorAll('div:empty,.mdc-form-field');
			
			$emptyDivs.forEach(function(div){
				if( div.innerText !== '' ) return
				div.remove()
			})

			var $emptyHelperText = $section.querySelectorAll('.mdc-text-field-helper-text');
			
			$emptyHelperText.forEach(function(item){
				if( item.innerText !== '' ) return
				$( item ).parent().remove()
			})

			$( 'div > label.mdc-text-field', $section ).parent().remove()

			$( 'br', '.mdc-layout-grid__inner' ).remove()

		})

		// $( '> label', $section ).remove()

		// var $labels = $section.querySelectorAll('label'); 

		// $labels.forEach(function($label){

		// 	$label.classList.add('control-label')

		// })

		$section.classList.add( 'section-with-bottom-margin' );

	});

	$('.with-help-text>label').parent().remove();

}, 500)



// var inputFields = $("#mainForm input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']):not([type='submit'])");
// 	inputFields.each(function(ndx,el){
// 		var $label = document.createElement('label');
// 		var $input = document.createElement('input');


// 		var $inputTemp = el;
// 		var $labelTemp;

// 		if(el.hasAttribute('aria-labelledby')){
// 			$labelTemp = document.querySelector( '[id="'+$inputTemp.getAttribute('aria-labelledby')+'"]')
// 		} else {
// 			$labelTemp = document.querySelector( '[for="'+$inputTemp.getAttribute('id')+'"]')
// 		}


// 		var $inputSectionContainerRow = $('<div class="row" />');
// 		var $inputSectionContainerCol = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 form-group form-group-vertical has-feedback" />');
// 		var $inputContainer = $('<div class="entryField"/>');


// 	})

/*
var visibleInputFields = newFrontdeskMainEle.find("form").eq(0).find("input:not([type='hidden']):not([type='button']):not([type='submit']):not([type='reset']):not([type='submit'])");
visibleInputFields.each(function(index,el) {
	var inputSectionContainerRow = $('<div class="row" />');
	var inputSectionContainerCol = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 form-group form-group-vertical has-feedback" />');
	var inputContainer = $('<div class="entryField"/>');
	var tempDivSection = $(el).parents("div.section").eq(0);
	var tempLabel = $(el).parents("label").eq(0);
	var tempInput = $(el).detach();

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
*/

//remove h3:contains("time") as interim fix of extra header

if ( !newFrontdeskMainEle.find( 'h3:contains("Extensions of Time to Pay")' ).parent() ) {
  newFrontdeskMainEle.find('h3:contains("Time")').parent().remove();
}

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

// Site Wide Render divDateOneQueues

var customAccordionsPaths = [ "/tph", "/torontocot/toronto-virtual-interview/", "/torontocot/in-person-interview/" ];

var isSpecialAccordion = customAccordionsPaths.filter( function( path ) {

  return window.location.pathname.startsWith( path )

});

if ( isSpecialAccordion ) {

  if(datelistElement.length > 0) {

    var appointmentDateSections = [];
    var divDateOneQueues = datelistElement.find("div.date");

    //hide date-time selector and display rest of page while the new selector loads
    divDateOneQueues.eq(0).parent().css("display","none");
    newFrontdeskMainEle.appendTo("#torontopagecontent");
    $("body").css("display","block");

    //refresh alert elements since not ajax to trigger sr-alerts
    refreshAlertElements(100);

    //convert date-time selector to cotui
    divDateOneQueues.each(function( index ) {

      var timesList = $( "ul.times-list", this );

      var tempDateTitle = "";

      if ( timesList.length == 0 ) {

        tempDateTitle = $( ".title > .header-text", this ).text().trim();

      } else {

        tempDateTitle = $( ".title > .date-text > .header-text", this ).text().trim();

      }

      var tempDateTitleId = tempDateTitle.replace(/[^a-zA-Z0-9]/g, '');
      var tempDateTitleHeaderId = tempDateTitleId + "-date-header";

      var tempDateHeaderEle = $("<h2/>")
        .attr({
          "data-type":"toggle",
          "aria-controls": "date--" + index,
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
          "id": "date--" + index,
        }).append( tempHiddenTitle );

      if ( timesList.length == 0 ) {

        tempInnerDiv.append(
            $("<div/>")
            .addClass("text-danger")
            .attr("aria-describedby", tempDateTitleHeaderId)
            .text($(this).children().eq(0).children().eq(0).siblings().text().trim())
        );

      } else {

        timesList.each( function( index ) {

          var title = $( this ).prev();

          var tempTitle = title.text().trim()

          var tempLocationTitleId = tempTitle.replace(/[^a-zA-Z0-9]/g, '');
          var tempLocationTitleHeaderId = tempLocationTitleId + "-location";

          if ( title.hasClass( "location-name" ) ) {

            var locationTitleEl = $( "<h3/>" ).attr( { "id": tempLocationTitleHeaderId } ).text( tempTitle );

            tempInnerDiv.append( locationTitleEl );

          }

          var timesListLi = $( this ).children();

          timesListLi.each(function() {
            if($(this).hasClass("hour-line")) {
              tempInnerDiv.append("<hr/>");
            } else {
              var tempLink = $(this).children("a, button");
              tempLink.attr("aria-describedby", tempLocationTitleHeaderId ).removeClass("btn-primary").addClass("btn-default");
              tempInnerDiv.append(
                $("<div/>").addClass("time ampm-format").append(tempLink)
              );
            }
          });

        });

      }

      var tempSectionEle = $("<section/>").append(tempDateHeaderEle).append(tempInnerDiv);

      appointmentDateSections.push( tempSectionEle );

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
    //datelistElement.remove();

    // hide dateTimesContainer before appending <cotui-accordion>.  then unhide after 0.5 sec
    newFrontdeskMainEle.find("#dateTimesContainer").append(accordionEle);

    //only unhide dateTimesContainer once cotui is done rendering.
    accordionEle[0].addEventListener('ready',function(event){
      console.info("cotui-accordion rendered");
      accordionEle.css("display","block");
      // $("#torontopageheader").focus();
    })

  } else {
    // if no appointment selector is present
    newFrontdeskMainEle.appendTo("#torontopagecontent");
    $("body").css("display","block");
    // $("#torontopageheader").focus();

    //refresh alert elements since not ajax to trigger sr-alerts
    refreshAlertElements(100);

  }

} else {

  if(datelistElement.length > 0) {

  	var appointmentDateSections = [];
  	var divDateOneQueues = datelistElement.find("div.date");

  	//hide date-time selector and display rest of page while the new selector loads
  	divDateOneQueues.eq(0).parent().css("display","none");
  	newFrontdeskMainEle.appendTo("#torontopagecontent");
  	$("body").css("display","block");

  	//refresh alert elements since not ajax to trigger sr-alerts
  	refreshAlertElements(100);

  	//convert date-time selector to cotui
  	divDateOneQueues.each(function() {

      var timesListLi = $( this ).find( "ul.times-list li" );

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
  	//datelistElement.remove();

  	// hide dateTimesContainer before appending <cotui-accordion>.  then unhide after 0.5 sec
  	newFrontdeskMainEle.find("#dateTimesContainer").append(accordionEle);

  	//only unhide dateTimesContainer once cotui is done rendering.
  	accordionEle[0].addEventListener('ready',function(event){
  		accordionEle.css("display","block");
   		// $("#torontopageheader").focus();
  	})
  } else {
  	// if no appointment selector is present
  	newFrontdeskMainEle.appendTo("#torontopagecontent");
  	$("body").css("display","block");
  	// $("#torontopageheader").focus();

  	//refresh alert elements since not ajax to trigger sr-alerts
  	refreshAlertElements(100);

  }

}

//Group Section Buttons
// $('.section-buttons').each(function(ndx,$section){
// 	var id  = 'section-buttons_'+generateID();

// 	console.log({$section,closestSection})
// 	$($section).attr('aria-labelledby',id);
//     $($section).attr('role','list');
//     $($section).find('a').attr('role','listitem');
//     $($section).attr('id',id);

//     var closestSection = getSiblings({el:$section,selector:'.section',getClosest:true})
//     $(closestSection).attr('id',id);

// })

if($('.section > table>thead').length == 0){
	$('.section > table').each(function(ndx,$table){
		var tr = $($table).find('tr').html().replace(/(td)/gi,'th');
		var $tr = $.parseHTML(tr);
		var columnText = [];
        $($table).find('tr:first').remove();
        $($table).addClass('table cot-table');
		$($table).prepend('<thead><tr></tr></thead>').find('thead tr').append($tr)

		$($table).find('thead th').each(function(th_ndx,$th){
            $($th).attr('scope','col');
			columnText.push($($th).text())
        })

        $($table).prepend('<caption class="sr-only">Table listing '+columnText.join(',')+'</caption>')
	})
}

// TPHDEV modifications

if ( window.location.pathname.startsWith( "/tph" ) ) {

  var title = "Toronto Public Health - " + $( "h1" ).text();

  // Set the final #torontopageheader as the document.title for wcag
  document.title = title;

  $( "h1" ).text( title );

}

w3IncludeHTML();

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
				var scriptHtmlMin = temp_scriptTag_w_reloadPage.html().replace(/\s/g, '').replace(/'/g,'"').replace('CheckInId','"CheckInId"').replace('QueueEntryId','"QueueEntryId"');
				tempUpdatePageParams.ajaxDataStr = JSON.parse(scriptHtmlMin.substring(scriptHtmlMin.indexOf('data:{')+5,scriptHtmlMin.indexOf('}',scriptHtmlMin.indexOf('data:{')+5)+1));
				tempUpdatePageParams.ajaxType = "POST"
				tempUpdatePageParams.ajaxUrl = "/CheckedIn";
				tempUpdatePageParams.reloadInterval = 5000;

			}

			// remove existing script tag with reloadPage function
			temp_scriptTag_w_reloadPage.remove();

			return tempUpdatePageParams;
		}

		//replace autoload function with one that only replaces main content w/o reloading on success
		function updatePage(params) {

			//clear any previous setTimeouts
			var i = setTimeout(function(){}); while(i--) {clearTimeout(i);}

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


			// console.log("page contents updated");
		}

		$(document).ready(() => {
			//reset autoloading of content only - update ajax reload params
			updatePage(getReloadPageParams(scriptTag_w_reloadPage));
		});
	}
// End of Temp Fix for Auto-load

// Add Material UI Icons

var addMaterialUIIcons = function() {

	var link = document.createElement('link');
	link.rel = "stylesheet";
	link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
	document.head.prepend( link );

}

addMaterialUIIcons();


// Add dollar sign to payment info price
//      Assuming a numerical value is present in a div with class 'payment-info' with at least one digit and no '$' before it, this function adds a '$' before it
//      if the pathname is */ReserveTime/SummaryPage
var addDollarSignToPaymentInfoPrice = function() {
              var paymentInfoHtml = $('.payment-info').html();
              var curLocationPathname = location.pathname;
              if (paymentInfoHtml && curLocationPathname.endsWith('/ReserveTime/SummaryPage')) {
                             if (paymentInfoHtml.match(/\d/).length > 0) {
                                           var firstDigitVal = paymentInfoHtml.match(/\d/)[0];
                                           if (firstDigitVal) {
                                                          var replacedWithDollarSign = paymentInfoHtml.replace(/\d/, '$' + firstDigitVal);
                                                          $('.payment-info').empty();
                                                          $('.payment-info').html(replacedWithDollarSign);
                                           }
                             }
              }
}
addDollarSignToPaymentInfoPrice();

// Change "Cart" text to h2
//      Assuming a div with both classes "mdc-layout-grid__inner" and "section-with-top-margin" is present underneath the form element with id "mainForm"
//      and has a child div with both classes "mdc-layout-grid__cell" and "mdc-layout-grid__cell--span-9"
//      with no further child elements and has the text "Cart" as it's text, this function removes the plain text "Cart"
//      and adds a h2 element with the value "Cart"
//      if the pathname is */ReserveTime/SummaryPage
var replaceCartInlineTextWithH2 = function () {

              var paymentInfoHtml = $('.payment-info').html();
    var curLocationPathname = location.pathname;

    if (paymentInfoHtml && curLocationPathname.endsWith('/ReserveTime/SummaryPage')) {

        var mainDivs = $('form[id=mainForm]').find('div.mdc-layout-grid__inner.section-with-top-margin');

        $(mainDivs).each(function () {
            var innerDiv = $(this).find('div.mdc-layout-grid__cell.mdc-layout-grid__cell--span-9');
            var innerDivChildrenLen = $(innerDiv).children().length;
            if (innerDivChildrenLen === 0) {
                var innerDivNormalizedText = $(innerDiv).text().trim();
                if (innerDivNormalizedText === 'Cart') {
                    $(innerDiv).empty();
                    $(innerDiv).append('<h2>Cart</h2>')
                }
            }
        }
        );

    }

}

replaceCartInlineTextWithH2();

// Align price value inside paragraph tag
//      Assuming a div with class 'payment-info' is present containing an inner structure with the price label inside a <p>
//      and a colon and dollar value afterwards not wrapped in any tag
//      change the structure to move the color and dollar value inside the <p> tag
//      Ex: Assuming input structure:
//          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-7 payment-info col-xs-12 col-sm-8 col-md-9">
//              <p>Price</p>: $267.00 CAD
//          </div>
//      Run if the pathname is */ReserveTime/SummaryPage
var movePriceValueIntoParagraphTag = function() {
              var paymentInfoHtml = $('.payment-info').html();
              var curLocationPathname = location.pathname;
              if (paymentInfoHtml && curLocationPathname.endsWith('/ReserveTime/SummaryPage')) {
        var normalizedHtmlVal = $('div.payment-info').html().trim();
        var components = normalizedHtmlVal.split('</p>');
        if (components.length === 2) {
            var colonAndPriceVal = components[1];
            var newPriceTagStart = '<p>Price';
            var newPriceTagEnd = '</p>';
            $('div.payment-info').html(newPriceTagStart + colonAndPriceVal + newPriceTagEnd);
        }
              }
}
movePriceValueIntoParagraphTag();

//remove stock stylesheet
$('link[rel=stylesheet][href*="css/site.css"]').remove();

// if first element isn't the breadcrumb, move it to under the breadcrumb.
// check if the first element is the breadcrumb (= 0 if not)
var firstElement = $(".body-layout div:not([style*='display: none']").eq(0);
if(firstElement.find("#breadcrumbs").length == 0) {
	//first element isn't the breadcrumb.  move it to under the breadcrumb.
	firstElement.insertAfter($("#breadcrumbs").parent());
}


var breadcrumbHtml = `<nav id="breadcrumbs" role="navigation" aria-label="breadcrumb">
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
$(header).append(breadcrumbHtml);

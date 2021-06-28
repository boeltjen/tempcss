//remove stock stylesheet
$('link[rel=stylesheet][href*="bundle.css"]').remove();

// if first element isn't the breadcrumb, move it to under the breadcrumb.
// check if the first element is the breadcrumb (= 0 if not)
var firstElement = $(".body-layout div:not([style*='display: none']").eq(0);
if(firstElement.find("#breadcrumbs").length == 0) {
	//first element isn't the breadcrumb.  move it to under the breadcrumb.
	firstElement.insertAfter($("#breadcrumbs").parent());
}

$(".button, .mdc-button").addClass("btn btn-primary");

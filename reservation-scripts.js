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


var appointmentDateSections = [];
$("div.date.one-queue").each(function() {
	var tempDateTitle = $(this).find("a.title").eq(0).text().trim();
	var tempDateTitleId = tempDateTitle.replace(/[^a-zA-Z0-9]/g, '');
	var tempDateTitleHeaderId = tempDateTitleId+"-header";
	var tempDateHeaderEle = $("<h2/>")
		.attr({
		  "data-type":"toggle",
		  "aria-controls":tempDateTitleId,
		  "aria-expanded":"false",
		  "id": tempDateTitleHeaderId
		})
		.text(tempDateTitle);
	
	var tempInnerDiv = $("<div/>")
		.attr({
		  "id":tempDateTitleId,
		});
		
		
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

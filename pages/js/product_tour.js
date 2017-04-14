// Define the tutorial tour
var tour = {
	id: "main-presentation",
	steps: [
		{
			title: "Simple search",
			content: "Simply search for a marker, tree, etc.",
			target: document.querySelector("#simpleSearch"),
			placement: "bottom",
			xOffset: "center",
			yOffset: -15
		},
		{
			title: "Advanced search",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			target: document.querySelector("#tour-search"),
			placement: "right",
			xOffset: -15,
			yOffset: -12
		},
		{
			title: "Visualizations",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			target: document.querySelector("#tour-visualizations"),
			placement: "right",
			xOffset: -15,
			yOffset: -12
		},
		{
			title: "Task manager",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			target: document.querySelector("#newBtn"),
			placement: "bottom"
		},
		{
			title: "Log in",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			target: document.querySelector("#tour-login"),
			placement: "left"
		}
	],
	showPrevButton: true,
	showCloseButton: true
};
// Start the tour!
document.querySelector("#start-tour").addEventListener("click", function(){
	hopscotch.startTour(tour);
}, true);
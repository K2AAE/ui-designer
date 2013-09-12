// Bootstrap the Application
var app = angular.module('App', ['element.builder', 'ui.bootstrap']).run(function(elementService) {
    elementService.elements = [
		{
			"uid" : 1,
			"name":"Row",
			"template":"row",
			"elements" : [
				{
					"uid" : 3,
					"name" : "Column",
					"columns" : 4,
					"template":"column",
					"elements": [
						{
							"uid" : 42,
							"name" : "Panel",
							"template":"panel",
							"title" : "Panel",
							"color" : "default",
							"elements": [
								{
									"uid" : 420,
									"name" : "Group",
									"template":"form_group_vertical",
									"label" : "Lastname",
									"elements": [
										{
											"uid" : 421,
											"name" : "Text",
											"template":"input",
											"placeholder" : "Last Name",
											"ngmodel" : ""
										}
									]	
								},
								
								{
									"uid" : 444,
									"name" : "Group",
									"template":"form_group_vertical",
									"label" : "Email",
									"elements": [
										{
											"uid" : 441,
											"name" : "Text",
											"template":"input",
											"placeholder" : "Email",
											"ngmodel" : ""
										}
									]	
								},
								
								{
									"uid" : 44,
									"name" : "Button",
									"template":"button",
									"label" : "Click Me",
									"pull" : "right",
									"ngclick" : "info()"
								}
							]
						}
					]
				},
				{
					"uid" : 2,
					"name" : "Column",
					"columns" : 8,
					"template":"column"
				}
			]
		},
		{
			"uid" : 7,
			"name":"test4",
			"template":"row",
			"elements": [
				{
					"uid" : 8,
					"name" : "Column",
					"columns" : 6,
					"template":"column",
					"elements": [
						{
							"uid" : 9,
							"name" : "Text",
							"template":"text",
							"text" : "This is a normal text element"
						}
					]
				}
			]
		}
	];
});
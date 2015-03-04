var comic = $("#comic");

var aftercomic = $("#aftercomic").clone();
aftercomic.css({"display": "block",
                "position": "static"});

var aftercomicContainer = $("<div></div>");
aftercomicContainer.css({"background-color": "#CCC",
                         "padding-top": "25px",
                         "padding-bottom": "25px",
                         "width": "100%",
                         "border": "1px solid #AAA"});
aftercomicContainer.append(aftercomic);

comic.after(aftercomicContainer);

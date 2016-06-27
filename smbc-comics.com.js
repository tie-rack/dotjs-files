var comic = $("#cc-comic");
var comicContainer = comic.parent();

// Title tag!
var titleP = $("<div></div>");
titleP.css({"font-variant": "normal",
            "border": "1px solid yellow",
            "padding": "1em",
            "margin": "10px 20px",
            "background-color": "#FFFFCC"});
titleP.text(comic.attr("title"));
comicContainer.after(titleP);

// Aftercomic!
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

comicContainer.after(aftercomicContainer);

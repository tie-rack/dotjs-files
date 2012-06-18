var comic = $("div#comic img[title]");
var titleP = $("<div></div>");
titleP.css({"font-variant": "normal",
            "border": "1px solid yellow",
            "padding": "1em",
            "margin": "10px 20px",
            "background-color": "#FFFFCC"});
titleP.text(comic.attr("title"));
comic.after(titleP);

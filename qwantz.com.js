var css = {"font-variant": "normal",
           "border": "1px solid yellow",
           "padding": "1em",
           "margin": "10px 20px",
           "background-color": "#FFFFCC"};

var comic = $(".comic")

var titleP = $("<div></div>");
titleP.text(comic.attr("title"));
titleP.css(css);

var mailhref = $('a[href^="mailto"]').attr("href");
var subject = mailhref.slice(mailhref.indexOf("=") + 1);

var mailP = $("<div></div>");
mailP.text(subject);
mailP.css(css);

comic.after(mailP);
comic.after(titleP);

var comics = $('img[src^="http://www.smbc-comics.com/comics/"]');

var comic = comics.filter(function(_, element) {
  return ($(element).
            attr('src').
            match(/http:\/\/www.smbc-comics.com\/comics\/\d+\./));
  });

var aftercomic = comics.filter(function(_, element) {
  return ($(element).
          attr('src').
          match(/http:\/\/www.smbc-comics.com\/comics\/\d+after\./));
  }).clone();

var aftercomicContainer = $("<div></div>");
aftercomicContainer.css({"background-color": "#CCC",
                         "padding-top": "25px",
                         "padding-bottom": "25px",
                         "width": "100%",
                         "border": "1px solid #AAA"});
aftercomicContainer.append(aftercomic);

comic.after(aftercomicContainer);

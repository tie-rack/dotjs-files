var _TR = {
  authorIdMatcher: function(c) { return c.match(/^id-/); },
  authorId: function(e) { return $(e).attr("class").split(" ").filter(_TR.authorIdMatcher)[0]; },
  authorNote: function(authorId) { return localStorage.getItem(authorId); },
  authorSpanClass: function(authorId) { return "author-" + authorId; },
  authorSpan: function(authorId) {
    var note = _TR.authorNote(authorId);
    if (note) {
      var span = $("<span />");
      span.css({"background": "green",
                      "color": "white",
                      "padding-left": "0.5em",
                      "padding-right": "0.5em",
                      "font-weight": "bold",
                      "border-radius": "3px"});
      span.text(note);
      span.addClass(_TR.authorSpanClass(authorId));
      return span;
    }
  },
  deleteLink: function(authorId) {
    var link = $("<a />");
    link.text("-");
    link.attr("href", "#");
    link.addClass(_TR.authorSpanClass(authorId));
    link.click(function(e) {
      localStorage.removeItem(authorId);
      $("."+_TR.authorSpanClass(authorId)).remove();
      e.preventDefault();
    });
    return link;
  }
}

$("a.title").attr("target", "_blank");

$("a.author").each(function(i,e) {
  var authorId = _TR.authorId(e);

  var noteField = $("<input />");
  noteField.css({"display": "none"});
  noteField.blur(function() {
    localStorage.setItem(authorId, noteField.val());
    noteField.toggle();
    $("."+_TR.authorSpanClass(authorId)).remove();
    $("a." + authorId).each(function(_,el) {
      $(el).after(_TR.deleteLink(authorId));
      $(el).after(_TR.authorSpan(authorId));
    });
  });

  var noteFieldToggle = $("<a />");
  noteFieldToggle.text("+");
  noteFieldToggle.attr("href", "#");
  noteFieldToggle.click(function(e) {
    $(noteField).toggle();
    e.preventDefault();
  });

  $(e).after(noteField);
  $(e).after(noteFieldToggle);

  var span = _TR.authorSpan(authorId);
  if(span) {
    $(e).after(_TR.deleteLink(authorId));
    $(e).after(span);
  }
});

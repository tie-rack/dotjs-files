var _TR = {
  authorIdMatcher: function(c) { return c.match(/^id-/); },
  authorId: function(e) { return $(e).attr("class").split(" ").filter(_TR.authorIdMatcher)[0]; },
  authorNote: function(authorId) { return localStorage.getItem(authorId); },
  authorSpanClass: function(authorId) { return "author-" + authorId; },
  authorSpanHue: function(note) {
    var hash = 1, i, char;
    if (note.length == 0) return hash;
    for (i = 0; i < note.length; i++) {
      char = note.charCodeAt(i);
      hash = hash + (char * char + char);
    }
    return hash % 360;
  },
  authorSpan: function(authorId) {
    var note = _TR.authorNote(authorId);
    if (note) {
      var span = $("<span />");
      span.css({"background": "hsl(" + _TR.authorSpanHue(note) + ", 100%, 25%)",
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
    noteField.toggle();
    var val = noteField.val();
    if(val) {
      localStorage.setItem(authorId, noteField.val());
      $("."+_TR.authorSpanClass(authorId)).remove();
      $("a." + authorId).each(function(_,el) {
        $(el).after(_TR.deleteLink(authorId));
        $(el).after(_TR.authorSpan(authorId));
      });
    }
  });

  var noteFieldToggle = $("<a />");
  noteFieldToggle.text("+");
  noteFieldToggle.attr("href", "#");
  noteFieldToggle.click(function(e) {
    $(noteField).toggle().focus();
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

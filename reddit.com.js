var _TR = {
  authorIdMatcher: function(c) { return c.match(/^id-/); },
  authorId: function(e) { return $(e).attr("class").split(" ").filter(_TR.authorIdMatcher)[0]; },
  authorNote: function(authorId) { return localStorage.getItem(authorId); },
  writeAuthorNote: function(authorId, note) { localStorage.setItem(authorId, note); }
}

$("a.title").attr("target", "_blank");

$("a.author").each(function(i,e) {
  var authorId = _TR.authorId(e);

  var noteField = $("<input />");
  noteField.css({'display': 'none'});
  noteField.blur(function() { localStorage.setItem(authorId, noteField.val()); noteField.toggle(); });

  var noteFieldToggle = $("<a />");
  noteFieldToggle.text("+");
  noteFieldToggle.attr("href", "#");
  noteFieldToggle.click(function(e) {
    $(noteField).toggle();
    e.preventDefault();
  });

  $(e).after(noteField);
  $(e).after(noteFieldToggle);

  var authorNote = _TR.authorNote(authorId);
  if(authorNote) {
    var authorSpan = $("<span />");
    authorSpan.css({'background': 'green',
                    'color': 'white',
                    'padding-left': '0.5em',
                    'padding-right': '0.5em',
                    'font-weight': 'bold',
                    'border-radius': '3px'});
    authorSpan.text(authorNote);

    var deleteLink = $("<a />");
    deleteLink.text("-");
    deleteLink.attr("href", "#");
    deleteLink.click(function(e) {
      localStorage.removeItem(authorId);
      deleteLink.remove();
      authorSpan.remove();
      e.preventDefault();
    });

    $(e).after(deleteLink);
    $(e).after(authorSpan);
  }
});

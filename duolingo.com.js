if(window.location.pathname === "/") {
  var lessonsLeft = Array.prototype.map.call($(".lessons-left"),
                                             function(e) { return e.innerHTML; }).
                                               filter(function(e) { return e !== ""; }).
                                               map(function(e) { return e.split("/"); }).
                                               reduce(function(prev,curr,i,a) { return prev - parseInt(curr[0]) + parseInt(curr[1]); }, 0);
  document.title = document.title + " (" + lessonsLeft + ")";
}

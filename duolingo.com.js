function updateTitle() {
  if(window.location.pathname === "/") {
    var lessonsLeft = Array.prototype.map.call($(".lessons-left"),
                                               function(e) { return e.innerHTML; }).
      filter(function(e) { return e !== ""; }).
      map(function(e) { return e.split("/"); }).
      reduce(function(prev,curr,i,a) { return prev - parseInt(curr[0]) + parseInt(curr[1]); }, 0);

    var strengtheningToDo = $(".strength-4").length +
      $(".strength-3").length * 2 +
      $(".strength-2").length * 3 +
      $(".strength-1").length * 4 +
      $(".strength-0").length * 5;

    document.title = "Duo (" + strengtheningToDo + "|" + lessonsLeft + ")";
  }
}

updateTitle();

__d(
  "WAWebMaxVisiblePillCount",
  ["WAWebChatSearchFilters"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = 0,
        a = 0;
      for (var i of e)
        if (
          !(
            i.filter === o("WAWebChatSearchFilters").SearchFilters.TO_YOU &&
            i.listId == null
          )
        ) {
          var l = a === 0 ? i.width : i.width + n;
          if (r + l > t) break;
          ((r += l), a++);
        }
      return a;
    }
    l.computeMaxVisiblePillCount = e;
  },
  98,
);

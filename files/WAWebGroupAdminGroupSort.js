__d(
  "WAWebGroupAdminGroupSort",
  ["WAWebChatSortTime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return [].concat(e).sort(t === "name" ? u : s);
    }
    function s(e, t) {
      return (
        o("WAWebChatSortTime").getChatSortTime(t) -
          o("WAWebChatSortTime").getChatSortTime(e) || u(e, t)
      );
    }
    function u(e, t) {
      return e.title().localeCompare(t.title());
    }
    ((l.sortAdminGroups = e), (l.compareByRecent = s));
  },
  98,
);

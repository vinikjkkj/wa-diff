__d(
  "WAWebGroupAdminGroupSort",
  ["WAWebChatSortTime", "WAWebFrontendChatGetters"],
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
      return o("WAWebFrontendChatGetters")
        .getFormattedTitle(e)
        .localeCompare(o("WAWebFrontendChatGetters").getFormattedTitle(t));
    }
    ((l.sortAdminGroups = e), (l.compareByRecent = s));
  },
  98,
);

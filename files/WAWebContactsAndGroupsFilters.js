__d(
  "WAWebContactsAndGroupsFilters",
  ["WAWebInboxFiltersGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return typeof e == "string" ? e : "list:" + e.listId;
    }
    function s(e, t) {
      if (e === "favorites")
        return o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled();
      if (typeof e == "string") return !0;
      var n = e.listId;
      return t.some(function (e) {
        return e.id === n;
      });
    }
    ((l.getFilterKey = e), (l.isFilterAvailable = s));
  },
  98,
);

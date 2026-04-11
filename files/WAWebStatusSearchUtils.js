__d(
  "WAWebStatusSearchUtils",
  [
    "WAWebABProps",
    "WAWebContactGetters",
    "WAWebStatusCollection",
    "WAWebStatusVisibilityUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = [],
        t = [],
        n = [],
        r = o("WAWebStatusCollection").StatusCollection.getValidStatus();
      for (var a of r)
        o("WAWebStatusVisibilityUtils").isUserOrTrustedGroupOrNewsletterStatus(
          a,
        ) &&
          (a.unreadCount > 0 ? e.push(a) : t.push(a),
          o("WAWebContactGetters").getCalculatedStatusMute(a.contact) &&
            n.push(a));
      return { unread: e, read: t, muted: n };
    }
    function s() {
      var t = e(),
        n = t.muted,
        r = t.read,
        a = t.unread,
        i = n.length > 0;
      return {
        unread: a.filter(function (e) {
          return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
        }),
        read: r.filter(function (e) {
          return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
        }),
        hasMutedStatuses: i,
      };
    }
    function u(e, t) {
      if (t == null || t.trim() === "") return e;
      var n = t.toLowerCase().trim();
      return e.filter(function (e) {
        var t,
          r,
          o =
            (t =
              (r = e.contact) == null || (r = r.name) == null
                ? void 0
                : r.toLowerCase()) != null
              ? t
              : "";
        return o.includes(n);
      });
    }
    function c(t) {
      var n = e(),
        r = n.read,
        a = n.unread,
        i = [].concat(a, r).filter(function (e) {
          return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
        });
      return u(i, t).length > 0;
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "aura_status_search_max_viewers",
      );
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "aura_status_search_timeout_threshold",
        ) * 1e3
      );
    }
    ((l.getStatusData = e),
      (l.getFilteredStatusLists = s),
      (l.filterStatusesBySearchQuery = u),
      (l.hasStatusesMatchingSearch = c),
      (l.getAuraStatusSearchMaxViewers = d),
      (l.getAuraStatusSearchTimeoutThreshold = m));
  },
  98,
);

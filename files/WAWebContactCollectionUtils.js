__d(
  "WAWebContactCollectionUtils",
  [
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.cancelAt,
        a = n === void 0 ? null : n,
        i = t.filterFn,
        l = i === void 0 ? null : i,
        s = t.showMe,
        u = s === void 0 ? !1 : s,
        c = t.showWithoutName,
        d = c === void 0 ? !1 : c,
        m = o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts(),
        p = [];
      for (var _ of e._models) {
        if (a != null && p.length >= a) {
          p = [];
          break;
        }
        if (!(m && !_.id.isLid())) {
          {
            if (!m && _.id.isLid()) continue;
            if (_.id.isBot()) continue;
            if (r("WAWebWid").isPSA(_.id)) continue;
            if (o("WAWebContactGetters").getIsMe(_)) {
              if (u) {
                if (l != null && l(_) !== !0) continue;
                p.push(_);
              }
              continue;
            }
          }
          ((!(_.name || d) || !o("WAWebContactGetters").getIsWAContact(_)) &&
            !o("WAWebFrontendContactGetters").getIsUsernameContact(_)) ||
            (_.isActive() && ((l != null && l(_) !== !0) || p.push(_)));
        }
      }
      return p.sort(o("WAWebContactComparator").ContactComparator);
    }
    l.getFilteredContacts = e;
  },
  98,
);

__d(
  "WAWebContactCollectionUtils",
  [
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = t.cancelAt,
        r = n === void 0 ? null : n,
        a = t.filterFn,
        i = a === void 0 ? null : a,
        l = t.showMe,
        u = l === void 0 ? !1 : l,
        c = t.showWithoutName,
        d = c === void 0 ? !1 : c,
        m = [];
      for (var p of e._models) {
        if (r != null && m.length >= r) {
          m = [];
          break;
        }
        s(p, { filterFn: i, showMe: u, showWithoutName: d }) && m.push(p);
      }
      return m.sort(o("WAWebContactComparator").ContactComparator);
    }
    function s(e, t) {
      var n = t.filterFn,
        a = n === void 0 ? null : n,
        i = t.showMe,
        l = i === void 0 ? !1 : i,
        s = t.showWithoutName,
        u = s === void 0 ? !1 : s;
      if (e.id.isLid()) {
        if (e.id.isBot()) return !1;
        if (r("WAWebWid").isPSA(e.id)) return !1;
        if (o("WAWebContactGetters").getIsMe(e))
          return l && (a == null || a(e) === !0);
      } else return !1;
      return !(
        ((!(e.name || u) || !o("WAWebContactGetters").getIsWAContact(e)) &&
          !o("WAWebFrontendContactGetters").getIsUsernameContact(e)) ||
        !e.isActive() ||
        (a != null && a(e) !== !0)
      );
    }
    ((l.getFilteredContacts = e), (l.passesContactFilter = s));
  },
  98,
);

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
        r = n === void 0 ? null : n,
        a = t.filterFn,
        i = a === void 0 ? null : a,
        l = t.showMe,
        u = l === void 0 ? !1 : l,
        c = t.showWithoutName,
        d = c === void 0 ? !1 : c,
        m = o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts(),
        p = [];
      for (var _ of e._models) {
        if (r != null && p.length >= r) {
          p = [];
          break;
        }
        s(_, m, { filterFn: i, showMe: u, showWithoutName: d }) && p.push(_);
      }
      return p.sort(o("WAWebContactComparator").ContactComparator);
    }
    function s(e, t, n) {
      var a = n.filterFn,
        i = a === void 0 ? null : a,
        l = n.showMe,
        s = l === void 0 ? !1 : l,
        u = n.showWithoutName,
        c = u === void 0 ? !1 : u;
      return (t && !e.id.isLid()) ||
        (!t && e.id.isLid()) ||
        e.id.isBot() ||
        r("WAWebWid").isPSA(e.id)
        ? !1
        : o("WAWebContactGetters").getIsMe(e)
          ? s && (i == null || i(e) === !0)
          : !(
              ((!(e.name || c) ||
                !o("WAWebContactGetters").getIsWAContact(e)) &&
                !o("WAWebFrontendContactGetters").getIsUsernameContact(e)) ||
              !e.isActive() ||
              (i != null && i(e) !== !0)
            );
    }
    ((l.getFilteredContacts = e), (l.passesContactFilter = s));
  },
  98,
);

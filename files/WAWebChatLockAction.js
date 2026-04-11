__d(
  "WAWebChatLockAction",
  [
    "WAWebChatCollection",
    "WAWebDBUpdateChatTable",
    "WAWebLockChatSync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = t ? { isLocked: t, archive: !1, pin: void 0 } : { isLocked: t };
          (yield o("WAWebDBUpdateChatTable").updateChatTable(e, r),
            (n = o("WAWebChatCollection").ChatCollection.get(e)) == null ||
              n.set(r));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, o) {
          var a = o != null ? o : {},
            i = a.syncWithPrimaries,
            l = i === void 0 ? !0 : i;
          return (
            l && r("WAWebLockChatSync").sendLockMutation(t, { isLocked: n }),
            e(t, n)
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return u(e, !0, t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return u(e, !1, t);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.setChatAsLocked = d), (l.setChatAsUnlocked = p));
  },
  98,
);

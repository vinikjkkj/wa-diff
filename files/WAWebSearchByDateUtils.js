__d(
  "WAWebSearchByDateUtils",
  [
    "WAWebDBSearchByDate",
    "WAWebMsgKey",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return Math.floor(e / 1e3);
    }
    function s(e, t, n) {
      var o = null;
      return (
        e != null && t != null
          ? n
            ? (o = e.t >= t.t ? e.id : t.id)
            : (o = e.t <= t.t ? e.id : t.id)
          : e
            ? (o = e.id)
            : t && (o = t.id),
        o != null ? r("WAWebMsgKey").fromString(o) : null
      );
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
                "WAWebDBSearchByDate",
              ).getClosestMessageBetweenDates(e, t, n, !0, r),
              i = yield o("WAWebDBSearchByDate").getClosestMessageBetweenDates(
                e,
                t,
                n,
                !1,
                r,
              );
            return s(a, i, r);
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = e(n.getTime()),
            a =
              o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate() * 1e3,
            i = new Date().getTime(),
            l = yield u(t, r, i, !1);
          if (l != null) return l;
          var s = yield u(t, a, r, !0);
          return (s != null, s);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.fromMillisecondsToSeconds = e), (l.getClosestMessageFromDate = d));
  },
  98,
);

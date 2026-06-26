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
    function s(e) {
      var t = e.beforeSearch,
        n = e.incomingCandidate,
        o = e.outgoingCandidate,
        a = null;
      return (
        n != null && o != null
          ? t
            ? (a = n.t >= o.t ? n.id : o.id)
            : (a = n.t <= o.t ? n.id : o.id)
          : n
            ? (a = n.id)
            : o && (a = o.id),
        a != null ? r("WAWebMsgKey").fromString(a) : null
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
              ).getClosestMessageBetweenDates({
                chatId: e,
                endTimestampSeconds: n,
                incoming: !0,
                searchingBefore: r,
                startTimestampSeconds: t,
              }),
              i = yield o("WAWebDBSearchByDate").getClosestMessageBetweenDates({
                chatId: e,
                endTimestampSeconds: n,
                incoming: !1,
                searchingBefore: r,
                startTimestampSeconds: t,
              });
            return s({
              beforeSearch: r,
              incomingCandidate: a,
              outgoingCandidate: i,
            });
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
            i = Date.now(),
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

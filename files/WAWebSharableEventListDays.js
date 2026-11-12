__d(
  "WAWebSharableEventListDays",
  ["WAWebSharableEventTiming"],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(e, t) {
      var n = p(t);
      return m(e, function (e) {
        return Math.max(e.startTsSec, n);
      });
    }
    function u(e, t, n) {
      return (
        e.startTsSec - n <= t &&
        t <
          o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(e)
      );
    }
    function c(e, t, n) {
      var r = null;
      return (
        e.forEach(function (e) {
          [
            e.startTsSec - n,
            o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(
              e,
            ),
          ].forEach(function (e) {
            e > t && (r == null || e < r) && (r = e);
          });
        }),
        r
      );
    }
    function d(e) {
      return m(e, function (e) {
        return e.startTsSec;
      });
    }
    function m(e, t) {
      var n = null;
      return e.map(function (e) {
        var r = t(e),
          o = _(r),
          a = o !== n;
        return ((n = o), { event: e, dayTsSec: r, isFirstOfDay: a });
      });
    }
    function p(t) {
      var n = new Date(t * e);
      return (n.setHours(0, 0, 0, 0), Math.floor(n.getTime() / e));
    }
    function _(t) {
      var n = new Date(t * e);
      return n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate();
    }
    ((l.groupUpcomingSharableEventsByDay = s),
      (l.isSharableEventHighlighted = u),
      (l.getNextSharableEventHighlightChangeSec = c),
      (l.groupPastSharableEventsByDay = d));
  },
  98,
);

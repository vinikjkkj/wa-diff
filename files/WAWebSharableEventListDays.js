__d(
  "WAWebSharableEventListDays",
  ["WAWebSharableEventTiming"],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(e, t) {
      var n = m(t);
      return d(e, function (e) {
        return Math.max(e.startTsSec, n);
      });
    }
    function u(e, t) {
      var n = e.filter(function (e) {
        return (
          e.startTsSec <= t &&
          t <
            o("WAWebSharableEventTiming").computeSharableEventEffectiveEndTsSec(
              e,
            )
        );
      });
      return n.length > 0
        ? n
        : e
            .filter(function (e) {
              return e.startTsSec > t;
            })
            .slice(0, 1);
    }
    function c(e) {
      return d(e, function (e) {
        return e.startTsSec;
      });
    }
    function d(e, t) {
      var n = null;
      return e.map(function (e) {
        var r = t(e),
          o = p(r),
          a = o !== n;
        return ((n = o), { event: e, dayTsSec: r, isFirstOfDay: a });
      });
    }
    function m(t) {
      var n = new Date(t * e);
      return (n.setHours(0, 0, 0, 0), Math.floor(n.getTime() / e));
    }
    function p(t) {
      var n = new Date(t * e);
      return n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate();
    }
    ((l.groupUpcomingSharableEventsByDay = s),
      (l.getFeaturedSharableEvents = u),
      (l.groupPastSharableEventsByDay = c));
  },
  98,
);

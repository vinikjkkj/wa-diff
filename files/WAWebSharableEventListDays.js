__d(
  "WAWebSharableEventListDays",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e3;
    function l(e, t) {
      var n = c(t);
      return u(e, function (e) {
        return Math.max(e.startTsSec, n);
      });
    }
    function s(e) {
      return u(e, function (e) {
        return e.startTsSec;
      });
    }
    function u(e, t) {
      var n = null;
      return e.map(function (e) {
        var r = t(e),
          o = d(r),
          a = o !== n;
        return ((n = o), { event: e, dayTsSec: r, isFirstOfDay: a });
      });
    }
    function c(t) {
      var n = new Date(t * e);
      return (n.setHours(0, 0, 0, 0), Math.floor(n.getTime() / e));
    }
    function d(t) {
      var n = new Date(t * e);
      return n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate();
    }
    ((i.groupUpcomingSharableEventsByDay = l),
      (i.groupPastSharableEventsByDay = s));
  },
  66,
);

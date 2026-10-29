__d(
  "WAWebSharableEventGuestListDrawerWidth",
  [],
  function (t, n, r, o, a, i) {
    var e = null,
      l = new Set();
    function s(t, n, r) {
      var o,
        a = ((o = e) == null ? void 0 : o.drawer) === t ? e : null;
      if (r == null) {
        if (a == null) return;
        e = null;
      } else {
        if (a != null && a.widthPx === r) return;
        e = { drawer: t, eventId: n, widthPx: r };
      }
      l.forEach(function (e) {
        return e();
      });
    }
    function u(t) {
      var n = e;
      return n != null && n.eventId === t ? n.widthPx : 0;
    }
    function c(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    ((i.reportSharableEventGuestListDrawerWidth = s),
      (i.getSharableEventGuestListDrawerWidth = u),
      (i.subscribeToSharableEventGuestListDrawerWidth = c));
  },
  66,
);

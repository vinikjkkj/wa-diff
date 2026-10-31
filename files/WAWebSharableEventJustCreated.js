__d(
  "WAWebSharableEventJustCreated",
  [],
  function (t, n, r, o, a, i) {
    var e = 3e3,
      l = null;
    function s(t) {
      l = { eventId: t, untilMs: Date.now() + e };
    }
    function u(e) {
      var t = l;
      return t != null && t.eventId === e && Date.now() < t.untilMs;
    }
    ((i.markSharableEventJustCreated = s), (i.isSharableEventJustCreated = u));
  },
  66,
);

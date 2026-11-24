__d(
  "WAWebStanzasInFlight",
  ["Promise", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2e4,
      u = new Set();
    function c(e, t) {
      var n = { handled: e, isOffline: t };
      (u.add(n),
        e
          .finally(function () {
            return u.delete(n);
          })
          .catch(r("WAWebNoop")));
    }
    function d(t) {
      var o = t.includeOnline,
        a = Array.from(u)
          .filter(function (e) {
            var t = e.isOffline;
            return o || t;
          })
          .map(function (e) {
            var t = e.handled;
            return t;
          });
      return a.length === 0
        ? null
        : (e || (e = n("Promise"))).allSettled(a).then(r("WAWebNoop"));
    }
    ((l.STANZA_HANDLING_P99_MS = s),
      (l.trackStanzaInFlight = c),
      (l.waitForStanzasInFlight = d));
  },
  98,
);

__d(
  "WAWebVoipWebTransportCallSummary",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        Opened: "opened",
        Timeout: "timeout",
        Aborted: "aborted",
        Failed: "failed",
      }),
      l = [];
    function s(e) {
      l.push({
        connectionId: e,
        startMs: Date.now(),
        elapsedMs: null,
        outcome: null,
        likelyCause: null,
      });
    }
    function u(e, t, n) {
      for (var r = l.length - 1; r >= 0; r--) {
        var o = l[r];
        if (o.connectionId === e && o.outcome == null) {
          ((o.elapsedMs = Date.now() - o.startMs),
            (o.outcome = t),
            (o.likelyCause = n));
          return;
        }
      }
    }
    function c() {
      return l.length > 0;
    }
    function d() {
      var t = 0;
      for (var n of l) n.outcome === e.Opened && t++;
      return { numRelayAttempts: l.length, numOpened: t, attempts: l.slice() };
    }
    function m() {
      l = [];
    }
    ((i.WtRelayOutcome = e),
      (i.recordWtRelayAttemptStart = s),
      (i.recordWtRelayAttemptComplete = u),
      (i.hasWtActivityThisCall = c),
      (i.getWtCallSummary = d),
      (i.resetWtCallSummary = m));
  },
  66,
);

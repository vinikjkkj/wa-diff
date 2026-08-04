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
      l = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.recordAttemptStart = function (t) {
            this.$1.push({
              connectionId: t,
              startMs: Date.now(),
              elapsedMs: null,
              outcome: null,
              likelyCause: null,
            });
          }),
          (n.recordAttemptComplete = function (t, n, r) {
            for (var e = this.$1.length - 1; e >= 0; e--) {
              var o = this.$1[e];
              if (o.connectionId === t && o.outcome == null) {
                ((o.elapsedMs = Date.now() - o.startMs),
                  (o.outcome = n),
                  (o.likelyCause = r));
                return;
              }
            }
          }),
          (n.hasActivity = function () {
            return this.$1.length > 0;
          }),
          (n.snapshot = function () {
            var t = 0;
            for (var n of this.$1) n.outcome === e.Opened && t++;
            return {
              numRelayAttempts: this.$1.length,
              numOpened: t,
              attempts: this.$1.slice(),
            };
          }),
          t
        );
      })(),
      s = new l(),
      u = !1;
    function c(e) {
      (u && ((s = new l()), (u = !1)), s.recordAttemptStart(e));
    }
    function d(e, t, n) {
      s.recordAttemptComplete(e, t, n);
    }
    function m() {
      return s.hasActivity();
    }
    function p() {
      return s.snapshot();
    }
    function _() {
      u = !0;
    }
    ((i.WtRelayOutcome = e),
      (i.recordWtRelayAttemptStart = c),
      (i.recordWtRelayAttemptComplete = d),
      (i.hasWtActivityThisCall = m),
      (i.getWtCallSummary = p),
      (i.markWtCallSummaryClosed = _));
  },
  66,
);

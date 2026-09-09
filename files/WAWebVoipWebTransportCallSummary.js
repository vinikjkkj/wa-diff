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
      u = !1,
      c = !1,
      d = null,
      m = null,
      p = null;
    function _(e, t) {
      if ((t === void 0 && (t = !1), t && !u && c && d == null)) {
        d = e;
        return;
      }
      (!u && c && d != null && ((m = d), (p = s.snapshot())),
        (s = new l()),
        (u = !1),
        (c = !1),
        (d = e));
    }
    function f(e) {
      d = e;
    }
    function g(e) {
      (u && ((s = new l()), (u = !1), (d = null)),
        (c = !0),
        s.recordAttemptStart(e));
    }
    function h(e, t, n) {
      s.recordAttemptComplete(e, t, n);
    }
    function y() {
      return c && s.hasActivity();
    }
    function C() {
      return c
        ? s.snapshot()
        : { attempts: [], numOpened: 0, numRelayAttempts: 0 };
    }
    function b(e) {
      return e == null
        ? c
          ? s.snapshot()
          : null
        : e === m && p != null
          ? p
          : c && (d == null || e === d)
            ? s.snapshot()
            : null;
    }
    function v() {
      (c && ((m = d), (p = s.snapshot())), (u = !0));
    }
    ((i.WtRelayOutcome = e),
      (i.resetWtCurrentCallActivity = _),
      (i.updateWtCurrentCallId = f),
      (i.recordWtRelayAttemptStart = g),
      (i.recordWtRelayAttemptComplete = h),
      (i.hasWtActivityThisCall = y),
      (i.getWtCallSummaryIfCurrent = C),
      (i.getWtCallSummaryForCall = b),
      (i.markWtCallSummaryClosed = v));
  },
  66,
);

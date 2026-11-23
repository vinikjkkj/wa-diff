__d(
  "MaisaResponseVisibilityTracker",
  ["clearTimeout", "performance", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 20,
      u = 3e4,
      c = new Map();
    function d(e) {
      e.firstContentTimer != null &&
        (r("clearTimeout")(e.firstContentTimer), (e.firstContentTimer = null));
    }
    function m(e) {
      var t = c.get(e);
      t != null && (d(t), c.delete(e));
    }
    function p(t, n, o) {
      m(t);
      var a = {
        firstContentTaken: !1,
        firstContentTimer: null,
        sentAtPerfMs: (e || (e = r("performance"))).now(),
        threadID: o,
      };
      if (
        (n != null &&
          (a.firstContentTimer = r("setTimeout")(function () {
            ((a.firstContentTimer = null),
              n(
                Math.round(
                  (e || (e = r("performance"))).now() - a.sentAtPerfMs,
                ),
              ));
          }, u)),
        c.set(t, a),
        c.size > s)
      ) {
        var i = c.keys().next().value;
        i != null && m(i);
      }
    }
    function _(e) {
      m(e);
    }
    function f(e) {
      var t = c.get(e);
      t != null && d(t);
    }
    function g(e) {
      if (e != null) for (var t of c.values()) t.threadID === e && d(t);
    }
    function h(t) {
      var n = c.get(t);
      return n == null || n.firstContentTaken
        ? null
        : ((n.firstContentTaken = !0),
          d(n),
          Math.round((e || (e = r("performance"))).now() - n.sentAtPerfMs));
    }
    function y(t) {
      var n = c.get(t);
      return n == null
        ? null
        : (m(t),
          Math.round((e || (e = r("performance"))).now() - n.sentAtPerfMs));
    }
    ((l.markMaisaTurnSent = p),
      (l.forgetMaisaTurn = _),
      (l.cancelMaisaFirstContentTimeout = f),
      (l.cancelMaisaFirstContentTimeoutsForThread = g),
      (l.takeMaisaFirstContentLatencyMs = h),
      (l.takeMaisaCompleteLatencyMs = y));
  },
  98,
);

__d(
  "setTimeoutCometInternals",
  ["JSScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = 0;
    function c(t) {
      if (t != null) {
        var n = s.get(t);
        n !== void 0 &&
          (s.delete(t),
          (e || (e = r("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(n));
      }
    }
    function d(t) {
      if (t != null) {
        var n = s.get(t);
        n !== void 0 &&
          (s.delete(t),
          (e || (e = r("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(n));
      }
    }
    function m(t, n, o) {
      for (
        var a = arguments.length, i = new Array(a > 3 ? a - 3 : 0), l = 3;
        l < a;
        l++
      )
        i[l - 3] = arguments[l];
      var c = u;
      if (((u += 1), typeof n != "function")) return c;
      var d = function () {
          var a = (
            e || (e = r("JSScheduler"))
          ).scheduleDelayedCallback_DO_NOT_USE(t, o, d);
          (s.set(c, a), n.apply(void 0, i));
        },
        m = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(
          t,
          o,
          d,
        );
      return (s.set(c, m), c);
    }
    function p(t, n, o) {
      for (
        var a = arguments.length, i = new Array(a > 3 ? a - 3 : 0), l = 3;
        l < a;
        l++
      )
        i[l - 3] = arguments[l];
      var c = u;
      if (((u += 1), typeof n != "function")) return c;
      var d = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(
        t,
        o,
        function () {
          (s.delete(c), n.apply(void 0, i));
        },
      );
      return (s.set(c, d), c);
    }
    ((l.clearInterval_DO_NOT_USE = c),
      (l.clearTimeout_DO_NOT_USE = d),
      (l.setIntervalAtPriority_DO_NOT_USE = m),
      (l.setTimeoutAtPriority_DO_NOT_USE = p));
  },
  98,
);

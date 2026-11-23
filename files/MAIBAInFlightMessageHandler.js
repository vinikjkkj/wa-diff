__d(
  "MAIBAInFlightMessageHandler",
  ["MAIBAReactiveMap", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = new (r("MAIBAReactiveMap"))(),
      d = new Set(),
      m = [];
    function p() {
      m = Array.from(u.keys());
      for (var e of d) e();
    }
    function _(e, t) {
      (u.set(e, t), c.set(e, !1), p());
    }
    function f(e, t) {
      (t != null && u.get(e) !== t) || (u.delete(e) && (c.delete(e), p()));
    }
    function g(e) {
      u.has(e) && c.set(e, !0);
    }
    function h(e) {
      return u.has(e);
    }
    function y(e) {
      var t;
      return (t = c.get(e)) != null ? t : !1;
    }
    function C(e, t) {
      return c.subscribe(e, t);
    }
    function b(e) {
      var t = u.get(e);
      (t == null || t(), f(e, t));
    }
    function v(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function S() {
      return s(
        v,
        function () {
          return m;
        },
        function () {
          return m;
        },
      );
    }
    ((l.setStopInflightMessage = _),
      (l.deleteStopInflightMessage = f),
      (l.markStopInflightMessageReady = g),
      (l.hasInflightMessage = h),
      (l.isStopInflightMessageReady = y),
      (l.subscribeStopInflightMessageReady = C),
      (l.stopInflightMessage = b),
      (l.useMAIBAInFlightConversationIds = S));
  },
  98,
);

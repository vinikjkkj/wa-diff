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
    function f(e) {
      u.delete(e) && (c.delete(e), p());
    }
    function g(e) {
      u.has(e) && c.set(e, !0);
    }
    function h(e) {
      var t;
      return (t = c.get(e)) != null ? t : !1;
    }
    function y(e, t) {
      return c.subscribe(e, t);
    }
    function C(e) {
      var t = u.get(e);
      (t == null || t(), f(e));
    }
    function b(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function v() {
      return s(b, R, S);
    }
    function S() {
      return m;
    }
    function R() {
      return m;
    }
    ((l.setStopInflightMessage = _),
      (l.deleteStopInflightMessage = f),
      (l.markStopInflightMessageReady = g),
      (l.isStopInflightMessageReady = h),
      (l.subscribeStopInflightMessageReady = y),
      (l.stopInflightMessage = C),
      (l.useMAIBAInFlightConversationIds = v));
  },
  98,
);

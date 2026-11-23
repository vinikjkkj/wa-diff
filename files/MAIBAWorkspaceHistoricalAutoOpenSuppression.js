__d(
  "MAIBAWorkspaceHistoricalAutoOpenSuppression",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = 0;
    function c() {
      u += 1;
      var e = !1;
      return function () {
        e || ((e = !0), (u -= 1));
      };
    }
    function d() {
      return u > 0;
    }
    var m = new Map(),
      p = new Set();
    function _(e, t) {
      return e + ":" + t;
    }
    function f() {
      for (var e of p) e();
    }
    function g(e) {
      var t,
        n = e.conversationID,
        r = e.workspaceID,
        o = _(n, r);
      (m.set(o, ((t = m.get(o)) != null ? t : 0) + 1), f());
      var a = !1;
      return function () {
        var e;
        if (!a) {
          a = !0;
          var t = ((e = m.get(o)) != null ? e : 1) - 1;
          (t > 0 ? m.set(o, t) : m.delete(o), f());
        }
      };
    }
    function h(e, t) {
      return e != null && m.has(_(e, t));
    }
    function y(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function C(e, t) {
      return s(y, function () {
        return h(e, t);
      });
    }
    ((l.suppressMAIBAWorkspaceHistoricalAutoOpen = c),
      (l.isMAIBAWorkspaceHistoricalAutoOpenSuppressed = d),
      (l.requestMAIBAWorkspaceHistoricalAutoOpen = g),
      (l.isMAIBAWorkspaceHistoricalAutoOpenRequested = h),
      (l.useIsMAIBAWorkspaceHistoricalAutoOpenRequested = C));
  },
  98,
);

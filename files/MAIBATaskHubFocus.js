__d(
  "MAIBATaskHubFocus",
  ["MAIBAChatNavigationContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useSyncExternalStore,
      d = null,
      m = new Set();
    function p() {
      for (var e of m) e();
    }
    function _(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function f() {
      return d;
    }
    function g() {
      var e = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        t = e.isFullScreen,
        n = e.onOpenTasks,
        r = e.onToggleFullScreenChat,
        a = u(
          function (e) {
            ((d = e), p(), t !== !0 && (r == null || r()), n == null || n());
          },
          [t, n, r],
        );
      return n == null ? null : a;
    }
    function h() {
      return g();
    }
    function y() {
      var e = g(),
        t = u(
          function () {
            e == null || e(null);
          },
          [e],
        );
      return e == null ? null : t;
    }
    function C() {
      return c(_, f, f);
    }
    function b() {
      d != null && ((d = null), p());
    }
    ((l.useMAIBAOpenTaskInHub = h),
      (l.useMAIBAOpenTaskHub = y),
      (l.useMAIBAFocusedTaskId = C),
      (l.clearMAIBAFocusedTask = b));
  },
  98,
);

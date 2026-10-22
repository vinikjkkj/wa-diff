__d(
  "CometMouseActivity",
  ["clearTimeout", "removeFromArray", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50,
      s = [],
      u = [],
      c = null,
      d = 5e3,
      m = [],
      p = -1 / 0;
    function _() {
      (s.length > 0 &&
        s.forEach(function (e) {
          return e();
        }),
        u.length > 0 &&
          (u.forEach(function (e) {
            return e();
          }),
          (u = [])),
        (c = null));
    }
    function f() {
      (r("clearTimeout")(c),
        (c = r("setTimeout")(function () {
          _();
        }, e)));
    }
    function g(e) {
      (r("clearTimeout")(e.timerID),
        r("clearTimeout")(e.expireTimerID),
        r("removeFromArray")(m, e));
    }
    function h(e) {
      (r("clearTimeout")(e.timerID),
        (e.timerID = r("setTimeout")(function () {
          (g(e), e.callback());
        }, e.restMs)));
    }
    function y() {
      ((p = Date.now()), f(), m.forEach(h));
    }
    var C = !1;
    function b() {
      return (
        C || (window.addEventListener("mousemove", y), (C = !0)),
        function () {
          window.removeEventListener("mousemove", y);
        }
      );
    }
    function v(e) {
      return (
        C || b(),
        s.push(e),
        function () {
          r("removeFromArray")(s, e);
        }
      );
    }
    function S(e) {
      return (
        C || b(),
        u.push(e),
        function () {
          r("removeFromArray")(u, e);
        }
      );
    }
    function R(t, n) {
      C || b();
      var o = { callback: t, expireTimerID: null, restMs: n, timerID: null };
      return (
        (o.expireTimerID = r("setTimeout")(function () {
          return g(o);
        }, d)),
        m.push(o),
        Date.now() - p <= e && h(o),
        function () {
          return g(o);
        }
      );
    }
    var L = {
        addOnMouseRestCallbackOnce: R,
        addOnMouseStopCallback: v,
        addOnMouseStopCallbackOnce: S,
        init: b,
      },
      E = L;
    l.default = E;
  },
  98,
);

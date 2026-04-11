__d(
  "CometMouseActivity",
  ["clearTimeout", "removeFromArray", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50,
      s = [],
      u = [],
      c = null;
    function d() {
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
    function m() {
      (r("clearTimeout")(c),
        (c = r("setTimeout")(function () {
          d();
        }, e)));
    }
    var p = !1;
    function _() {
      return (
        p || (window.addEventListener("mousemove", m), (p = !0)),
        function () {
          window.removeEventListener("mousemove", m);
        }
      );
    }
    function f(e) {
      return (
        p || _(),
        s.push(e),
        function () {
          r("removeFromArray")(s, e);
        }
      );
    }
    function g(e) {
      return (
        p || _(),
        u.push(e),
        function () {
          r("removeFromArray")(u, e);
        }
      );
    }
    var h = {
        addOnMouseStopCallback: f,
        addOnMouseStopCallbackOnce: g,
        init: _,
      },
      y = h;
    l.default = y;
  },
  98,
);

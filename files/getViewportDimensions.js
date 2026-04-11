__d(
  "getViewportDimensions",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      var e = null;
      return function () {
        var t = document.body;
        return t == null
          ? null
          : ((e == null || !t.contains(e)) &&
              ((e = document.createElement("div")),
              (e.style.left = Number.MAX_SAFE_INTEGER + "px"),
              (e.style.width = "100%"),
              (e.style.height = "100%"),
              (e.style.position = "fixed"),
              t.appendChild(e)),
            e);
      };
    })();
    function s() {
      var e;
      return (
        document.documentElement && (e = document.documentElement.clientWidth),
        e == null && document.body && (e = document.body.clientWidth),
        e || 0
      );
    }
    function u() {
      var e;
      return (
        document.documentElement && (e = document.documentElement.clientHeight),
        e == null && document.body && (e = document.body.clientHeight),
        e || 0
      );
    }
    function c() {
      return {
        width: window.innerWidth || s(),
        height: window.innerHeight || u(),
      };
    }
    ((c.withoutScrollbars = function () {
      return r("UserAgent").isPlatform("Android")
        ? c()
        : { width: s(), height: u() };
    }),
      (c.layout = function () {
        var t,
          n,
          r = e();
        return {
          width: (t = r == null ? void 0 : r.clientWidth) != null ? t : s(),
          height: (n = r == null ? void 0 : r.clientHeight) != null ? n : u(),
        };
      }),
      (l.default = c));
  },
  98,
);

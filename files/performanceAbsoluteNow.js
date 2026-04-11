__d(
  "performanceAbsoluteNow",
  ["performance", "performanceAbsoluteNowOnAdjust"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function () {
        return Date.now();
      };
    function u(e) {
      s = e;
    }
    var c = 0,
      d = -1,
      m = typeof (e || (e = r("performance"))) == "object",
      p = m && typeof (e || (e = r("performance"))).now == "function";
    m &&
      ((e || (e = r("performance"))).timeOrigin
        ? (d = (e || (e = r("performance"))).timeOrigin)
        : (e || (e = r("performance"))).timing &&
          (e || (e = r("performance"))).timing.navigationStart &&
          (d = (e || (e = r("performance"))).timing.navigationStart));
    var _,
      f,
      g = function () {
        return 0;
      };
    if (p && d !== -1) {
      if (
        ((_ = function () {
          return (e || (e = r("performance"))).now() + d;
        }),
        (f = function () {
          return _() + c;
        }),
        (g = function () {
          var e = Date.now() - _();
          return (
            e > 500 && ((c = e), r("performanceAbsoluteNowOnAdjust").call(e)),
            e
          );
        }),
        typeof window == "object" &&
          typeof window.addEventListener == "function")
      ) {
        var h = { capture: !1, passive: !0 };
        (window.addEventListener("blur", g, h),
          window.addEventListener("focus", g, h));
      }
    } else
      f = _ = function () {
        return s();
      };
    var y = {
        setFallback: u,
        fromRelativeTime: (function () {
          if (d === -1) {
            var t = p ? Date.now() - (e || (e = r("performance"))).now() : 0;
            return function (e) {
              return e + t;
            };
          } else
            return function (e) {
              return e + d;
            };
        })(),
        __adjust: g,
        adjusted: f,
      },
      C = Object.assign(_, y),
      b = C;
    l.default = b;
  },
  98,
);

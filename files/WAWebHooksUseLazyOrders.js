__d(
  "WAWebHooksUseLazyOrders",
  ["WAWebFrontendConstants", "react", "useWAWebThrottledCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo,
      m = s.useState,
      p = 2,
      _ = 2,
      f = 100;
    function g(e, t, n) {
      e === void 0 && (e = []);
      var a = m(0),
        i = a[0],
        l = a[1],
        s = d(
          function () {
            return e.slice(0, i);
          },
          [e, i],
        ),
        g = u(
          function (t) {
            l(function (n) {
              var r = t(n) || n;
              return r > -1 && r < e.length ? r : e.length;
            });
          },
          [e],
        ),
        h = function (t) {
          return (
            t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >=
            t.scrollHeight - t.clientHeight
          );
        },
        y = function () {
          var e;
          (e = n.current) == null || e.scroll({ behavior: "smooth", top: 0 });
        },
        C = r("useWAWebThrottledCallback")(function (e) {
          h(e) &&
            g(function (e) {
              return e + _;
            });
        }, f),
        b = u(
          function (e) {
            C(e.currentTarget);
          },
          [C],
        ),
        v = u(
          function (e) {
            if (e) {
              var n = Math.round(e.clientHeight / t) + p;
              t > 0 &&
                i < n &&
                g(function () {
                  return n;
                });
            }
          },
          [g, t, i],
        );
      return (
        c(
          function () {
            var e = n.current;
            return (
              e && (e.addEventListener("scroll", b), v(e)),
              function () {
                e == null || e.removeEventListener("scroll", b);
              }
            );
          },
          [n, v, b],
        ),
        { ordersLazylist: s, scrollToTop: y }
      );
    }
    l.useLazyOrders = g;
  },
  98,
);

__d(
  "useWAWebTimeLeftMs",
  ["react", "useLazyRef", "useWAWebThrottledCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef,
      u = 0.01;
    function c(e, t, n) {
      n === void 0 && (n = 1e3);
      var o = r("useLazyRef")(function () {
          return Date.now();
        }),
        a = s(0),
        i = s(0),
        l = r("useWAWebThrottledCallback")(
          function () {
            if (
              o.current == null ||
              a.current == null ||
              t == null ||
              e == null
            )
              return null;
            var n = Date.now(),
              r = e - a.current,
              l = n - o.current;
            if (((a.current = e), (o.current = n), l === 0)) return null;
            var s = t - e,
              c = r / l;
            return (
              (i.current = i.current === 0 ? c : c * u + i.current * (1 - u)),
              s / i.current
            );
          },
          n,
          { trailing: !1, leading: !0 },
        );
      return l();
    }
    l.useTimeLeftMs = c;
  },
  98,
);

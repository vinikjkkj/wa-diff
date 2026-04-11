__d(
  "useWAWebThrottledCallback",
  ["lodash", "react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo;
    function d(e, t, n) {
      var o = r("useWAWebStableCallback")(e),
        a = n != null ? n : {},
        i = a.leading,
        l = a.trailing,
        s = c(
          function () {
            return r("lodash").throttle(o, t, n);
          },
          [t, i, l, o],
        );
      return (
        u(
          function () {
            return s.cancel;
          },
          [s],
        ),
        s
      );
    }
    l.default = d;
  },
  98,
);

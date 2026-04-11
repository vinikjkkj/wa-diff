__d(
  "useWAWebDebouncedCallback",
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
        l = a.maxWait,
        s = a.trailing,
        d = c(
          function () {
            return r("lodash").debounce(o, t, n);
          },
          [t, i, l, s, o],
        );
      return (
        u(
          function () {
            return d.cancel;
          },
          [d],
        ),
        d
      );
    }
    l.default = d;
  },
  98,
);

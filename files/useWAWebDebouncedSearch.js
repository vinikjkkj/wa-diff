__d(
  "useWAWebDebouncedSearch",
  ["react", "react-compiler-runtime", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e === void 0 ? 100 : e,
        a = s(""),
        i = a[0],
        l = a[1],
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = function (t) {
            l(t);
          }),
          (t[0] = u))
        : (u = t[0]);
      var c = r("useWAWebDebouncedCallback")(u, n),
        d;
      return (
        t[1] !== c || t[2] !== i
          ? ((d = [i, c]), (t[1] = c), (t[2] = i), (t[3] = d))
          : (d = t[3]),
        d
      );
    }
    l.default = u;
  },
  98,
);

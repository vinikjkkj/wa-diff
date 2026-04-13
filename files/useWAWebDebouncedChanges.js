__d(
  "useWAWebDebouncedChanges",
  ["react", "react-compiler-runtime", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.debounceMs,
        a = e.shouldDebounce,
        i = e.value,
        l = c(i),
        s = l[0],
        d = l[1],
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function (t) {
            d(t);
          }),
          (t[0] = m))
        : (m = t[0]);
      var p = r("useWAWebDebouncedCallback")(m, n),
        _,
        f;
      return (
        t[1] !== p || t[2] !== i || t[3] !== a
          ? ((_ = function () {
              a ? p(i) : (p.cancel(), d(i));
            }),
            (f = [i, a, p]),
            (t[1] = p),
            (t[2] = i),
            (t[3] = a),
            (t[4] = _),
            (t[5] = f))
          : ((_ = t[4]), (f = t[5])),
        u(_, f),
        s
      );
    }
    l.useDebouncedChanges = d;
  },
  98,
);

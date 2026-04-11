__d(
  "useWAWebStableCallback",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e) {
      var t = c(e);
      t.current = e;
      var n = u(function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r];
        return t.current == null ? void 0 : t.current.apply(t, n);
      }, []);
      return n;
    }
    l.default = d;
  },
  98,
);

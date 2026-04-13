__d(
  "useWAWebContextMenuSafeClick",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = c(null),
        r;
      t[0] !== e
        ? ((r =
            e != null
              ? function () {
                  n.current = window.setTimeout(function () {
                    ((n.current = null), e());
                  }, 0);
                }
              : void 0),
          (t[0] = e),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            n.current != null &&
              (window.clearTimeout(n.current), (n.current = null));
          }),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s,
        d;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function () {
            return l;
          }),
          (d = []),
          (t[3] = s),
          (t[4] = d))
        : ((s = t[3]), (d = t[4])),
        u(s, d));
      var m;
      return (
        t[5] !== a ? ((m = [a, l]), (t[5] = a), (t[6] = m)) : (m = t[6]),
        m
      );
    }
    l.default = d;
  },
  98,
);

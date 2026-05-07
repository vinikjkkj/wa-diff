__d(
  "WAWebUseFocusSyncOnActiveItemChange",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t, n) {
      var r = o("react-compiler-runtime").c(5),
        a = c(e),
        i,
        l;
      (r[0] !== e || r[1] !== t || r[2] !== n
        ? ((i = function () {
            if (a.current !== e) {
              a.current = e;
              var r = t.current;
              r != null && r.contains(document.activeElement) && n();
            }
          }),
          (l = [e, t, n]),
          (r[0] = e),
          (r[1] = t),
          (r[2] = n),
          (r[3] = i),
          (r[4] = l))
        : ((i = r[3]), (l = r[4])),
        u(i, l));
    }
    l.useFocusSyncOnActiveItemChange = d;
  },
  98,
);

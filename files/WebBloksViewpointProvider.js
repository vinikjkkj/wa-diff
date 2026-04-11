__d(
  "WebBloksViewpointProvider",
  [
    "WebBloksViewpointContext",
    "WebBloksViewpointManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = d(null),
        i = a[0],
        l = a[1],
        u,
        m;
      (t[0] !== i
        ? ((u = function () {
            var e = document.body;
            return (
              e != null && e instanceof HTMLElement && i === null && l(p),
              function () {
                i == null || i.untrackAll();
              }
            );
          }),
          (m = [i]),
          (t[0] = i),
          (t[1] = u),
          (t[2] = m))
        : ((u = t[1]), (m = t[2])),
        c(u, m));
      var _;
      return (
        t[3] !== n || t[4] !== i
          ? ((_ = s.jsx(r("WebBloksViewpointContext").Provider, {
              value: i,
              children: n,
            })),
            (t[3] = n),
            (t[4] = i),
            (t[5] = _))
          : (_ = t[5]),
        _
      );
    }
    function p() {
      return new (r("WebBloksViewpointManager"))();
    }
    l.default = m;
  },
  98,
);

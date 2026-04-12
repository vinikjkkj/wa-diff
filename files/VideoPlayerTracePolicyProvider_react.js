__d(
  "VideoPlayerTracePolicyProvider.react",
  ["VideoPlayerTracePolicyContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.initialTracePolicy,
        a = e.routeTracePolicy,
        i = r,
        l = a,
        u;
      t[0] !== i || t[1] !== l
        ? ((u = { initialTracePolicy: i, routeTracePolicy: l }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = u))
        : (u = t[2]);
      var c;
      return (
        t[3] !== n || t[4] !== u
          ? ((c = s.jsx(
              o("VideoPlayerTracePolicyContext").VideoPlayerTracePolicyContext
                .Provider,
              { value: u, children: n },
            )),
            (t[3] = n),
            (t[4] = u),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = u;
  },
  98,
);

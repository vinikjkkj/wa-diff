__d(
  "VideoPlayerTracePolicyProvider.react",
  [
    "VideoPlayerTracePolicyContext",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.initialTracePolicy,
        i = e.routeTracePolicy;
      r("vulture")("tE4AkUaeYLCtci933AY8dJOvXfY=");
      var l = a,
        u = i,
        c;
      t[0] !== l || t[1] !== u
        ? ((c = { initialTracePolicy: l, routeTracePolicy: u }),
          (t[0] = l),
          (t[1] = u),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== n || t[4] !== c
          ? ((d = s.jsx(
              o("VideoPlayerTracePolicyContext").VideoPlayerTracePolicyContext
                .Provider,
              { value: c, children: n },
            )),
            (t[3] = n),
            (t[4] = c),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = u;
  },
  98,
);

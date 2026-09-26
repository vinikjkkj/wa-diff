__d(
  "CometAdsRenderingValidationContextProvider",
  [
    "CometAdsRenderingValidationContext",
    "CometAdsRenderingValidationReducer",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useReducer,
      m = { logs: [] };
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.adClientToken,
        a = e.adId,
        i = e.children,
        l = e.postRenderingLoggers,
        u = d(o("CometAdsRenderingValidationReducer").reducer, m),
        c = u[0],
        p = u[1],
        _;
      t[0] !== n || t[1] !== a || t[2] !== l
        ? ((_ = { adClientToken: n, adId: a, postRenderingLoggers: l }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] !== c || t[5] !== _
        ? ((f = { dispatcher: p, sponsoredData: _, state: c }),
          (t[4] = c),
          (t[5] = _),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      return (
        t[7] !== i || t[8] !== g
          ? ((h = s.jsx(r("CometAdsRenderingValidationContext").Provider, {
              value: g,
              children: i,
            })),
            (t[7] = i),
            (t[8] = g),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    l.default = p;
  },
  98,
);

__d(
  "WAWebBizAdCreationLoggerContextProvider.react",
  [
    "FBLogger",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationLoggerContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.children,
        a = e.codebase,
        i = e.platform,
        l = e.product,
        u = e.recreateBoostId,
        d = e.surface,
        m = c(r("WAWebBizAdCreationConfigContext"));
      m == null &&
        r("FBLogger")("wa_ctwa_web").warn(
          "WAWebBizAdCreationLoggerContextProvider: configContext is null, ad creation session will be untracked",
        );
      var p;
      e: {
        if (m == null) {
          p = null;
          break e;
        }
        var _;
        (t[0] !== a ||
        t[1] !== m.entryPoint ||
        t[2] !== m.flow ||
        t[3] !== m.flowID ||
        t[4] !== m.pageID ||
        t[5] !== i ||
        t[6] !== l ||
        t[7] !== u ||
        t[8] !== d
          ? ((_ = {
              entryPoint: m.entryPoint,
              flow: m.flow,
              flowID: m.flowID,
              pageID: m.pageID,
              product: l,
              codebase: a,
              platform: i,
              recreateBoostId: u,
              surface: d,
            }),
            (t[0] = a),
            (t[1] = m.entryPoint),
            (t[2] = m.flow),
            (t[3] = m.flowID),
            (t[4] = m.pageID),
            (t[5] = i),
            (t[6] = l),
            (t[7] = u),
            (t[8] = d),
            (t[9] = _))
          : (_ = t[9]),
          (p = _));
      }
      var f = p,
        g;
      return (
        t[10] !== n || t[11] !== f
          ? ((g = s.jsx(r("WAWebBizAdCreationLoggerContext"), {
              value: f,
              children: n,
            })),
            (t[10] = n),
            (t[11] = f),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    l.default = m;
  },
  98,
);

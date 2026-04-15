__d(
  "WAWebBizAdCreationLoggerContextProvider.react",
  [
    "FBLogger",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizNativeAdsCtwaAdAccountType",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationIdentityContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t,
        n = o("react-compiler-runtime").c(17),
        a = e.children,
        i = e.codebase,
        l = e.platform,
        u = e.product,
        d = e.recreateBoostId,
        m = e.surface,
        p = c(r("WAWebBizAdCreationConfigContext"));
      p == null &&
        r("FBLogger")("wa_ctwa_web").warn(
          "WAWebBizAdCreationLoggerContextProvider: configContext is null, ad creation session will be untracked",
        );
      var _ = r("useWAWebBizAdCreationIdentityContext")();
      (_ == null || _.accountType, _ == null || _.hasLinkedFbPage);
      var f = _ == null ? void 0 : _.accountType,
        g = (t = _ == null ? void 0 : _.hasLinkedFbPage) != null ? t : !1,
        h;
      n[0] !== f || n[1] !== g
        ? ((h = o("WAWebBizNativeAdsCtwaAdAccountType").getCtwaAdAccountType(
            f,
            g,
          )),
          (n[0] = f),
          (n[1] = g),
          (n[2] = h))
        : (h = n[2]);
      var y = h,
        C;
      e: {
        if (p == null) {
          C = null;
          break e;
        }
        var b;
        (n[3] !== i ||
        n[4] !== p.entryPoint ||
        n[5] !== p.flow ||
        n[6] !== p.flowID ||
        n[7] !== p.pageID ||
        n[8] !== l ||
        n[9] !== u ||
        n[10] !== d ||
        n[11] !== m ||
        n[12] !== y
          ? ((b = {
              entryPoint: p.entryPoint,
              flow: p.flow,
              flowID: p.flowID,
              pageID: p.pageID,
              product: u,
              codebase: i,
              platform: l,
              recreateBoostId: d,
              surface: m,
              waAdAccountType: y,
            }),
            (n[3] = i),
            (n[4] = p.entryPoint),
            (n[5] = p.flow),
            (n[6] = p.flowID),
            (n[7] = p.pageID),
            (n[8] = l),
            (n[9] = u),
            (n[10] = d),
            (n[11] = m),
            (n[12] = y),
            (n[13] = b))
          : (b = n[13]),
          (C = b));
      }
      var v = C,
        S;
      return (
        n[14] !== a || n[15] !== v
          ? ((S = s.jsx(r("WAWebBizAdCreationLoggerContext"), {
              value: v,
              children: a,
            })),
            (n[14] = a),
            (n[15] = v),
            (n[16] = S))
          : (S = n[16]),
        S
      );
    }
    l.default = m;
  },
  98,
);

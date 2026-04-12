__d(
  "WAWebBizAdCreationLoggerContextProvider.react",
  [
    "FBLogger",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationLoggerContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t = e.children,
        n = e.codebase,
        o = e.platform,
        a = e.product,
        i = e.recreateBoostId,
        l = e.surface,
        u = c(r("WAWebBizAdCreationConfigContext"));
      u == null &&
        r("FBLogger")("wa_ctwa_web").warn(
          "WAWebBizAdCreationLoggerContextProvider: configContext is null, ad creation session will be untracked",
        );
      var m = d(
        function () {
          return u == null
            ? null
            : {
                entryPoint: u.entryPoint,
                flow: u.flow,
                flowID: u.flowID,
                pageID: u.pageID,
                product: a,
                codebase: n,
                platform: o,
                recreateBoostId: i,
                surface: l,
              };
        },
        [u, a, n, o, i, l],
      );
      return s.jsx(r("WAWebBizAdCreationLoggerContext"), {
        value: m,
        children: t,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

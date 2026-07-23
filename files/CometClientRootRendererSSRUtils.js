__d(
  "CometClientRootRendererSSRUtils",
  [
    "CometClientRootRendererUtils",
    "CometSSRClientInjector",
    "CometSSRMergedContentInjector",
    "Env",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = (e = (s || (s = r("Env"))).use_ssr_state_manager) != null ? e : !1;
    function m(e) {
      var t = e.CometVisualCompletion,
        n = e.removeSplashScreen,
        r = e.rootComponent,
        a = e.rootElementID,
        i = e.rootOptions,
        l = e.ssrEnabled,
        s = l === void 0 ? !1 : l,
        u = e.ssrOnly,
        c = u === void 0 ? !1 : u,
        m = e.traceAPI;
      if (d)
        (o("CometSSRClientInjector").initFizz(m, r, i, a, {
          revealSSRContent: function (t) {
            n == null || n(t);
          },
        }),
          !s && !c && o("CometSSRClientInjector").disableSSRInFlight());
      else {
        if (!s && !c) {
          (o("CometSSRMergedContentInjector").processRootElement(
            o("CometClientRootRendererUtils").getOrCreateRootElement(a, t),
          ),
            o("CometClientRootRendererUtils").initReactRender({
              CometVisualCompletion: t,
              rootComponent: r,
              rootElementID: a,
              rootOptions: i,
            }));
          return;
        }
        o("CometSSRMergedContentInjector").initFizz(m, r, i, a, {
          revealSSRContent: function (t) {
            n == null || n(t);
          },
        });
      }
    }
    l.initReactRenderWithSSR = m;
  },
  98,
);

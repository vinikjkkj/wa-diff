__d(
  "CometPlatformBaseClientRootRenderer",
  [
    "Bootloader",
    "CometClientRootRendererSSRUtils",
    "CometOrigin",
    "CometPreloaderInit",
    "CometVisualCompletion",
    "ExecutionEnvironment",
    "cr:5473",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.additionalRoots,
        a = t.buildRootComponent,
        i = t.config,
        l = t.expectedPreloaders,
        s = t.initClient,
        c = t.rootElementID,
        m = t.ssrEnabled,
        p = t.traceAPI;
      n &&
        r("justknobx")._("3805") &&
        r("Bootloader").markComponentsAsImmediate(
          n.map(function (e) {
            return e.getModuleId();
          }),
        );
      var _ = i.decorateTraceAPI,
        f = i.disableVisualCompletion,
        g = i.initClientAndServer,
        h = i.initDarkMode,
        y = i.removeSplashScreen,
        C = i.strictModeEnabled,
        b = C === void 0 ? !0 : C;
      (d(p),
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          o("CometOrigin").setCometOrigin(window.location.origin),
        h != null && h(),
        o("CometPreloaderInit").initPreloaders(l),
        g && g(),
        s());
      var v = a();
      (p.addMarkerPoint("reactStart", "AppTiming"),
        p.addMetadata("reactVersion", u.version),
        _ && _(p),
        o("CometClientRootRendererSSRUtils").initReactRenderWithSSR({
          CometVisualCompletion: f === !0 ? void 0 : r("CometVisualCompletion"),
          removeSplashScreen: y,
          rootComponent: u.jsx(v, {}),
          rootElementID: c,
          rootOptions: { unstable_strictMode: b },
          ssrEnabled: m,
          traceAPI: p,
        }));
    }
    function d(e) {
      e.onVcMetricsComplete(function (e, t) {
        var r;
        n("cr:5473") != null &&
          t &&
          !(
            e.wasCanceled ||
            ((r = e.annotations.int) == null ? void 0 : r.aborted) === 1
          ) &&
          n("cr:5473").detect(t);
      });
    }
    l.initClientRender = c;
  },
  98,
);

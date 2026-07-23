__d(
  "CometPlatformBaseClientRootRenderer",
  [
    "Bootloader",
    "CometClientRootRendererSSRUtils",
    "CometOrigin",
    "CometPreloaderInit",
    "CometVisualCompletion",
    "cr:5473",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.additionalRoots,
        n = e.buildRootComponent,
        a = e.config,
        i = e.expectedPreloaders,
        l = e.initClient,
        u = e.rootElementID,
        d = e.ssrEnabled,
        m = e.traceAPI;
      t &&
        r("justknobx")._("3805") &&
        r("Bootloader").markComponentsAsImmediate(
          t.map(function (e) {
            return e.getModuleId();
          }),
        );
      var p = a.decorateTraceAPI,
        _ = a.disableVisualCompletion,
        f = a.initClientAndServer,
        g = a.initDarkMode,
        h = a.removeSplashScreen,
        y = a.strictModeEnabled,
        C = y === void 0 ? !0 : y;
      (c(m),
        o("CometOrigin").setCometOrigin(window.location.origin),
        g != null && g(),
        o("CometPreloaderInit").initPreloaders(i),
        f && f(),
        l());
      var b = n();
      (m.addMarkerPoint("reactStart", "AppTiming"),
        m.addMetadata("reactVersion", s.version),
        p && p(m),
        o("CometClientRootRendererSSRUtils").initReactRenderWithSSR({
          CometVisualCompletion: _ === !0 ? void 0 : r("CometVisualCompletion"),
          removeSplashScreen: h,
          rootComponent: s.jsx(b, {}),
          rootElementID: u,
          rootOptions: { unstable_strictMode: C },
          ssrEnabled: d,
          traceAPI: m,
        }));
    }
    function c(e) {
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
    l.initClientRender = u;
  },
  98,
);

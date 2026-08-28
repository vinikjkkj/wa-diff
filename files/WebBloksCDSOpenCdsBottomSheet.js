__d(
  "WebBloksCDSOpenCdsBottomSheet",
  ["CDSWebBloksMinificationKeys", "WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a,
        i = t.get((a = o("CDSWebBloksMinificationKeys")).SCREEN_APP_ID),
        l = t.get(a.SCREEN_NAVBAR_DATA),
        s = t.get(a.SCREEN_LOADING_SCREEN),
        u = t.get(a.SCREEN_TTRC_MARKER_ID),
        c = {
          initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
          loadingNavbar: l,
          loadingScreen: s,
        };
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: i, markerId: u } },
      );
      var d = o("WebBloksScreen").WebBloksScreen.fromAppId(
        e.objectSet,
        i,
        r,
        c,
      );
      e.objectSet.navigationManager.open(d);
    }
    l.default = e;
  },
  98,
);

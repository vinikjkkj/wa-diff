__d(
  "WebBloksCDSPushScreen",
  ["CDSWebBloksMinificationKeys", "WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      var i,
        l = t.get((i = o("CDSWebBloksMinificationKeys")).SCREEN_APP_ID),
        s = t.get(i.SCREEN_NAVBAR_DATA),
        u = t.get(i.SCREEN_LOADING_SCREEN),
        c = t.get(i.SCREEN_URL_RELATIVE_PATH),
        d = t.get(i.SCREEN_TTRC_MARKER_ID),
        m = {
          initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
          loadingNavbar: s,
          loadingScreen: u,
          externalVariables: o(
            "WebBloksScreen",
          ).WebBloksScreen.getExternalVariablesFromBloksScript(
            e,
            n.get(i.PUSH_SCREEN_PROPS),
          ),
        };
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: l, markerId: d } },
      );
      var p = o("WebBloksScreen").WebBloksScreen.fromAppId(
        e.objectSet,
        l,
        r,
        m,
        c,
      );
      e.objectSet.navigationManager.push(p);
    }
    l.default = e;
  },
  98,
);

__d(
  "WebBloksCDSOpenScreen",
  [
    "CDSWebBloksMinificationKeys",
    "WebBloksCDSBottomSheetContainer.react",
    "WebBloksCDSScreenModeContext.react",
    "WebBloksScreen",
    "react",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, a, i) {
      var l,
        u = t.get((l = o("CDSWebBloksMinificationKeys")).SCREEN_APP_ID),
        c = t.get(l.SCREEN_NAVBAR_DATA),
        d = t.get(l.SCREEN_LOADING_SCREEN),
        m = t.get(l.SCREEN_URL_RELATIVE_PATH),
        p = t.get(l.SCREEN_TTRC_MARKER_ID),
        _ = n.get(l.OPEN_SCREEN_MODE),
        f = ["half_sheet", "flexible_sheet", "auto_sheet"].includes(_),
        g;
      f &&
        (g = function (t) {
          return s.jsx(r("WebBloksCDSScreenModeContext.react").Provider, {
            value: _,
            children: s.jsx(r("WebBloksCDSBottomSheetContainer.react"), {
              context: i,
              children: t,
            }),
          });
        });
      var h = {
        initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
        isModal: f,
        loadingNavbar: c,
        loadingScreen: d,
        outerScreenComponent: g,
        ownerContext: e,
        externalVariables: o(
          "WebBloksScreen",
        ).WebBloksScreen.getExternalVariablesFromBloksScript(
          e,
          n.get(o("CDSWebBloksMinificationKeys").OPEN_SCREEN_PROPS),
        ),
      };
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: u, markerId: p } },
      );
      var y = o("WebBloksScreen").WebBloksScreen.fromAppId(
          e.objectSet,
          u,
          a,
          h,
          m,
        ),
        C = n.getExpression(
          o("CDSWebBloksMinificationKeys").OPEN_SCREEN_ON_DISMISS,
        );
      (C != null && y.setDismissCallback(C),
        e.objectSet.navigationManager.open(y));
    }
    l.default = u;
  },
  98,
);

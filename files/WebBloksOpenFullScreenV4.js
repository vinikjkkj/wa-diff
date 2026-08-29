__d(
  "WebBloksOpenFullScreenV4",
  ["WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      var i = t.get("navbar_data"),
        l = t.get("loading_screen"),
        s = r ? r.get("presentation_mode") === "modal" : !1,
        u = t.get("url_relative_path"),
        c = t.get("ttrc_marker_id"),
        d = {
          isModal: s,
          loadingNavbar: i,
          loadingScreen: l,
          initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
          ownerContext: e,
        },
        m = t.get("app_id");
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: m, markerId: c } },
      ),
        e.objectSet.navigationManager.push(
          o("WebBloksScreen").WebBloksScreen.fromAppId(e.objectSet, m, n, d, u),
        ));
    }
    l.default = e;
  },
  98,
);

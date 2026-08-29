__d(
  "WebBloksScreenOpen",
  [
    "WebBloksContainerConfig",
    "WebBloksErrors",
    "WebBloksPayloadParser",
    "WebBloksScreen",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = e.bloksContext.objectSet.environment,
        i = a.minificationMap,
        l = a.navigationTrackingUtils,
        s = a.screenQueryTemplate,
        u = a.traversalKeys,
        c = a.unminificationMap,
        d = a.useMinification;
      if (s == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Missing screen query template when calling bk.action.screen.Open",
        );
      var m = t.get("props"),
        p = m.__infra__app_id,
        _ = m.__infra__screen_id,
        f = o("WebBloksContainerConfig").getContainerConfig(e.bloksContext, n),
        g = {
          initialContainer: { model: n, config: f },
          screenId: _ != null ? String(_) : void 0,
        };
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: String(p) } },
      ),
        l == null || l.startNavigationCallback(String(p)));
      var h = o("WebBloksPayloadParser").parseTree(
          s,
          u,
          i,
          void 0,
          c,
          d || c != null,
        ),
        y = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
          e.bloksContext.objectSet,
          h,
          g,
          m,
          t.get("url_relative_path"),
        ),
        C = t.get("controller_name");
      (C != null && (y.controllerName = C),
        e.objectSet.navigationManager.open(y, r),
        e.objectSet.navigationManager.setScreenController(y));
    }
    l.default = e;
  },
  98,
);

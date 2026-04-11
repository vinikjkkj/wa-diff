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
        i = a.navigationTrackingUtils,
        l = a.screenQueryTemplate,
        s = a.traversalKeys;
      if (l == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Missing screen query template when calling bk.action.screen.Open",
        );
      var u = t.get("props"),
        c = u.__infra__app_id,
        d = u.__infra__screen_id,
        m = o("WebBloksContainerConfig").getContainerConfig(e.bloksContext, n),
        p = {
          initialContainer: { model: n, config: m },
          screenId: d != null ? String(d) : void 0,
        };
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
      ),
        i == null || i.startNavigationCallback(String(c)));
      var _ = o("WebBloksPayloadParser").parseTree(l, s),
        f = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
          e.bloksContext.objectSet,
          _,
          p,
          u,
          t.get("url_relative_path"),
        );
      e.objectSet.navigationManager.open(f, r);
    }
    l.default = e;
  },
  98,
);

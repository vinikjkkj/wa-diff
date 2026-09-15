__d(
  "WebBloksScreenOpen",
  [
    "WebBloksContainerConfig",
    "WebBloksErrors",
    "WebBloksModel",
    "WebBloksPayloadParser",
    "WebBloksScreen",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      s = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      u = o("WebBloksModel").defineWebBloksAttributeKey("2");
    function c(t, n, r, a) {
      var i = t.bloksContext.objectSet.environment,
        l = i.minificationMaps,
        c = i.navigationTrackingUtils,
        d = i.screenQueryTemplate,
        m = i.traversalKeys,
        p = i.useMinification;
      if (d == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Missing screen query template when calling bk.action.screen.Open",
        );
      var _ = n.get(s),
        f = _.__infra__app_id,
        g = _.__infra__screen_id,
        h = o("WebBloksContainerConfig").getContainerConfig(t.bloksContext, r),
        y = {
          initialContainer: { model: r, config: h },
          screenId: g != null ? String(g) : void 0,
        };
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: String(f) } },
      ),
        c == null || c.startNavigationCallback(String(f)));
      var C = o("WebBloksPayloadParser").parseTree(d, m, p, l, void 0),
        b = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
          t.bloksContext.objectSet,
          C,
          y,
          _,
          n.get(u),
        ),
        v = n.get(e);
      (v != null && (b.controllerName = v),
        t.objectSet.navigationManager.open(b, a),
        t.objectSet.navigationManager.setScreenController(b));
    }
    l.default = c;
  },
  98,
);

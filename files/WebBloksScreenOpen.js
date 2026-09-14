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
        l = i.loadedMinificationMaps,
        c = i.minificationMap,
        d = i.navigationTrackingUtils,
        m = i.screenQueryTemplate,
        p = i.traversalKeys,
        _ = l.unminificationMap;
      if (m == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Missing screen query template when calling bk.action.screen.Open",
        );
      var f = n.get(s),
        g = f.__infra__app_id,
        h = f.__infra__screen_id,
        y = o("WebBloksContainerConfig").getContainerConfig(t.bloksContext, r),
        C = {
          initialContainer: { model: r, config: y },
          screenId: h != null ? String(h) : void 0,
        };
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: String(g) } },
      ),
        d == null || d.startNavigationCallback(String(g)));
      var b = o("WebBloksPayloadParser").parseTree(m, p, c, void 0, _),
        v = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
          t.bloksContext.objectSet,
          b,
          C,
          f,
          n.get(u),
        ),
        S = n.get(e);
      (S != null && (v.controllerName = S),
        t.objectSet.navigationManager.open(v, a),
        t.objectSet.navigationManager.setScreenController(v));
    }
    l.default = c;
  },
  98,
);

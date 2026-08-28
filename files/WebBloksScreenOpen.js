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
    var e = ";",
      s = "&",
      u = "2";
    function c(t, n, r, a) {
      var i = t.bloksContext.objectSet.environment,
        l = i.minificationMap,
        c = i.navigationTrackingUtils,
        d = i.screenQueryTemplate,
        m = i.traversalKeys,
        p = i.unminificationMap,
        _ = i.useMinification;
      if (d == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Missing screen query template when calling bk.action.screen.Open",
        );
      var f = n.usesCanonicalKeys(),
        g = f ? n.get(s) : n.get("props"),
        h = g.__infra__app_id,
        y = g.__infra__screen_id,
        C = o("WebBloksContainerConfig").getContainerConfig(t.bloksContext, r),
        b = {
          initialContainer: { model: r, config: C },
          screenId: y != null ? String(y) : void 0,
        };
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: String(h) } },
      ),
        c == null || c.startNavigationCallback(String(h)));
      var v = o("WebBloksPayloadParser").parseTree(
          d,
          m,
          l,
          void 0,
          p,
          _ || p != null,
        ),
        S = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
          t.bloksContext.objectSet,
          v,
          b,
          g,
          f ? n.get(u) : n.get("url_relative_path"),
        ),
        R = f ? n.get(e) : n.get("controller_name");
      (R != null && (S.controllerName = R),
        t.objectSet.navigationManager.open(S, a),
        t.objectSet.navigationManager.setScreenController(S));
    }
    l.default = c;
  },
  98,
);

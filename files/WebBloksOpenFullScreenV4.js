__d(
  "WebBloksOpenFullScreenV4",
  ["WebBloksModel", "WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WebBloksModel")).defineWebBloksAttributeKey("#"),
      u = e.defineWebBloksAttributeKey("&"),
      c = e.defineWebBloksAttributeKey("3"),
      d = e.defineWebBloksAttributeKey("4"),
      m = e.defineWebBloksAttributeKey("A"),
      p = e.defineWebBloksAttributeKey("#");
    function _(e, t, n, r, a) {
      var i = t.get(c),
        l = t.get(u),
        _ = r ? r.get(p) === "modal" : !1,
        f = t.get(m),
        g = t.get(d),
        h = {
          isModal: _,
          loadingNavbar: i,
          loadingScreen: l,
          initialTreeResources: e.bloksContext.treeManager.initialTreeResources,
          ownerContext: e,
        },
        y = t.get(s);
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: y, markerId: g } },
      ),
        e.objectSet.navigationManager.push(
          o("WebBloksScreen").WebBloksScreen.fromAppId(e.objectSet, y, n, h, f),
        ));
    }
    l.default = _;
  },
  98,
);

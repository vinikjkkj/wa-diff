__d(
  "WebBloksOpenFullScreenV4",
  ["WebBloksScreen", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "#",
      s = "&",
      u = "3",
      c = "4",
      d = "A",
      m = "#";
    function p(t, n, r, a, i) {
      var l = n.get(u),
        p = n.get(s),
        _ = a ? a.get(m) === "modal" : !1,
        f = n.get(d),
        g = n.get(c),
        h = {
          isModal: _,
          loadingNavbar: l,
          loadingScreen: p,
          initialTreeResources: t.bloksContext.treeManager.initialTreeResources,
          ownerContext: t,
        },
        y = n.get(e);
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-ttrc-start",
        { detail: { appId: y, markerId: g } },
      ),
        t.objectSet.navigationManager.push(
          o("WebBloksScreen").WebBloksScreen.fromAppId(t.objectSet, y, r, h, f),
        ));
    }
    l.default = p;
  },
  98,
);

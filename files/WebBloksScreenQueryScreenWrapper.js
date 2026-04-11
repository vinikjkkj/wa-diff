__d(
  "WebBloksScreenQueryScreenWrapper",
  ["WebBloksComponentContext", "WebBloksStyle", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = e.node,
        n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.bloksContext,
        a = n.executeOnNextTickCatch,
        i = n.renderNode,
        l = t.getValues(),
        c = l.container_config,
        m = l.content,
        p = l.navigation_callbacks,
        _ = i(m),
        f = p == null ? void 0 : p.getExpression("on_enter"),
        g = p == null ? void 0 : p.get("on_exit");
      return (
        u(
          function () {
            if (c != null) {
              var e = r.objectSet.navigationManager.getCurrentScreen();
              e == null || e.setContainerConfigModel(r, c);
            }
          },
          [r, c],
        ),
        u(function () {
          if (f != null) {
            var e = r.objectSet.navigationManager.getCurrentScreen(),
              n = r.objectSet.navigationManager.getNavigationDirection();
            (a(t, f, [r, n]), e == null || e.setOnExitCallback(g));
          }
        }, []),
        s.jsx("div", {
          "data-bloks-name": t.styleId,
          className: d.root,
          children: _,
        })
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = o("WebBloksStyle").createStyles({
      root: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      },
    });
    l.default = c;
  },
  98,
);

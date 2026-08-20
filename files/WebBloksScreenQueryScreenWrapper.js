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
        l = t.get("container_config"),
        c = t.get("content"),
        m = t.get("navigation_callbacks"),
        p = i(c),
        _ = m == null ? void 0 : m.getExpression("on_enter"),
        f = m == null ? void 0 : m.get("on_exit");
      return (
        u(
          function () {
            if (l != null) {
              var e = r.objectSet.navigationManager.getCurrentModalOrScreen();
              e == null || e.setContainerConfigModel(r, l);
            }
          },
          [r, l],
        ),
        u(function () {
          if (!(_ == null && f == null)) {
            var e = r.objectSet.navigationManager.getCurrentModalOrScreen();
            if (_ != null) {
              var n = r.objectSet.navigationManager.getNavigationDirection();
              a(t, _, [r, n]);
            }
            f != null && (e == null || e.setOnExitCallback(f));
          }
        }, []),
        s.jsx("div", {
          "data-bloks-name": t.styleId,
          className: d.root,
          children: p,
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

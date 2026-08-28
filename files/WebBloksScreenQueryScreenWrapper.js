__d(
  "WebBloksScreenQueryScreenWrapper",
  ["WebBloksComponentContext", "WebBloksStyle", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = "#",
      d = "$",
      m = "&",
      p = "#",
      _ = "$";
    function f(e) {
      var t = e.node,
        n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.bloksContext,
        a = n.executeOnNextTickCatch,
        i = n.renderNode,
        l = t.getSubNode(c),
        f = t.getSubNode(d),
        h = t.getSubNode(m),
        y = i(f),
        C = h == null ? void 0 : h.getExpression(p),
        b = h == null ? void 0 : h.get(_);
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
          if (!(C == null && b == null)) {
            var e = r.objectSet.navigationManager.getCurrentModalOrScreen();
            if (C != null) {
              var n = r.objectSet.navigationManager.getNavigationDirection();
              a(t, C, [r, n]);
            }
            b != null && (e == null || e.setOnExitCallback(b));
          }
        }, []),
        s.jsx("div", {
          "data-bloks-name": t.styleId,
          className: g.root,
          children: y,
        })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = o("WebBloksStyle").createStyles({
      root: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      },
    });
    l.default = f;
  },
  98,
);

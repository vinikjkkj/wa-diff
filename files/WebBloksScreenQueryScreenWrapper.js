__d(
  "WebBloksScreenQueryScreenWrapper",
  ["WebBloksComponentContext", "WebBloksModel", "WebBloksStyle", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey("$");
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
            var e = r.objectSet.navigationManager,
              n = e.getCurrentModalOrScreen(),
              o = !1,
              i = !0,
              l = 0,
              s = function () {
                var s = n != null && e.getCurrentModalOrScreen() === n,
                  u = s && !o;
                if ((o !== s && l++, (o = s), u && C != null)) {
                  var c = e.getNavigationDirection(),
                    d = l;
                  r.treeManager.waitForCommittedTree().then(function () {
                    i &&
                      d === l &&
                      e.getCurrentModalOrScreen() === n &&
                      a(t, C, [r, c]);
                  });
                }
              };
            return (
              s(),
              e.screenChangeListener.on(s),
              b != null && (n == null || n.setOnExitCallback(b)),
              function () {
                ((i = !1), e.screenChangeListener.off(s));
              }
            );
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

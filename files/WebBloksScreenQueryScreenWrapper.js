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
            var e;
            if (l != null) {
              var t =
                (e = r.objectSet.globalSheetManager.getSheetForTree(
                  r.treeManager,
                )) != null
                  ? e
                  : r.objectSet.navigationManager.getCurrentModalOrScreen();
              t == null || t.setContainerConfigModel(r, l);
            }
          },
          [r, l],
        ),
        u(function () {
          if (!(C == null && b == null)) {
            var e = r.objectSet.navigationManager,
              n = r.objectSet.globalSheetManager,
              o = n.getSheetForTree(r.treeManager),
              i = o != null ? o : e.getCurrentModalOrScreen(),
              l = function () {
                return o != null
                  ? n.getSheet() === o
                  : e.getCurrentModalOrScreen() === i;
              },
              s = !1,
              u = !0,
              c = 0,
              d = function () {
                var n = i != null && l(),
                  o = n && !s;
                if ((s !== n && c++, (s = n), o && C != null)) {
                  var d = e.getNavigationDirection(),
                    m = c;
                  r.treeManager.waitForCommittedTree().then(function () {
                    u && m === c && l() && a(t, C, [r, d]);
                  });
                }
              };
            return (
              d(),
              e.screenChangeListener.on(d),
              b != null && (i == null || i.setOnExitCallback(b)),
              function () {
                ((u = !1), e.screenChangeListener.off(d));
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

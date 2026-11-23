__d(
  "WebBloksScreenWrapperPrimitive",
  [
    "WebBloksBooleanUtils",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      p = "bk.data.contrib.screen.wrapper.Web",
      _ = o("WebBloksModel").defineWebBloksAttributeKey("#");
    function f(e) {
      var t = e.node,
        n = o("WebBloksComponentContext").useWebBloksContext(),
        r = n.renderNode,
        a = o("WebBloksEnvironmentContext").useDataBloksName(),
        i = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        l = i.embedded,
        f = r(t.getSubNode(u)),
        h = t.getSubNode(d),
        y = t.getSubNodes(c),
        C = null,
        b = !1;
      if (y != null && y.length > 0) {
        for (var v of y)
          if (
            v.styleId === p &&
            o("WebBloksBooleanUtils").isFalse(o("WebBloksUtils").cast(v).get(_))
          )
            return f;
      }
      return (
        h != null && ((C = r(h)), (b = h.get(m) === !0)),
        s.jsxs(
          "div",
          babelHelpers.extends({}, a(t.styleId), {
            className: g.root,
            children: [
              C != null && !b
                ? s.jsx("div", { className: g.header, children: C }, "navbar")
                : null,
              s.jsx(
                "div",
                {
                  className: o("WebBloksStyle").classNames(
                    g.content,
                    l ? g.contentEmbedded : g.contentFullScreen,
                  ),
                  children: f,
                },
                "content",
              ),
            ],
          }),
        )
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
      header: { flex: "0 0 auto" },
      content: {
        flex: "1 1 0",
        width: "100%",
        overflow: "hidden",
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
      },
      contentEmbedded: { flexBasis: "auto" },
      contentFullScreen: { flexBasis: "0" },
    });
    l.default = f;
  },
  98,
);

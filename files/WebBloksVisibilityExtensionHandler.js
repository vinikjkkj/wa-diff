__d(
  "WebBloksVisibilityExtensionHandler",
  [
    "WebBloksComponentContext",
    "WebBloksSSRUtils",
    "WebBloksViewpoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useLayoutEffect,
      m = "#",
      p = "$",
      _ = "(",
      f = "*";
    function g(e) {
      var t = e.children,
        n = e.elementRef,
        r = e.node;
      return o("WebBloksSSRUtils").canUseDOM
        ? s.jsx(h, { elementRef: n, node: r, children: t })
        : t;
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.children,
        n = e.elementRef,
        r = e.id,
        a = e.node,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.bloksContext,
        s = i.executeCatch,
        u = c(
          function (e) {
            var t = a.uiMutableContainer.visibility || { hasSeenBefore: !1 },
              n = babelHelpers.extends({}, e, t);
            switch (e.state) {
              case "entered": {
                var r = a.getExpression(m);
                (r != null && s(a, r, [n, l]),
                  (a.uiMutableContainer.visibility = { hasSeenBefore: !0 }));
                break;
              }
              case "intersecting": {
                var o = a.getExpression(_);
                o != null && s(a, o, [n, l]);
                break;
              }
              case "exited": {
                var i,
                  u = a.getExpression(p);
                u != null &&
                  ((i = a.uiMutableContainer.visibility) == null
                    ? void 0
                    : i.hasSeenBefore) === !0 &&
                  s(a, u, [n, l]);
                break;
              }
              default:
            }
          },
          [s, a, l],
        ),
        g = a == null ? void 0 : a.get(f),
        h = o("WebBloksViewpoint").useViewpoint({
          id: a.clientId.toString(),
          action: u,
          untrackAfterFirstAppear: g != null ? g : !1,
        });
      return (
        d(
          function () {
            h.current = n.current;
          },
          [n, h],
        ),
        t
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = {
        hasLayoutWrapper: function () {
          return !1;
        },
        wrap: function (t, n, r, o) {
          return s.jsx(g, { node: t, elementRef: o, children: n });
        },
      },
      C = y;
    l.default = C;
  },
  98,
);

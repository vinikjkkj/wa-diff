__d(
  "createWebBloksVisibilityExtensionHandler",
  [
    "WebBloksComponentContext",
    "WebBloksSSRUtils",
    "WebBloksUtils",
    "WebBloksViewpoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useLayoutEffect;
    function m(e) {
      var t = e.children,
        n = e.elementRef,
        r = e.node,
        a = e.onAppearAttribute,
        i = e.onDisappearAttribute,
        l = e.onUpdateAttribute,
        u = e.triggerOnFirstAppearOnlyAttribute;
      return o("WebBloksSSRUtils").canUseDOM
        ? s.jsx(p, {
            elementRef: n,
            node: r,
            onAppearAttribute: a,
            onDisappearAttribute: i,
            onUpdateAttribute: l,
            triggerOnFirstAppearOnlyAttribute: u,
            children: t,
          })
        : t;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.children,
        n = e.elementRef,
        r = e.id,
        a = e.node,
        i = e.onAppearAttribute,
        l = e.onDisappearAttribute,
        s = e.onUpdateAttribute,
        u = e.triggerOnFirstAppearOnlyAttribute,
        m = o("WebBloksComponentContext").useWebBloksContext(),
        p = m.bloksContext,
        _ = m.executeCatch,
        f = c(
          function (e) {
            var t = a.uiMutableContainer.visibility || { hasSeenBefore: !1 },
              n = babelHelpers.extends({}, e, t);
            switch (e.state) {
              case "entered": {
                var r = a.getExpression(o("WebBloksUtils").cast(i));
                (r != null && _(a, r, [n, p]),
                  (a.uiMutableContainer.visibility = { hasSeenBefore: !0 }));
                break;
              }
              case "intersecting": {
                var u = a.getExpression(o("WebBloksUtils").cast(s));
                u != null && _(a, u, [n, p]);
                break;
              }
              case "exited": {
                var c,
                  d = a.getExpression(o("WebBloksUtils").cast(l));
                d != null &&
                  ((c = a.uiMutableContainer.visibility) == null
                    ? void 0
                    : c.hasSeenBefore) === !0 &&
                  _(a, d, [n, p]);
                break;
              }
              default:
            }
          },
          [_, a, p, i, l, s],
        ),
        g = o("WebBloksViewpoint").useViewpoint({
          id: a.clientId.toString(),
          action: f,
          untrackAfterFirstAppear: u != null && a.getUntyped(u) === !0,
        });
      return (
        d(
          function () {
            g.current = n.current;
          },
          [n, g],
        ),
        t
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.onAppearAttribute,
        n = e.onDisappearAttribute,
        r = e.onUpdateAttribute,
        o = e.triggerOnFirstAppearOnlyAttribute;
      return {
        hasLayoutWrapper: function () {
          return !1;
        },
        wrap: function (a, i, l, u) {
          return s.jsx(m, {
            node: a,
            elementRef: u,
            onAppearAttribute: t,
            onDisappearAttribute: n,
            onUpdateAttribute: r,
            triggerOnFirstAppearOnlyAttribute: o,
            children: i,
          });
        },
      };
    }
    l.default = _;
  },
  98,
);

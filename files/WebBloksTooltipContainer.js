__d(
  "WebBloksTooltipContainer",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksSSRUtils",
    "WebBloksStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useLayoutEffect,
      m = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      g = o("WebBloksModel").defineWebBloksAttributeKey(","),
      h = o("WebBloksStyle").createStyles({
        root: {
          alignSelf: "stretch",
          position: "relative",
          display: "flex",
          zIndex: 99,
        },
      });
    function y(e) {
      var t = e.node,
        n = o("WebBloksStyle").useStyle(t),
        r = n.wrapper,
        a = n.wrapperProps,
        i = o("WebBloksComponentContext").useWebBloksContext(),
        l = i.bloksContext,
        u = i.executeCatch,
        y = i.renderNode,
        C = !!t.get(g),
        b = t.getExpression(_),
        v = t.getExpression(p),
        S = y(t.getSubNode(f)),
        R = y(t.getSubNode(m));
      l.initAssociatedObject_INTERNAL(
        t,
        o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
        { visible: C },
      );
      var L = c(
          function () {
            (b != null && u(t, b, [t, !1]),
              v != null && u(t, v, [t, !1]),
              l.updateAssociatedObject_INTERNAL(
                t,
                o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
                { visible: !1 },
              ));
          },
          [u, t, v, b, l],
        ),
        E = l.getAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").TOOLTIP_VISIBILITY_ASSOCIATED_OBJECT,
        );
      (d(
        function () {
          if (!(!o("WebBloksSSRUtils").canUseDOM || !E)) {
            var e = document.documentElement;
            return (
              e.addEventListener("click", L, { passive: !0, once: !0 }),
              function () {
                e.removeEventListener("click", L);
              }
            );
          }
        },
        [E, L],
      ),
        d(
          function () {
            if (!(!o("WebBloksSSRUtils").canUseDOM || !E)) {
              var e = document.documentElement;
              return (
                e.addEventListener("scroll", L, { passive: !0, once: !0 }),
                function () {
                  e.removeEventListener("scroll", L);
                }
              );
            }
          },
          [E, L],
        ));
      var k = c(
        function (e) {
          e.key === "Escape" && (e.stopPropagation(), L());
        },
        [L],
      );
      return r(
        s.jsxs(
          "div",
          babelHelpers.extends({}, a, {
            className: h.root,
            onKeyPress: k,
            children: [E != null && E.visible ? S : null, R],
          }),
        ),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);

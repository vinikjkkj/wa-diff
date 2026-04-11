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
      d = u.useLayoutEffect;
    function m(e) {
      var t = e.children,
        n = e.elementRef,
        r = e.node;
      return o("WebBloksSSRUtils").canUseDOM
        ? p({ children: t, node: r, elementRef: n })
        : t;
    }
    function p(e) {
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
                var r = a.getExpression("on_appear");
                (r != null && s(a, r, [n, l]),
                  (a.uiMutableContainer.visibility = { hasSeenBefore: !0 }));
                break;
              }
              case "intersecting": {
                var o = a.getExpression("on_update");
                o != null && s(a, o, [n, l]);
                break;
              }
              case "exited": {
                var i,
                  u = a.getExpression("on_disappear");
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
        m = a == null ? void 0 : a.get("trigger_on_first_appear_only"),
        p = o("WebBloksViewpoint").useViewpoint({
          id: a.clientId.toString(),
          action: u,
          untrackAfterFirstAppear: m != null ? m : !1,
        });
      return (
        d(
          function () {
            p.current = n.current;
          },
          [n, p],
        ),
        t
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = {
        hasLayoutWrapper: function () {
          return !1;
        },
        wrap: function (t, n, r, o) {
          return s.jsx(m, { node: t, elementRef: o, children: n });
        },
      },
      f = _;
    l.default = f;
  },
  98,
);

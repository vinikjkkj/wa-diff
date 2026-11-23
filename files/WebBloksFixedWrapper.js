__d(
  "WebBloksFixedWrapper",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("("),
      p = o("WebBloksModel").defineWebBloksAttributeKey(")");
    function _(e) {
      var t = e.externalStyle,
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderChildren,
        i = n.get(u),
        l = n.get(c),
        _ = n.get(d),
        f = n.get(m),
        g = n.get(p),
        h = n.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY),
        y = {
          bottom: i != null ? i : void 0,
          left: l != null ? l : void 0,
          position: "fixed",
          right: _ != null ? _ : void 0,
          top: f != null ? f : void 0,
          zIndex: g != null ? g : void 0,
        },
        C = o("WebBloksStyle").useStyle(
          n,
          babelHelpers.extends({ pointerEvents: "none" }, t, y),
        ),
        b = C.style,
        v = C.wrapper,
        S = C.wrapperProps;
      return v(
        s.jsx(
          "div",
          babelHelpers.extends({}, S, {
            className: o("WebBloksStyle").WebBloksStyles.container,
            style: b,
            children: a(h),
          }),
        ),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);

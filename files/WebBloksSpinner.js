__d(
  "WebBloksSpinner",
  ["WebBloksIconSpinner", "WebBloksModel", "WebBloksStyle", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("#");
    function c(e) {
      var t = e.externalStyle,
        n = e.node,
        a = o("WebBloksStyle").useStyle(n, t),
        i = a.style,
        l = a.wrapper,
        c = a.wrapperProps;
      return l(
        s.jsx(
          "div",
          babelHelpers.extends({}, c, o("WebBloksStyle").getStyleProps(i), {
            children: s.jsx(r("WebBloksIconSpinner"), { color: n.get(u) }),
          }),
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

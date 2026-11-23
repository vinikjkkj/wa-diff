__d(
  "WebBloksDataTextSpan",
  [
    "WebBloksComponentContext",
    "WebBloksDataTextSpanUtils",
    "WebBloksModel",
    "WebBloksStyle",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("(");
    function p(e) {
      var t = e.externalStyle,
        n = e.node,
        r = n.get(u),
        a = n.get(c),
        i = n.get(m),
        l = o("WebBloksStyle").useStyle(n, t),
        p = l.wrapper,
        _ = o("WebBloksComponentContext").useWebBloksContext(),
        f = _.renderNode,
        g = i != null ? f(i) : n.get(d),
        h = o("WebBloksDataTextSpanUtils").useWebBloksBaseTextSpanProps(
          r,
          n,
          t,
          a,
        );
      return p(s.jsx("span", babelHelpers.extends({}, h, { children: g })));
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);

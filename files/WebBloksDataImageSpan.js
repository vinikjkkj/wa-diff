__d(
  "WebBloksDataImageSpan",
  ["WebBloksImageSpan", "WebBloksModel", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey(","),
      c = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("("),
      p = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("+");
    function g(e) {
      var t = e.externalStyle,
        n = e.node;
      return s.jsx(r("WebBloksImageSpan"), {
        accessibilityLabel: n.get(u),
        externalStyle: t,
        imageAlign: n.get(c),
        imageComponent: n.getSubNode(d),
        imageHeight: n.get(m),
        imageMargin: n.getSubNode(p),
        imageWidth: n.get(_),
        node: n,
        spanStyles: n.get(f),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);

__d(
  "WebBloksTextSpanImage",
  ["WebBloksImageSpan", "WebBloksModel", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("B"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("D"),
      d = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("="),
      p = o("WebBloksModel").defineWebBloksAttributeKey("E"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey(">");
    function f(e) {
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
        spanStyles: null,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);

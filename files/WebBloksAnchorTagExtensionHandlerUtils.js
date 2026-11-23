__d(
  "WebBloksAnchorTagExtensionHandlerUtils",
  ["WebBloksConstants", "WebBloksModel", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "bk.components.AnchorTagExtension",
      s = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      u = o("WebBloksModel").defineWebBloksAttributeKey("$");
    function c(t) {
      var n = o("WebBloksUtils").findExtension(
        t.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        e,
      );
      if (!n) return null;
      var r = n.get(s),
        a = n.get(u);
      return { href: r, tabIndex: 0, preferNativeNavigation: a };
    }
    l.useWebBloksAnchorTagExtensionProps = c;
  },
  98,
);

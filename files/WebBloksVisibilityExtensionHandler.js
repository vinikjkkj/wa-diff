__d(
  "WebBloksVisibilityExtensionHandler",
  ["WebBloksModel", "createWebBloksVisibilityExtensionHandler"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WebBloksModel")).defineWebBloksAttributeKey("#"),
      u = e.defineWebBloksAttributeKey("$"),
      c = e.defineWebBloksAttributeKey("("),
      d = e.defineWebBloksAttributeKey("*"),
      m = r("createWebBloksVisibilityExtensionHandler")({
        onAppearAttribute: s,
        onDisappearAttribute: u,
        onUpdateAttribute: c,
        triggerOnFirstAppearOnlyAttribute: d,
      }),
      p = m;
    l.default = p;
  },
  98,
);

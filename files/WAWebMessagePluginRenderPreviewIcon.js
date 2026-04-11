__d(
  "WAWebMessagePluginRenderPreviewIcon",
  [
    "WAWebMessagePluginRenderPreviewIconRegistry",
    "WAWebPluginCreateRegistryLookup",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
        r("WAWebMessagePluginRenderPreviewIconRegistry"),
      );
    function c(e, t) {
      var n = u(e, t);
      return n == null ? void 0 : n.renderPreviewIcon;
    }
    function d(e, t, n) {
      var r = c(e, t);
      return r == null ? null : s.jsx(r, babelHelpers.extends({}, n));
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.renderPreviewIcon = d));
  },
  98,
);

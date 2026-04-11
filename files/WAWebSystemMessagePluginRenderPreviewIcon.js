__d(
  "WAWebSystemMessagePluginRenderPreviewIcon",
  [
    "WAWebPluginCreateRegistryLookup",
    "WAWebSystemMessagePluginRenderPreviewIconRegistry",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
        r("WAWebSystemMessagePluginRenderPreviewIconRegistry"),
      );
    function c(e) {
      var t = e.msg,
        n = u(t.type, t.subtype);
      return n == null ? void 0 : n.renderPreviewIcon;
    }
    function d(e) {
      var t = e.msg,
        n = c({ msg: t });
      return n == null ? null : s.jsx(n, { msg: t });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.renderPreviewIcon = d));
  },
  98,
);

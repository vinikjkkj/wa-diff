__d(
  "WAWebMessagePluginQuotedMsgThumbnailIcon",
  [
    "WAWebMessagePluginQuotedMsgThumbnailIconRegistry",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginQuotedMsgThumbnailIconRegistry"),
    );
    function s(t) {
      var n = e(t.type, t.subtype);
      return n == null ? void 0 : n.quotedMsgThumbnailIcon;
    }
    l.quotedMsgThumbailIconComponent = s;
  },
  98,
);

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
    function s(t, n) {
      var r = e(t, n);
      return r == null ? void 0 : r.quotedMsgThumbnailIcon;
    }
    l.quotedMsgThumbailIconComponent = s;
  },
  98,
);

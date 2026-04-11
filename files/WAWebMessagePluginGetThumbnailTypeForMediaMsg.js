__d(
  "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
  [
    "WAWebMessagePluginGetThumbnailTypeForMediaMsgRegistry",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginGetThumbnailTypeForMediaMsgRegistry"),
    );
    function s(t) {
      var n = t.msg,
        r = e(n.type, n.subtype);
      return r == null || r.getThumbnailTypeForMediaMsg == null
        ? void 0
        : r.getThumbnailTypeForMediaMsg(t);
    }
    l.getThumbnailTypeForMediaMsg = s;
  },
  98,
);

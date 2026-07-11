__d(
  "WAWebTP3PConfig",
  ["WAWebFile3PSitevarConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("WAWebFile3PSitevarConfig")[e];
      if (!t || !Array.isArray(t) || t.length === 0) return null;
      t.length > 1;
      var n = t[0];
      return n
        ? {
            name: n.name,
            origin: n.origin,
            integrationUrl: n.integrationUrl,
            extensionKey: n.extensionKey,
            chromeExtensionId: n.chromeExtensionId,
            edgeExtensionId: n.edgeExtensionId,
            topLevelOrigin: n.topLevelOrigin,
          }
        : null;
    }
    l.get3PConfigFromMimeType = e;
  },
  98,
);

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
    function s(e) {
      var t = new URL(e),
        n = t.hostname.split(".");
      if (n.length < 2) return null;
      var o = n[n.length - 2],
        a = null;
      return (
        Object.keys(r("WAWebFile3PSitevarConfig")).forEach(function (e) {
          var t = r("WAWebFile3PSitevarConfig")[e].find(function (e) {
            return e.name === o;
          });
          t && (a = t);
        }),
        a
          ? {
              name: a.name,
              origin: a.origin,
              integrationUrl: a.integrationUrl,
              extensionKey: a.extensionKey,
              chromeExtensionId: a.chromeExtensionId,
              edgeExtensionId: a.edgeExtensionId,
              topLevelOrigin: a.topLevelOrigin,
            }
          : null
      );
    }
    ((l.get3PConfigFromMimeType = e), (l.get3PConfigFromHostname = s));
  },
  98,
);

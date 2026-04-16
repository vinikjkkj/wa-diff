__d(
  "WAWebAuraRingtoneWindowsBridge",
  ["WALogger", "WAWebEnvironment", "cr:17219", "cr:19951"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if (n("cr:17219") == null) return null;
      var e = n("cr:17219").getWindowsBridge();
      return n("cr:19951") != null &&
        e instanceof n("cr:19951").WindowsHybridBridge
        ? e.ringtoneBridge
        : null;
    }
    function u(t) {
      if (r("WAWebEnvironment").isWindows) {
        var n = s();
        n != null &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[aura_ringtones] Sending ringtones URL to native for caching",
              ])),
          ),
          n.cacheRingtonesFromUrl(t));
      }
    }
    l.cacheRingtonesUrlToNative = u;
  },
  98,
);

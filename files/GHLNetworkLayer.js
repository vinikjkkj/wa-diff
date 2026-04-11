__d(
  "GHLNetworkLayer",
  ["FBLogger", "GHLDetectionUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      try {
        if (
          r("gkx")("8068") &&
          o("GHLDetectionUtils").isXHRModified(t.XMLHttpRequest)
        ) {
          var e = Object.getPrototypeOf(t.XMLHttpRequest);
          if (!o("GHLDetectionUtils").isXHRModified(e)) return e;
        }
        return null;
      } catch (e) {
        return (
          r("FBLogger")("ghl").mustfix("error while getGHLXhr: %s", e.message),
          null
        );
      }
    }
    l.getGHLXhr = e;
  },
  98,
);

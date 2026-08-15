__d(
  "GHLNetworkLayer",
  [
    "FBLogger",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "err",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      try {
        if (
          r("gkx")("8068") &&
          o("GHLDetectionUtils").isXHRModified(t.XMLHttpRequest)
        ) {
          for (
            var e = 5, n = Object.getPrototypeOf(t.XMLHttpRequest), a = 0;
            n != null &&
            a < e &&
            ((i = o("GHLDetectionUtilsPreludeSafe").normalize(n.toString())) ==
            null
              ? void 0
              : i.includes("{ [native code] }")) !== !0;
          ) {
            var i;
            ((n = Object.getPrototypeOf(n)), a++);
          }
          if (n != null && !o("GHLDetectionUtils").isXHRModified(n)) return n;
        }
        return r("gkx")("25201") &&
          r("justknobx")._("5685") &&
          o("GHLDetectionUtils").isXHRModified(t.XMLHttpRequest)
          ? o("GHLDetectionUtilsPreludeSafe").getCleanRealmXHRConstructor()
          : null;
      } catch (e) {
        return (
          r("FBLogger")("ghl")
            .catching(e instanceof Error ? e : r("err")(String(e)))
            .mustfix("error while getGHLXhr"),
          null
        );
      }
    }
    l.getGHLXhr = e;
  },
  98,
);

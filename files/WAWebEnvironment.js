__d(
  "WAWebEnvironment",
  ["WAWebPwaDocumentMetadataUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = r("gkx")("4112"),
      s = !e,
      u = r("gkx")("10314");
    function c() {
      return r("gkx")("26258") ? "prod" : r("gkx")("26259") ? "intern" : "dev";
    }
    function d() {
      return e
        ? "win_hybrid"
        : o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()
          ? "pwa"
          : "web";
    }
    var m = {
        isWeb: s,
        isWindows: e,
        isGuest: u,
        getEnvironment: c,
        getSubPlatform: d,
      },
      p = m;
    l.default = p;
  },
  98,
);

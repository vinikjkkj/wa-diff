__d(
  "WAWebWamPlatform",
  ["WAWebEnvironment", "WAWebPwaDocumentMetadataUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("WAWebEnvironment").isWindows === !0
        ? "WIN_HYBRID"
        : o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()
          ? "PWA"
          : "WEB";
    }
    l.getWamPlatform = e;
  },
  98,
);

__d(
  "WAWebEnvironment",
  ["WAWebPwaDocumentMetadataUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = r("gkx")("4112"),
      s = !e,
      u = r("gkx")("10314");
    function c() {
      if (typeof window == "undefined") return !1;
      var e = window.location.pathname;
      return (
        e.startsWith("/showroom") ||
        e.startsWith("/intern/whatsapp/web/showroom")
      );
    }
    function d() {
      return r("gkx")("26258") ? "prod" : r("gkx")("26259") ? "intern" : "dev";
    }
    function m() {
      return e
        ? "win_hybrid"
        : o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()
          ? "pwa"
          : "web";
    }
    var p = {
        isWeb: s,
        isWindows: e,
        isGuest: u,
        getEnvironment: d,
        getSubPlatform: m,
        getIsShowroom: c,
      },
      _ = p;
    l.default = _;
  },
  98,
);

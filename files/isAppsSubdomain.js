__d(
  "isAppsSubdomain",
  ["ConstUriUtils", "gkx", "isFacebookURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("ConstUriUtils").getUri(document.location.href);
      if (!e) return !1;
      var t = r("isFacebookURI")(e) && e.getSubdomain() === "apps";
      return t ? r("gkx")("11924") : !1;
    }
    l.default = e;
  },
  98,
);

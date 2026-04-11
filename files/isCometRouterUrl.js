__d(
  "isCometRouterUrl",
  [
    "ConstUriUtils",
    "Env",
    "isFacebookURI",
    "isLinkshimURI",
    "justknobx",
    "memoizeStringOnly",
    "uriIsRelativePath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return (
          t === "/l.php" ||
          t.startsWith("/si/ajax/l/") ||
          t.startsWith("/l/") ||
          t.startsWith("l/")
        );
      },
      u = function (t) {
        var e = t.getDomain();
        return e == null ? !1 : r("isFacebookURI")(t) && e.startsWith("www");
      },
      c = /^(\/\w)/,
      d = r("memoizeStringOnly")(function (t) {
        if (t == null || t.startsWith("#") || !o("ConstUriUtils").isValidUri(t))
          return !1;
        var n = o("ConstUriUtils").getUri(t);
        if (n == null) return !1;
        if (!s(n.getPath()) && c.test(t)) return !0;
        if (r("isLinkshimURI")(n)) return !1;
        if (r("justknobx")._("1417") && r("uriIsRelativePath")(n)) return !0;
        var a = o("ConstUriUtils").getUri(window.location.href),
          i = a ? n.isSameOrigin(a) || r("uriIsRelativePath")(n) : !1,
          l =
            (!!(e || (e = r("Env"))).isStoryGallery ||
              !!(e || (e = r("Env"))).isAdsPreviewTool) &&
            u(n);
        return i || l;
      });
    l.default = d;
  },
  98,
);

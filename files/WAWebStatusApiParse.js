__d(
  "WAWebStatusApiParse",
  ["$InternalEnum", "WAWebApiParseUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "status",
      s = "text",
      u = "photo",
      c = n("$InternalEnum").Mirrored(["Text", "Media"]);
    function d(e) {
      return e.length === 0 || (e.length === 1 && e[0] === "");
    }
    function m(t) {
      try {
        var n = new URL(t),
          r = n.pathname;
        if (!o("WAWebApiParseUtils").isWhatsappHost(n)) return null;
        var a = r.split("/"),
          i = a[0],
          l = a[1],
          m = babelHelpers.arrayLikeToArray(a).slice(2);
        if (!d(m) || l !== e) return null;
        var p = n.searchParams || new URLSearchParams(n.search),
          _ = p.get(s);
        if (_ != null) return { postType: c.Text, url: n.href };
        var f = p.get(u);
        if (f != null) return { postType: c.Media, url: n.href };
      } catch (e) {}
      return null;
    }
    ((l.StatusPostType = c), (l.parseStatusPostFeatureLink = m));
  },
  98,
);

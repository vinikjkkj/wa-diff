__d(
  "WAWebStatusApiParse",
  ["$InternalEnum", "WAWebApiParseUtils", "WAWebPonyfillsUrlSearchParams"],
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
          a = n.pathname;
        if (!o("WAWebApiParseUtils").isWhatsappHost(n)) return null;
        var i = a.split("/"),
          l = i[0],
          m = i[1],
          p = babelHelpers.arrayLikeToArray(i).slice(2);
        if (!d(p) || m !== e) return null;
        var _ =
            n.searchParams ||
            new (r("WAWebPonyfillsUrlSearchParams"))(n.search),
          f = _.get(s);
        if (f != null) return { postType: c.Text, url: n.href };
        var g = _.get(u);
        if (g != null) return { postType: c.Media, url: n.href };
      } catch (e) {}
      return null;
    }
    ((l.StatusPostType = c), (l.parseStatusPostFeatureLink = m));
  },
  98,
);

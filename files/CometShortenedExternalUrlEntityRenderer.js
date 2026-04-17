__d(
  "CometShortenedExternalUrlEntityRenderer",
  [
    "CometShortenedExternalUrlEntityRenderer_entity.graphql",
    "cr:2169",
    "cr:3118",
    "cr:3119",
    "cr:3258",
    "cr:3749",
    "isValidURL",
    "memoizeStringOnly",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = r("memoizeStringOnly")(r("isValidURL")),
      d = 60;
    e !== void 0 ||
      (e = n("CometShortenedExternalUrlEntityRenderer_entity.graphql"));
    function m(e) {
      var t = e.entity,
        r = e.node,
        o = e.originalText,
        a = t.external_url;
      if (a == null || o == null) return r;
      if (n("cr:3749") != null && n("cr:3258") != null) {
        var i = n("cr:3258").extractDataFromGenericLinkUrl(a);
        if (i != null)
          return u.jsx(n("cr:3749"), { data: i.data, type: i.type });
      }
      if (
        n("cr:3118") !== null &&
        n("cr:3119") !== null &&
        n("cr:3119").isPixelcloudLink(a)
      ) {
        var l = n("cr:3119").pixelcloudInlineLink(o);
        if (l !== null)
          return u.jsx(n("cr:3118"), {
            location: "FEED",
            pixelcloudID: l,
            pixelcloudURL: a,
          });
      }
      if (!c(o) || (!a.endsWith(o) && !a.startsWith(o))) return r;
      var s = n("cr:2169")(a, d);
      return s.length < o.length ? s : r;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = function (t, n, r, o) {
      return u.jsx(m, { entity: n, node: t, originalText: o });
    };
    l.default = p;
  },
  98,
);

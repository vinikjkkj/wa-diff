__d(
  "CometMetaLinkedEntityRenderer",
  [
    "CometMetaLinkedEntityRenderer_entity.graphql",
    "FDSLink.react",
    "FDSTextContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    e !== void 0 || (e = n("CometMetaLinkedEntityRenderer_entity.graphql"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(7),
        a = e.entity,
        i = e.node,
        l =
          (t = o("FDSTextContext").useFDSTextContext()) == null
            ? void 0
            : t.type;
      if (a.url == null) return i;
      if (l == null || !l.startsWith("meta")) {
        var s;
        return (
          n[0] !== a.url || n[1] !== i
            ? ((s = u.jsx(r("FDSLink.react"), { href: a.url, children: i })),
              (n[0] = a.url),
              (n[1] = i),
              (n[2] = s))
            : (s = n[2]),
          s
        );
      }
      var c = l === "meta3" || l === "meta4" ? "normal" : "semibold",
        d;
      return (
        n[3] !== a.url || n[4] !== i || n[5] !== c
          ? ((d = u.jsx(r("FDSLink.react"), {
              color_DEPRECATED: "secondary",
              href: a.url,
              weight_DEPRECATED: c,
              children: i,
            })),
            (n[3] = a.url),
            (n[4] = i),
            (n[5] = c),
            (n[6] = d))
          : (d = n[6]),
        d
      );
    }
    var d = function (t, n) {
      return u.jsx(c, { entity: n, node: t });
    };
    l.default = d;
  },
  98,
);

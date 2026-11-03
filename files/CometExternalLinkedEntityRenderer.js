__d(
  "CometExternalLinkedEntityRenderer",
  [
    "CometExternalLinkedEntityRenderer_entity.graphql",
    "FDSLink.react",
    "FDSText.react",
    "FDSTextContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    e !== void 0 || (e = n("CometExternalLinkedEntityRenderer_entity.graphql"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(6),
        a = e.entity,
        i = e.node,
        l = o("FDSTextContext").useFDSTextContext();
      if (a.url == null) return i;
      var s = (t = l == null ? void 0 : l.type) != null ? t : "bodyLink4",
        c;
      n[0] !== a.url || n[1] !== i
        ? ((c = u.jsx(r("FDSLink.react"), {
            href: a.url,
            target: "_blank",
            children: i,
          })),
          (n[0] = a.url),
          (n[1] = i),
          (n[2] = c))
        : (c = n[2]);
      var d;
      return (
        n[3] !== s || n[4] !== c
          ? ((d = u.jsx(r("FDSText.react"), {
              color: "blueLink",
              type: s,
              children: c,
            })),
            (n[3] = s),
            (n[4] = c),
            (n[5] = d))
          : (d = n[5]),
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

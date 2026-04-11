__d(
  "FDSDialogMetaTextItem.react",
  ["CometColumnItem.react", "FDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.meta,
        a = e.metaPosition,
        i = a === void 0 ? "above" : a,
        l = n != null && i === "above",
        u = n != null && i === "below",
        c = l ? "start" : "center",
        d = u ? 0 : 12,
        m = u ? 16 : 0,
        p = l ? "start" : "center",
        _;
      t[0] !== n || t[1] !== p
        ? ((_ = s.jsx(r("FDSText.react"), {
            align: p,
            color: "secondary",
            type: "body3",
            children: n,
          })),
          (t[0] = n),
          (t[1] = p),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      return (
        t[3] !== c || t[4] !== d || t[5] !== m || t[6] !== _
          ? ((f = s.jsx(r("CometColumnItem.react"), {
              align: c,
              paddingTop: d,
              paddingVertical: m,
              children: _,
            })),
            (t[3] = c),
            (t[4] = d),
            (t[5] = m),
            (t[6] = _),
            (t[7] = f))
          : (f = t[7]),
        f
      );
    }
    l.default = u;
  },
  98,
);

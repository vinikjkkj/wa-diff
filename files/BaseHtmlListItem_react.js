__d(
  "BaseHtmlListItem.react",
  [
    "BaseHtmlListItemMarker.react",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = e.type,
        i = e.value,
        l = e.xstyle,
        u = a === void 0 ? "inherit" : a,
        m = c[u],
        p;
      t[0] !== m || t[1] !== l
        ? ((p = [d.root, m, l]), (t[0] = m), (t[1] = l), (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== u || t[4] !== i
        ? ((_ = s.jsx(r("BaseHtmlListItemMarker.react"), {
            type: u,
            value: i,
          })),
          (t[3] = u),
          (t[4] = i),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      return (
        t[6] !== n || t[7] !== p || t[8] !== _ || t[9] !== i
          ? ((f = s.jsxs(o("react-strict-dom").html.li, {
              style: p,
              value: i,
              children: [_, n],
            })),
            (t[6] = n),
            (t[7] = p),
            (t[8] = _),
            (t[9] = i),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    var c = {
        circle: {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "xrylv2j",
          $$css: !0,
        },
        decimal: {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "x3yw8vx",
          $$css: !0,
        },
        disc: {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "xtaz4m5",
          $$css: !0,
        },
        inherit: {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "x1sle589",
          $$css: !0,
        },
        "lower-alpha": {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "x1rrqm6h",
          $$css: !0,
        },
        "lower-roman": {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "x19k9dhg",
          $$css: !0,
        },
        none: { listStyleType: "x3ct3a4", $$css: !0 },
        square: {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "x152237o",
          $$css: !0,
        },
        "upper-alpha": {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "x122ond3",
          $$css: !0,
        },
        "upper-roman": {
          listStylePosition: null,
          listStyleImage: null,
          listStyleType: "x16dfi6m",
          $$css: !0,
        },
      },
      d = { root: { position: "x1n2onr6", $$css: !0 } };
    l.default = u;
  },
  98,
);

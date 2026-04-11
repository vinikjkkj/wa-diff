__d(
  "BaseHtmlList.react",
  [
    "BaseHtmlListItemIndexContext",
    "BaseHtmlListItemNestedContext",
    "BaseHtmlListItemTypeContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.Tag,
        r = e.children,
        a = e.type,
        i = e.xstyle,
        l = o(
          "BaseHtmlListItemNestedContext",
        ).useBaseHtmlListItemNestedContext(),
        u = l === 0 && m.marginVertical,
        p = d[a],
        _;
      t[0] !== u || t[1] !== p || t[2] !== i
        ? ((_ = [m.root, u, p, i]),
          (t[0] = u),
          (t[1] = p),
          (t[2] = i),
          (t[3] = _))
        : (_ = t[3]);
      var f = l + 1,
        g;
      t[4] !== r
        ? ((g = s.Children.map(r, c)), (t[4] = r), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== g || t[7] !== a
        ? ((h = s.jsx(
            o("BaseHtmlListItemTypeContext")
              .BaseHtmlListItemTypeContextProvider,
            { type: a, children: g },
          )),
          (t[6] = g),
          (t[7] = a),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== f || t[10] !== h
        ? ((y = s.jsx(
            o("BaseHtmlListItemNestedContext")
              .BaseHtmlListItemNestedContextProvider,
            { nested: f, children: h },
          )),
          (t[9] = f),
          (t[10] = h),
          (t[11] = y))
        : (y = t[11]);
      var C;
      return (
        t[12] !== n || t[13] !== _ || t[14] !== y
          ? ((C = s.jsx(n, { style: _, children: y })),
            (t[12] = n),
            (t[13] = _),
            (t[14] = y),
            (t[15] = C))
          : (C = t[15]),
        C
      );
    }
    function c(e, t) {
      return s.jsx(
        o("BaseHtmlListItemIndexContext").BaseHtmlListItemIndexContextProvider,
        { index: t, children: e },
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
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
      m = {
        marginVertical: {
          marginBottom: "x13xjzxd",
          marginTop: "x14beivq",
          $$css: !0,
        },
        root: {
          marginInlineEnd: "x14z9mp",
          marginInlineStart: "x1lziwak",
          paddingInlineEnd: "xyri2b",
          paddingInlineStart: "x1mfogq2",
          $$css: !0,
        },
      };
    l.default = u;
  },
  98,
);

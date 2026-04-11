__d(
  "FDSPopoverContainer.react",
  [
    "BaseContextualLayerOrientationContext",
    "FDSPopoverContainerPaddingContext",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = {
        padding: {
          paddingTop: "xyamay9",
          paddingBottom: "x1l90r2v",
          paddingInlineStart: "xf7dkkf",
          paddingInlineEnd: "xv54qhq",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        root: {
          backgroundColor: "xezm23g",
          borderTopColor: "xwtykhg",
          borderInlineEndColor: "x1lcr5pl",
          borderBottomColor: "x1sa2p9j",
          borderInlineStartColor: "x1py5zv9",
          borderStartStartRadius: "xw5cjc7",
          borderStartEndRadius: "x1dmpuos",
          borderEndEndRadius: "x1vsv7so",
          borderEndStartRadius: "xau1kf4",
          borderTopStyle: "x18runqf",
          borderInlineEndStyle: "x1w7qqtc",
          borderBottomStyle: "xgfcmlh",
          borderInlineStartStyle: "x174in1k",
          borderTopWidth: "x4ruge8",
          borderInlineEndWidth: "xel12sy",
          borderBottomWidth: "x8ro2h5",
          borderInlineStartWidth: "xd3bsdi",
          boxShadow: "x8ii3r7",
          boxSizing: "x9f619",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      d = {
        end: { borderEndEndRadius: "x16uus16", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderEndStartRadius: "xbiv7yw", $$css: !0 },
        stretch: { $$css: !0 },
      },
      m = {
        end: { borderStartEndRadius: "x1ga7v0g", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderStartStartRadius: "x15mokao", $$css: !0 },
        stretch: { $$css: !0 },
      },
      p = {
        end: { borderEndEndRadius: "x16uus16", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderStartEndRadius: "x1ga7v0g", $$css: !0 },
        stretch: { $$css: !0 },
      },
      _ = {
        end: { borderEndStartRadius: "xbiv7yw", $$css: !0 },
        middle: { $$css: !0 },
        start: { borderStartStartRadius: "x15mokao", $$css: !0 },
        stretch: { $$css: !0 },
      };
    function f(e, t) {
      switch (e) {
        case "above":
          return d[t];
        case "below":
          return m[t];
        case "end":
          return _[t];
        case "start":
          return p[t];
      }
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a = e.ref,
        i = e.withArrow,
        l = e.xstyle,
        d = u(r("BaseContextualLayerOrientationContext")),
        m = d.align,
        p = d.position,
        _ = u(r("FDSPopoverContainerPaddingContext")),
        g = _ && c.padding,
        h;
      t[0] !== m || t[1] !== p || t[2] !== i
        ? ((h = i === !0 && f(p, m)),
          (t[0] = m),
          (t[1] = p),
          (t[2] = i),
          (t[3] = h))
        : (h = t[3]);
      var y;
      t[4] !== g || t[5] !== h || t[6] !== l
        ? ((y = [c.root, g, h, l]),
          (t[4] = g),
          (t[5] = h),
          (t[6] = l),
          (t[7] = y))
        : (y = t[7]);
      var C;
      return (
        t[8] !== n || t[9] !== a || t[10] !== y
          ? ((C = s.jsx(o("react-strict-dom").html.div, {
              ref: a,
              style: y,
              children: n,
            })),
            (t[8] = n),
            (t[9] = a),
            (t[10] = y),
            (t[11] = C))
          : (C = t[11]),
        C
      );
    }
    l.default = g;
  },
  98,
);

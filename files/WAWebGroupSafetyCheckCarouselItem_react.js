__d(
  "WAWebGroupSafetyCheckCarouselItem.react",
  ["WAWebFlex.react", "WAWebText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 140,
      c = 180,
      d = 20,
      m = {
        container: {
          width: "xzjbwwf",
          minHeight: "x7v6ubd",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        text: {
          width: "xoa0rjt",
          minHeight: "xisnujt",
          paddingTop: "x1iorvi4",
          $$css: !0,
        },
        icon: {
          color: "xo1mcw5",
          display: "x78zum5",
          justifyContent: "x1rfj78v",
          alignItems: "x1cy8zhl",
          minWidth: "x1hxoosp",
          paddingInlineStart: "xf7dkkf",
          $$css: !0,
        },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.item,
        r = n.description,
        a = n.icon,
        i = n.iconWidth,
        l = n.title,
        u = i === void 0 ? 24 : i,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c =
            "x6nvzda x4i4b9w xhl9efl xj65ea0 xog00wb x9oqtsu xk1krjo xqk4rbu x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 xzjbwwf x1p57kb1 xvtqlqk xvpt6g3 xdx6fka"),
          (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] !== a || t[2] !== u
        ? ((d = s.jsx(a, {
            xstyle: m.icon,
            width: u,
            height: u,
            directional: !0,
          })),
          (t[1] = a),
          (t[2] = u),
          (t[3] = d))
        : (d = t[3]);
      var p;
      t[4] !== l
        ? ((p = s.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "primary",
            weight: "semibold",
            textWrap: "wrap",
            children: l,
          })),
          (t[4] = l),
          (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== r
        ? ((_ = s.jsx(o("WAWebText.react").WAWebTextSmall, {
            color: "wdsContentDeemphasized",
            paddingTop: 2,
            textWrap: "wrap",
            xstyle: m.text,
            children: r,
          })),
          (t[6] = r),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      t[8] !== p || t[9] !== _
        ? ((f = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: m.text,
            marginTop: 4,
            marginStart: 16,
            children: [p, _],
          })),
          (t[8] = p),
          (t[9] = _),
          (t[10] = f))
        : (f = t[10]);
      var g;
      return (
        t[11] !== d || t[12] !== f
          ? ((g = s.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              testid: void 0,
              className: c,
              children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "start",
                xstyle: m.container,
                children: [d, f],
              }),
            })),
            (t[11] = d),
            (t[12] = f),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    l.default = p;
  },
  98,
);

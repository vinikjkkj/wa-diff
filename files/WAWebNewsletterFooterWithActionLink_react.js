__d(
  "WAWebNewsletterFooterWithActionLink.react",
  ["WAWebFlex.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        border: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
        footer: {
          textAlign: "x2b8uid",
          boxSizing: "x9f619",
          minHeight: "xn7apww",
          $$css: !0,
        },
        paddingHoriz8: {
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingVert16: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          $$css: !0,
        },
      },
      c = { semiBold: { fontWeight: "xk50ysn", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.ref,
        r = e.showBorder,
        a = e.text,
        i = r && u.border,
        l;
      t[0] !== i
        ? ((l = [u.paddingHoriz8, u.paddingVert16, u.footer, i]),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x1evy7pa x1f6kntn xhslqc4" }), (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== a
        ? ((d = s.jsx("span", babelHelpers.extends({}, c, { children: a }))),
          (t[3] = a),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== n || t[6] !== l || t[7] !== d
          ? ((m = s.jsx(o("WAWebFlex.react").FlexRow, {
              ref: n,
              xstyle: l,
              justify: "center",
              children: d,
            })),
            (t[5] = n),
            (t[6] = l),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    ((l.footerTextStyles = c), (l.NewsletterFooterWithActionLink = d));
  },
  98,
);

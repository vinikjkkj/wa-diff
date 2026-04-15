__d(
  "WAWebPaymentPayWithRow.react",
  [
    "WAWebFlex.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        total: { width: "xh8yej3", paddingTop: "x1yrsyyn", $$css: !0 },
        payWithText: {
          fontWeight: "xk50ysn",
          fontSize: "x1f6kntn",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        icon: {
          paddingTop: "x1gxa6cn",
          paddingInlineEnd: "x1uc92m",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.children,
        r = e.childrenXstyle,
        a = e.label,
        i = e.labelXstyle,
        l = e.testid,
        c = e.xstyle,
        d = l === void 0 ? "payment-pay-with-row" : l,
        m;
      t[0] !== c ? ((m = [u.total, c]), (t[0] = c), (t[1] = m)) : (m = t[1]);
      var p;
      t[2] !== i
        ? ((p = [u.payWithText, i]), (t[2] = i), (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== a || t[5] !== p
        ? ((_ = s.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: p,
            children: a,
          })),
          (t[4] = a),
          (t[5] = p),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== r ? ((f = [u.icon, r]), (t[7] = r), (t[8] = f)) : (f = t[8]);
      var g;
      t[9] !== n || t[10] !== f
        ? ((g = s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: f,
            justify: "end",
            children: n,
          })),
          (t[9] = n),
          (t[10] = f),
          (t[11] = g))
        : (g = t[11]);
      var h;
      return (
        t[12] !== m || t[13] !== _ || t[14] !== g || t[15] !== d
          ? ((h = s.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: m,
              justify: "all",
              align: "center",
              testid: void 0,
              children: [_, g],
            })),
            (t[12] = m),
            (t[13] = _),
            (t[14] = g),
            (t[15] = d),
            (t[16] = h))
          : (h = t[16]),
        h
      );
    }
    l.default = c;
  },
  98,
);

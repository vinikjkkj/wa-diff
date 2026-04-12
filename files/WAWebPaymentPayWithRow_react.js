__d(
  "WAWebPaymentPayWithRow.react",
  ["WAWebFlex.react", "WAWebText_DONOTUSE.react", "react"],
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
      var t = e.children,
        n = e.childrenXstyle,
        r = e.label,
        a = e.labelXstyle,
        i = e.testid,
        l = i === void 0 ? "payment-pay-with-row" : i,
        c = e.xstyle;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: [u.total, c],
        justify: "all",
        align: "center",
        testid: void 0,
        children: [
          s.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: [u.payWithText, a],
            children: r,
          }),
          s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [u.icon, n],
            justify: "end",
            children: t,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);

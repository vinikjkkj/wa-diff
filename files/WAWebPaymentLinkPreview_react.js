__d(
  "WAWebPaymentLinkPreview.react",
  [
    "PaymentLinkPreviewWithAmountFeature",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebPaymentAmountDisplay.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 6,
      c = "x1qak2s4-B",
      d = {
        container: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1bu39yj",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        body: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          justifyContent: "xl56j7k",
          lineHeight: "x17fgdl5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xdvlbce",
          paddingInlineStart: "x1iwz3mf",
          $$css: !0,
        },
        title: {
          color: "x14ug900",
          display: "x104kibb",
          fontSize: "x6prxxf",
          fontWeight: "x1s688f",
          lineHeight: "xl6ok4j",
          marginBottom: "xjpr12u",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textAlign: "x1yc453h",
          textOverflow: "xlyipyv",
          WebkitBoxOrient: "x1ua5tub",
          WebkitLineClamp: "x1h7i4cw",
          $$css: !0,
        },
        amountContainer: { flexShrink: "x2lah0s", $$css: !0 },
        inlineAmount: {
          color: "xhslqc4",
          fontSize: "x6prxxf",
          fontWeight: "x1fcty0u",
          lineHeight: "xl6ok4j",
          $$css: !0,
        },
        shimmer: {
          animationDuration: "xvjg3zp",
          animationIterationCount: "xa4qsjk",
          animationName: "x1ptvdk8",
          animationTimingFunction: "x1esw782",
          backgroundImage: "xm0bted",
          height: "x5yr21d",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.isLoading,
        a = e.previewMetadata,
        i = e.title,
        l = e.urlElement,
        c = null,
        m = null;
      if (t[0] !== a.amount || t[1] !== a.currency || t[2] !== a.offset) {
        var p = o("PaymentLinkPreviewWithAmountFeature").computeAmount1000(
          a.amount,
          a.offset,
          a.currency,
        );
        if (p != null) {
          var _ = o("WAWebCurrencyUtils").formatAmount1000ToParts(
              p.currency,
              p.amount1000,
            ),
            f = _.integer.replace(/\D/g, ""),
            g = _.decimal.replace(/\D/g, ""),
            h = f.length + g.length;
          if (h <= u) {
            var y;
            (t[5] !== p
              ? ((y = s.jsx(o("WAWebFlex.react").FlexRow, {
                  shrink: 0,
                  xstyle: d.amountContainer,
                  children: s.jsx(r("WAWebPaymentAmountDisplay.react"), {
                    amount1000: p.amount1000,
                    currency: p.currency,
                    fontSize: 16,
                    width: 96,
                  }),
                })),
                (t[5] = p),
                (t[6] = y))
              : (y = t[6]),
              (c = y));
          } else {
            var C = _.symbol + " " + _.integer + _.decimal,
              b;
            (t[7] !== C
              ? ((b = s.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: d.inlineAmount,
                  children: C,
                })),
                (t[7] = C),
                (t[8] = b))
              : (b = t[8]),
              (m = b));
          }
        }
        ((t[0] = a.amount),
          (t[1] = a.currency),
          (t[2] = a.offset),
          (t[3] = c),
          (t[4] = m));
      } else ((c = t[3]), (m = t[4]));
      var v;
      t[9] !== n || t[10] !== i
        ? ((v =
            !n &&
            i != null &&
            s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.title,
              children: i,
            })),
          (t[9] = n),
          (t[10] = i),
          (t[11] = v))
        : (v = t[11]);
      var S = !n && m,
        R;
      t[12] !== v || t[13] !== S || t[14] !== l
        ? ((R = s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.body,
            children: [v, S, l],
          })),
          (t[12] = v),
          (t[13] = S),
          (t[14] = l),
          (t[15] = R))
        : (R = t[15]);
      var L = !n && c,
        E;
      t[16] !== n
        ? ((E =
            n && s.jsx(o("WAWebFlex.react").FlexRow, { xstyle: d.shimmer })),
          (t[16] = n),
          (t[17] = E))
        : (E = t[17]);
      var k;
      return (
        t[18] !== R || t[19] !== L || t[20] !== E
          ? ((k = s.jsxs(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              xstyle: d.container,
              children: [R, L, E],
            })),
            (t[18] = R),
            (t[19] = L),
            (t[20] = E),
            (t[21] = k))
          : (k = t[21]),
        k
      );
    }
    l.default = m;
  },
  98,
);

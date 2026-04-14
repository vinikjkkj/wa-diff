__d(
  "WAWebPaymentLinkPreview.react",
  [
    "PaymentLinkPreviewWithAmountFeature",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebPaymentAmountDisplay.react",
    "react",
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
      var t = e.isLoading,
        n = e.previewMetadata,
        a = e.title,
        i = e.urlElement,
        l = null,
        c = null,
        m = o("PaymentLinkPreviewWithAmountFeature").computeAmount1000(
          n.amount,
          n.offset,
          n.currency,
        );
      if (m != null) {
        var p = o("WAWebCurrencyUtils").formatAmount1000ToParts(
            m.currency,
            m.amount1000,
          ),
          _ = p.integer.replace(/\D/g, ""),
          f = p.decimal.replace(/\D/g, ""),
          g = _.length + f.length;
        g <= u
          ? (l = s.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              xstyle: d.amountContainer,
              children: s.jsx(r("WAWebPaymentAmountDisplay.react"), {
                amount1000: m.amount1000,
                currency: m.currency,
                fontSize: 16,
                width: 96,
              }),
            }))
          : (c = s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.inlineAmount,
              children: p.symbol + " " + p.integer + p.decimal,
            }));
      }
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        testid: void 0,
        xstyle: d.container,
        children: [
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.body,
            children: [
              !t &&
                a != null &&
                s.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: d.title,
                  children: a,
                }),
              !t && c,
              i,
            ],
          }),
          !t && l,
          t && s.jsx(o("WAWebFlex.react").FlexRow, { xstyle: d.shimmer }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);

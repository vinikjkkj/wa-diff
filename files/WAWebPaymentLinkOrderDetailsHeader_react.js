__d(
  "WAWebPaymentLinkOrderDetailsHeader.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMastercardLogoIcon.react",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebPaymentAmountDisplay.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebUISpacing",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        header: {
          boxSizing: "x9f619",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          marginTop: "xfl633f",
          marginBottom: "xefnzgg",
          marginInlineStart: "x1sbwfh8",
          marginInlineEnd: "x16q7b9a",
          marginLeft: null,
          marginRight: null,
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x6egj2d", $$css: !0 },
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        subdomainRow: { marginTop: "x9otpla", $$css: !0 },
        subdomainText: {
          fontSize: "x1pg5gke",
          color: "xhslqc4",
          paddingInlineStart: "x135b78x",
          $$css: !0,
        },
        payWithRow: {
          width: "xh8yej3",
          paddingTop: "x1yrsyyn",
          paddingBottom: "x18d9i69",
          $$css: !0,
        },
        payWithText: { fontWeight: "xk50ysn", fontSize: "x1f6kntn", $$css: !0 },
        iconsContainer: {
          flexGrow: "x1iyjqo2",
          justifyContent: "x13a6bvl",
          alignSelf: "xpvyfi4",
          $$css: !0,
        },
        linkIconSmall: {
          width: "x6jxa94",
          height: "x1v9usgg",
          color: "xhslqc4",
          $$css: !0,
        },
        cardBrandIcon: {
          marginInlineStart: "xdwrcjd",
          marginTop: "x1gslohp",
          backgroundColor: "x1p8t8ri",
          width: "x1849jeq",
          height: "xxk0z11",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1ekq09l",
          borderInlineEndColor: "xlmuga0",
          borderBottomColor: "x54tcbp",
          borderInlineStartColor: "xlzwp1d",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.isSentByMe,
        a = e.matchedText,
        i = e.onClick,
        l = e.parsedAmount,
        d = n ? c.bubbleOut : c.bubbleIn,
        m;
      t[0] !== d ? ((m = [c.header, d]), (t[0] = d), (t[1] = m)) : (m = t[1]);
      var p;
      t[2] !== l.amount1000 || t[3] !== l.currency
        ? ((p = u.jsx(r("WAWebPaymentAmountDisplay.react"), {
            amount1000: l.amount1000,
            currency: l.currency,
          })),
          (t[2] = l.amount1000),
          (t[3] = l.currency),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebUISpacing").uiPadding.bottom8,
            o("WAWebUISpacing").uiPadding.horiz8,
          ]),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: c.payWithText,
            children: s._(/*BTDS*/ "Pay with"),
          })),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon, {
            iconXstyle: c.cardBrandIcon,
            viewBox: { x: 0, y: 5, width: 24, height: 14 },
          })),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: c.payWithRow,
            align: "center",
            testid: void 0,
            children: [
              f,
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: c.iconsContainer,
                children: [
                  g,
                  u.jsx(o("WAWebMastercardLogoIcon.react").MastercardLogoIcon, {
                    iconXstyle: c.cardBrandIcon,
                    viewBox: { x: -2, y: -1.5, width: 26, height: 16 },
                  }),
                ],
              }),
            ],
          })),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSIconIcLink.react"), {
            testid: void 0,
            iconXstyle: c.linkIconSmall,
          })),
          (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== a
        ? ((C = o("WAWebMediaLinkPreviewContainer.react").getHostnameForUrl(a)),
          (t[10] = a),
          (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] !== C
        ? ((b = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: _,
            children: [
              h,
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: c.subdomainRow,
                children: [
                  y,
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    xstyle: c.subdomainText,
                    children: C,
                  }),
                ],
              }),
            ],
          })),
          (t[12] = C),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] !== b || t[15] !== m || t[16] !== p
        ? ((v = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            testid: void 0,
            align: "stretch",
            xstyle: m,
            children: [p, b],
          })),
          (t[14] = b),
          (t[15] = m),
          (t[16] = p),
          (t[17] = v))
        : (v = t[17]);
      var S;
      return (
        t[18] !== i || t[19] !== v
          ? ((S = u.jsx("div", {
              role: "button",
              onClick: i,
              onKeyPress: i,
              tabIndex: 0,
              "data-testid": void 0,
              children: v,
            })),
            (t[18] = i),
            (t[19] = v),
            (t[20] = S))
          : (S = t[20]),
        S
      );
    }
    l.default = d;
  },
  226,
);

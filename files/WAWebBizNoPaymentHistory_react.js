__d(
  "WAWebBizNoPaymentHistory.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebWdsSmbPictoReceiptAndroidIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(
            o("WAWebWdsSmbPictoReceiptAndroidIcon.react")
              .WdsSmbPictoReceiptAndroidIcon,
            { height: 88, width: 88 },
          )),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: o("WAWebUISpacing").uiPadding.top9,
              children: [
                t,
                u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  xstyle: o("WAWebUISpacing").uiPadding.all16,
                  children: s._(/*BTDS*/ "No payment history"),
                }),
              ],
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = c;
  },
  226,
);

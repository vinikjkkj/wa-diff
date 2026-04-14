__d(
  "WAWebBizNoPaymentHistory.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebWdsSmbPictoReceiptAndroidIcon.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: o("WAWebUISpacing").uiPadding.top9,
        children: [
          u.jsx(
            o("WAWebWdsSmbPictoReceiptAndroidIcon.react")
              .WdsSmbPictoReceiptAndroidIcon,
            { height: 88, width: 88 },
          ),
          u.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            xstyle: o("WAWebUISpacing").uiPadding.all16,
            children: s._(/*BTDS*/ "No payment history"),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);

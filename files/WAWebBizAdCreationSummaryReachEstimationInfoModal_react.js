__d(
  "WAWebBizAdCreationSummaryReachEstimationInfoModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        root: {
          width: "x3p9ev8",
          boxSizing: "x9f619",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        header: {
          columnGap: "xrdqr27",
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x1phvje8",
          $$css: !0,
        },
        content: {
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
        closeButton: { height: "xg7h5cd", width: "xeq5yr9", $$css: !0 },
      },
      d = "https://www.facebook.com/business/help/675615482516035";
    function m() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          xstyle: c.root,
          children: [
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: c.header,
              children: [
                u.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcClose.react"),
                  variant: "borderless",
                  size: "medium",
                  onPress: o("WAWebModalManager").closeModalManager,
                  xstyle: c.closeButton,
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Estimated impressions"),
                }),
              ],
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "stretch",
              xstyle: c.content,
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "This is the estimated number of impressions your ad may receive each day based on your bid, budget, and audience. Your actual impressions may be higher or lower than this estimate. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(r("WDSTextualLink.react"), {
                        href: d,
                        children: s._(/*BTDS*/ "{learnMoreLink}", [
                          s._param(
                            "learnMoreLink",
                            r("WAWebFbtCommon")("Learn more"),
                          ),
                        ]),
                      }),
                    ),
                  ],
                ),
              }),
            }),
          ],
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

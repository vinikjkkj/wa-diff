__d(
  "WAWebNativeFlowPaymentInfoOrderDetailsHeader",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebFlex.react",
    "WAWebPixLogoIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsTypes",
    "WAWebWdsSmbPaymentsPixFilledIcon.react",
    "WDSText.react",
    "react",
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
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        paymentInfo: { width: "xh8yej3", $$css: !0 },
        paymentInfoContent: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        iconPrimary: { fill: "x1sl2vhy", $$css: !0 },
        iconBackground: { fill: "x1389dxx", $$css: !0 },
        pixIcon: {
          color: "x1du590y",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          width: "x100vrsf",
          height: "x1vqgdyp",
          minWidth: "x1fns5xo",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          lineHeight: "x14ju556",
          $$css: !0,
        },
      };
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_pix_key_bubble_content_update",
      );
    }
    function m(e) {
      var t,
        n,
        a,
        i,
        l = e.isSentByMe,
        m = e.orderInfo,
        p = m.paymentSettings,
        _ =
          p == null || (t = p.at(0)) == null
            ? void 0
            : t[
                o("WAWebBizOrderDetailsParams").PaymentSettingType
                  .PIX_STATIC_CODE
              ],
        f = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          (n = _ == null ? void 0 : _.key) != null ? n : "",
          (a = o("WAWebUserPrefsTypes").PixKeyType.cast(
            _ == null ? void 0 : _.key_type,
          )) != null
            ? a
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        ),
        g = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(
          _ == null ? void 0 : _.key_type,
        ),
        h = (i = _ == null ? void 0 : _.merchant_name) != null ? i : "";
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          c.header,
          o("WAWebUISpacing").uiPadding.top6,
          o("WAWebUISpacing").uiPadding.bottom8,
          o("WAWebUISpacing").uiPadding.horiz8,
          o("WAWebUISpacing").uiMargin.bottom12,
          l ? c.bubbleOut : c.bubbleIn,
        ],
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: c.paymentInfo,
          justify: "all",
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            className: "xh8yej3",
            children: [
              d()
                ? u.jsx(
                    o("WAWebWdsSmbPaymentsPixFilledIcon.react")
                      .WdsSmbPaymentsPixFilledIcon,
                    { height: 24, width: 24, xstyle: c.pixIcon },
                  )
                : u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                    height: 48,
                    innerStyles: {
                      background: c.iconBackground,
                      primary: c.iconPrimary,
                    },
                  }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: [
                  c.paymentInfoContent,
                  o("WAWebUISpacing").uiPadding.horiz8,
                  d() && o("WAWebUISpacing").uiPadding.top4,
                ],
                children: [
                  d()
                    ? u.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentDefault",
                        children: s._(/*BTDS*/ "Requested by {merchant_name}", [
                          s._param("merchant_name", h),
                        ]),
                      })
                    : u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        textWrap: "ellipsis",
                        children: h,
                      }),
                  d()
                    ? u.jsx(r("WDSText.react"), {
                        type: "Body3",
                        colorName: "contentDeemphasized",
                        children: f,
                      })
                    : u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                        color: "secondary",
                        textWrap: "ellipsis",
                        children: [g, ": ", f],
                      }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

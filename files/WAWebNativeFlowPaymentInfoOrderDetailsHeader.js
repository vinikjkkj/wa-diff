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
    "WAWebUserPrefsTypes",
    "WDSIconWdsSmbPaymentsPixFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { paddingTop6: { paddingTop: "x1yrsyyn", $$css: !0 } },
      d = {
        header: {
          boxSizing: "x9f619",
          borderStartStartRadius: "x1i282gy",
          borderStartEndRadius: "xx9ypkp",
          borderEndEndRadius: "xd15eu0",
          borderEndStartRadius: "x11ecxm0",
          $$css: !0,
        },
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        paymentInfo: { width: "xh8yej3", $$css: !0 },
        paymentInfoWrapper: { width: "xh8yej3", $$css: !0 },
        paymentInfoContent: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        iconPrimary: { fill: "xfifr3o", $$css: !0 },
        iconBackground: { fill: "xfifr3o", opacity: "x1xyvc85", $$css: !0 },
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
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_pix_key_bubble_content_update",
      );
    }
    function p(e) {
      var t,
        n,
        a,
        i,
        l = e.isSentByMe,
        p = e.orderInfo,
        _ = p.paymentSettings,
        f =
          _ == null || (t = _.at(0)) == null
            ? void 0
            : t[
                o("WAWebBizOrderDetailsParams").PaymentSettingType
                  .PIX_STATIC_CODE
              ],
        g = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          (n = f == null ? void 0 : f.key) != null ? n : "",
          (a = o("WAWebUserPrefsTypes").PixKeyType.cast(
            f == null ? void 0 : f.key_type,
          )) != null
            ? a
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        ),
        h = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(
          f == null ? void 0 : f.key_type,
        ),
        y = (i = f == null ? void 0 : f.merchant_name) != null ? i : "",
        C = l
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "", [s._param("merchant_name", y)]);
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          d.header,
          c.paddingTop6,
          o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
          o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
          o("WDSMargins.stylex").wdsMargins.marginBottom12,
          l ? d.bubbleOut : d.bubbleIn,
        ],
        children: u.jsx(o("WAWebFlex.react").FlexRow, {
          xstyle: d.paymentInfo,
          justify: "all",
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d.paymentInfoWrapper,
            children: [
              m()
                ? u.jsx(r("WDSIconWdsSmbPaymentsPixFilled.react"), {
                    testid: "wds-smb-payments-pix-filled",
                    height: 24,
                    width: 24,
                    xstyle: d.pixIcon,
                  })
                : u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                    height: 48,
                    innerStyles: {
                      background: d.iconBackground,
                      primary: d.iconPrimary,
                    },
                  }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: [
                  d.paymentInfoContent,
                  o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
                  m() && o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
                ],
                children: [
                  m()
                    ? u.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentDefault",
                        children: C,
                      })
                    : u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        textWrap: "ellipsis",
                        children: y,
                      }),
                  m()
                    ? u.jsx(r("WDSText.react"), {
                        type: "Body3",
                        colorName: "contentDeemphasized",
                        children: g,
                      })
                    : u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                        color: "secondary",
                        textWrap: "ellipsis",
                        children: [h, ": ", g],
                      }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

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
    "WAWebWdsSmbPaymentsPixFilledIcon.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(23),
        n = e.isSentByMe,
        a = e.orderInfo,
        i = a.paymentSettings,
        l,
        p,
        _,
        f;
      if (t[0] !== n || t[1] !== i) {
        var g,
          h,
          y,
          C,
          b =
            i == null || (g = i.at(0)) == null
              ? void 0
              : g[
                  o("WAWebBizOrderDetailsParams").PaymentSettingType
                    .PIX_STATIC_CODE
                ];
        ((l = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          (h = b == null ? void 0 : b.key) != null ? h : "",
          (y = o("WAWebUserPrefsTypes").PixKeyType.cast(
            b == null ? void 0 : b.key_type,
          )) != null
            ? y
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        )),
          (_ = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(
            b == null ? void 0 : b.key_type,
          )),
          (p = (C = b == null ? void 0 : b.merchant_name) != null ? C : ""),
          (f = n
            ? s._(/*BTDS*/ "Requested by You")
            : s._(/*BTDS*/ "Requested by {merchant_name}", [
                s._param("merchant_name", p),
              ])),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = p),
          (t[4] = _),
          (t[5] = f));
      } else ((l = t[2]), (p = t[3]), (_ = t[4]), (f = t[5]));
      var v = f,
        S = n ? d.bubbleOut : d.bubbleIn,
        R;
      t[6] !== S
        ? ((R = [
            d.header,
            c.paddingTop6,
            o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            o("WDSMargins.stylex").wdsMargins.marginBottom12,
            S,
          ]),
          (t[6] = S),
          (t[7] = R))
        : (R = t[7]);
      var L, E;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = "xh8yej3"),
          (E = m()
            ? u.jsx(
                o("WAWebWdsSmbPaymentsPixFilledIcon.react")
                  .WdsSmbPaymentsPixFilledIcon,
                { height: 24, width: 24, xstyle: d.pixIcon },
              )
            : u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                height: 48,
                innerStyles: {
                  background: d.iconBackground,
                  primary: d.iconPrimary,
                },
              })),
          (t[8] = L),
          (t[9] = E))
        : ((L = t[8]), (E = t[9]));
      var k;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [
            d.paymentInfoContent,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            m() && o("WDSPaddings.stylex").wdsPaddings.paddingTop4,
          ]),
          (t[10] = k))
        : (k = t[10]);
      var I;
      t[11] !== p || t[12] !== v
        ? ((I = m()
            ? u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDefault",
                children: v,
              })
            : u.jsx(o("WAWebText.react").WAWebTextTitle, {
                textWrap: "ellipsis",
                children: p,
              })),
          (t[11] = p),
          (t[12] = v),
          (t[13] = I))
        : (I = t[13]);
      var T;
      t[14] !== l || t[15] !== _
        ? ((T = m()
            ? u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: l,
              })
            : u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                color: "secondary",
                textWrap: "ellipsis",
                children: [_, ": ", l],
              })),
          (t[14] = l),
          (t[15] = _),
          (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== I || t[18] !== T
        ? ((D = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: d.paymentInfo,
            justify: "all",
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              className: L,
              children: [
                E,
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: k,
                  children: [I, T],
                }),
              ],
            }),
          })),
          (t[17] = I),
          (t[18] = T),
          (t[19] = D))
        : (D = t[19]);
      var x;
      return (
        t[20] !== R || t[21] !== D
          ? ((x = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: R,
              children: D,
            })),
            (t[20] = R),
            (t[21] = D),
            (t[22] = x))
          : (x = t[22]),
        x
      );
    }
    l.default = p;
  },
  226,
);

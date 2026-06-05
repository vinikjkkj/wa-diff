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
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_pix_key_bubble_content_update",
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.isSentByMe,
        a = e.orderInfo,
        i = a.paymentSettings,
        l,
        m,
        p,
        _;
      if (t[0] !== n || t[1] !== i) {
        var f,
          g,
          h,
          y,
          C =
            i == null || (f = i.at(0)) == null
              ? void 0
              : f[
                  o("WAWebBizOrderDetailsParams").PaymentSettingType
                    .PIX_STATIC_CODE
                ];
        ((l = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          (g = C == null ? void 0 : C.key) != null ? g : "",
          (h = o("WAWebUserPrefsTypes").PixKeyType.cast(
            C == null ? void 0 : C.key_type,
          )) != null
            ? h
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        )),
          (p = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(
            C == null ? void 0 : C.key_type,
          )),
          (m = (y = C == null ? void 0 : C.merchant_name) != null ? y : ""),
          (_ = n
            ? s._(/*BTDS*/ "Requested by You")
            : s._(/*BTDS*/ "Requested by {merchant_name}", [
                s._param("merchant_name", m),
              ])),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = m),
          (t[4] = p),
          (t[5] = _));
      } else ((l = t[2]), (m = t[3]), (p = t[4]), (_ = t[5]));
      var b = _,
        v = n ? c.bubbleOut : c.bubbleIn,
        S;
      if (t[6] !== v) {
        var R;
        ((S = [
          c.header,
          (R = o("WAWebUISpacing")).uiPadding.top6,
          R.uiPadding.bottom8,
          R.uiPadding.horiz8,
          R.uiMargin.bottom12,
          v,
        ]),
          (t[6] = v),
          (t[7] = S));
      } else S = t[7];
      var L, E;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = "xh8yej3"),
          (E = d()
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
              })),
          (t[8] = L),
          (t[9] = E))
        : ((L = t[8]), (E = t[9]));
      var k;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [
            c.paymentInfoContent,
            o("WAWebUISpacing").uiPadding.horiz8,
            d() && o("WAWebUISpacing").uiPadding.top4,
          ]),
          (t[10] = k))
        : (k = t[10]);
      var I;
      t[11] !== m || t[12] !== b
        ? ((I = d()
            ? u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDefault",
                children: b,
              })
            : u.jsx(o("WAWebText.react").WAWebTextTitle, {
                textWrap: "ellipsis",
                children: m,
              })),
          (t[11] = m),
          (t[12] = b),
          (t[13] = I))
        : (I = t[13]);
      var T;
      t[14] !== l || t[15] !== p
        ? ((T = d()
            ? u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: l,
              })
            : u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                color: "secondary",
                textWrap: "ellipsis",
                children: [p, ": ", l],
              })),
          (t[14] = l),
          (t[15] = p),
          (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] !== I || t[18] !== T
        ? ((D = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: c.paymentInfo,
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
        t[20] !== S || t[21] !== D
          ? ((x = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: S,
              children: D,
            })),
            (t[20] = S),
            (t[21] = D),
            (t[22] = x))
          : (x = t[22]),
        x
      );
    }
    l.default = m;
  },
  226,
);

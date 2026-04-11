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
      var t = o("react-compiler-runtime").c(44),
        n = e.isSentByMe,
        a = e.orderInfo,
        i = a.paymentSettings,
        l,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L;
      if (t[0] !== n || t[1] !== i) {
        var E,
          k,
          I,
          T,
          D =
            i == null || (E = i.at(0)) == null
              ? void 0
              : E[
                  o("WAWebBizOrderDetailsParams").PaymentSettingType
                    .PIX_STATIC_CODE
                ];
        ((f = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          (k = D == null ? void 0 : D.key) != null ? k : "",
          (I = o("WAWebUserPrefsTypes").PixKeyType.cast(
            D == null ? void 0 : D.key_type,
          )) != null
            ? I
            : o("WAWebUserPrefsTypes").PixKeyType.PHONE,
        )),
          (g = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(
            D == null ? void 0 : D.key_type,
          )));
        var x = (T = D == null ? void 0 : D.merchant_name) != null ? T : "";
        _ = o("WAWebFlex.react").FlexColumn;
        var $ = n ? c.bubbleOut : c.bubbleIn;
        if (t[16] !== $) {
          var P;
          ((L = [
            c.header,
            (P = o("WAWebUISpacing")).uiPadding.top6,
            P.uiPadding.bottom8,
            P.uiPadding.horiz8,
            P.uiMargin.bottom12,
            $,
          ]),
            (t[16] = $),
            (t[17] = L));
        } else L = t[17];
        ((p = o("WAWebFlex.react").FlexRow),
          (S = c.paymentInfo),
          (R = "all"),
          (m = o("WAWebFlex.react").FlexRow),
          (C = "center"),
          t[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = "xh8yej3"),
              (v = d()
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
              (t[18] = b),
              (t[19] = v))
            : ((b = t[18]), (v = t[19])),
          (l = o("WAWebFlex.react").FlexColumn),
          t[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = [
                c.paymentInfoContent,
                o("WAWebUISpacing").uiPadding.horiz8,
                d() && o("WAWebUISpacing").uiPadding.top4,
              ]),
              (t[20] = h))
            : (h = t[20]),
          (y = d()
            ? u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Requested by {merchant_name}", [
                  s._param("merchant_name", x),
                ]),
              })
            : u.jsx(o("WAWebText.react").WAWebTextTitle, {
                textWrap: "ellipsis",
                children: x,
              })),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = m),
          (t[4] = p),
          (t[5] = _),
          (t[6] = f),
          (t[7] = g),
          (t[8] = h),
          (t[9] = y),
          (t[10] = C),
          (t[11] = b),
          (t[12] = v),
          (t[13] = S),
          (t[14] = R),
          (t[15] = L));
      } else
        ((l = t[2]),
          (m = t[3]),
          (p = t[4]),
          (_ = t[5]),
          (f = t[6]),
          (g = t[7]),
          (h = t[8]),
          (y = t[9]),
          (C = t[10]),
          (b = t[11]),
          (v = t[12]),
          (S = t[13]),
          (R = t[14]),
          (L = t[15]));
      var N;
      t[21] !== f || t[22] !== g
        ? ((N = d()
            ? u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: f,
              })
            : u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                color: "secondary",
                textWrap: "ellipsis",
                children: [g, ": ", f],
              })),
          (t[21] = f),
          (t[22] = g),
          (t[23] = N))
        : (N = t[23]);
      var M;
      t[24] !== l || t[25] !== h || t[26] !== y || t[27] !== N
        ? ((M = u.jsxs(l, { xstyle: h, children: [y, N] })),
          (t[24] = l),
          (t[25] = h),
          (t[26] = y),
          (t[27] = N),
          (t[28] = M))
        : (M = t[28]);
      var w;
      t[29] !== m || t[30] !== M || t[31] !== C || t[32] !== b || t[33] !== v
        ? ((w = u.jsxs(m, { align: C, className: b, children: [v, M] })),
          (t[29] = m),
          (t[30] = M),
          (t[31] = C),
          (t[32] = b),
          (t[33] = v),
          (t[34] = w))
        : (w = t[34]);
      var A;
      t[35] !== p || t[36] !== w || t[37] !== S || t[38] !== R
        ? ((A = u.jsx(p, { xstyle: S, justify: R, children: w })),
          (t[35] = p),
          (t[36] = w),
          (t[37] = S),
          (t[38] = R),
          (t[39] = A))
        : (A = t[39]);
      var F;
      return (
        t[40] !== _ || t[41] !== A || t[42] !== L
          ? ((F = u.jsx(_, { xstyle: L, children: A })),
            (t[40] = _),
            (t[41] = A),
            (t[42] = L),
            (t[43] = F))
          : (F = t[43]),
        F
      );
    }
    l.default = m;
  },
  226,
);

__d(
  "WAWebSimplifiedPaymentHeader.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMessageMeta.react",
    "WAWebOrderPaymentStatus",
    "WAWebPaymentAmountDisplay.react",
    "WAWebPaymentPayWithRow.react",
    "WAWebText_DONOTUSE.react",
    "WAWebWebIcCheckIcon.react",
    "WDSIconWdsIcCurrencyReal.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
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
        bubbleIn: { backgroundColor: "x1bu39yj", $$css: !0 },
        bubbleOut: { backgroundColor: "x1bu39yj", $$css: !0 },
        total: { width: "xh8yej3", paddingTop: "x1yrsyyn", $$css: !0 },
        subtitle: { width: "xh8yej3", $$css: !0 },
        requestedByText: { paddingInlineStart: "x25sj25", $$css: !0 },
        sendToText: {
          fontWeight: "xk50ysn",
          fontSize: "x1f6kntn",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        completedText: {
          fontWeight: "xo1l8bm",
          fontSize: "x1pg5gke",
          paddingInlineStart: "x25sj25",
          color: "xo1mcw5",
          $$css: !0,
        },
        canceledText: {
          fontWeight: "xo1l8bm",
          fontSize: "x1pg5gke",
          paddingInlineStart: "x25sj25",
          color: "xqnyt8g",
          $$css: !0,
        },
        meta: {
          paddingTop: "x1gxa6cn",
          paddingInlineEnd: "x1uc92m",
          height: "xiryn5a",
          $$css: !0,
        },
        checkIcon: {
          marginTop: "x1k70j0n",
          marginInlineStart: "x13fj5qh",
          marginInlineEnd: "xnnr8r",
          color: "x1du590y",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          width: "xvy4d1p",
          height: "xxk0z11",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        canceledIcon: {
          marginTop: "x1k70j0n",
          marginInlineStart: "x13fj5qh",
          marginInlineEnd: "xnnr8r",
          color: "x30a034",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          width: "xvy4d1p",
          height: "xxk0z11",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        pendingIcon: {
          marginTop: "x1k70j0n",
          marginInlineStart: "x13fj5qh",
          marginInlineEnd: "xnnr8r",
          color: "xhslqc4",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          width: "xvy4d1p",
          height: "xxk0z11",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        pendingText: {
          fontWeight: "xo1l8bm",
          fontSize: "x1pg5gke",
          paddingInlineStart: "x25sj25",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.amount1000,
        a = e.chat,
        i = e.currency,
        l = e.displayType,
        d = e.isPaymentRequest,
        m = e.isSentByMe,
        p = e.msg,
        _ = e.orderId,
        f = e.orderPaymentStatus,
        g = e.payIcons,
        h = e.xstyle,
        y = a.contact,
        C;
      t[0] !== y
        ? ((C =
            y.verifiedName ||
            y.name ||
            o("WAWebFrontendContactGetters").getDisplayName(y)),
          (t[0] = y),
          (t[1] = C))
        : (C = t[1]);
      var b = C,
        v = m ? c.bubbleOut : c.bubbleIn,
        S;
      t[2] !== v || t[3] !== h
        ? ((S = [c.container, v, h]), (t[2] = v), (t[3] = h), (t[4] = S))
        : (S = t[4]);
      var R = f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed,
        L;
      t[5] !== n || t[6] !== i || t[7] !== R
        ? ((L = u.jsx(r("WAWebPaymentAmountDisplay.react"), {
            amount1000: n,
            currency: i,
            isStrikethrough: R,
          })),
          (t[5] = n),
          (t[6] = i),
          (t[7] = R),
          (t[8] = L))
        : (L = t[8]);
      var E;
      t[9] !== b || t[10] !== _ || t[11] !== f
        ? ((E =
            f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [
                u.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, {
                  iconXstyle: c.checkIcon,
                }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: c.total,
                  justify: "all",
                  align: "start",
                  testid: void 0,
                  children: [
                    u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      xstyle: c.sendToText,
                      children: s._(/*BTDS*/ "Sent to {merchant-name}", [
                        s._param("merchant-name", b),
                      ]),
                    }),
                    u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      xstyle: c.completedText,
                      children: s._(/*BTDS*/ "Completed"),
                    }),
                  ],
                }),
              ],
            })),
          (t[9] = b),
          (t[10] = _),
          (t[11] = f),
          (t[12] = E))
        : (E = t[12]);
      var k;
      t[13] !== b || t[14] !== _ || t[15] !== f
        ? ((k =
            f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [
                u.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
                  iconXstyle: c.canceledIcon,
                }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: c.total,
                  justify: "all",
                  align: "start",
                  testid: void 0,
                  children: [
                    u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      xstyle: c.sendToText,
                      children: s._(/*BTDS*/ "Send to {merchant-name}", [
                        s._param("merchant-name", b),
                      ]),
                    }),
                    u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      xstyle: c.canceledText,
                      children: s._(/*BTDS*/ "Failed"),
                    }),
                  ],
                }),
              ],
            })),
          (t[13] = b),
          (t[14] = _),
          (t[15] = f),
          (t[16] = k))
        : (k = t[16]);
      var I;
      t[17] !== b || t[18] !== _ || t[19] !== f
        ? ((I =
            f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [
                u.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
                  iconXstyle: c.pendingIcon,
                }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: c.total,
                  justify: "all",
                  align: "start",
                  testid: void 0,
                  children: [
                    u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      xstyle: c.sendToText,
                      children: s._(/*BTDS*/ "Send to {merchant-name}", [
                        s._param("merchant-name", b),
                      ]),
                    }),
                    u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      xstyle: c.pendingText,
                      children: s._(/*BTDS*/ "Pending"),
                    }),
                  ],
                }),
              ],
            })),
          (t[17] = b),
          (t[18] = _),
          (t[19] = f),
          (t[20] = I))
        : (I = t[20]);
      var T;
      t[21] !== f || t[22] !== g
        ? ((T =
            g != null &&
            (g == null ? void 0 : g.length) > 0 &&
            f == null &&
            u.jsx(r("WAWebPaymentPayWithRow.react"), {
              label: s._(/*BTDS*/ "Pay with"),
              testid: void 0,
              children: g,
            })),
          (t[21] = f),
          (t[22] = g),
          (t[23] = T))
        : (T = t[23]);
      var D;
      t[24] !== l || t[25] !== d || t[26] !== m || t[27] !== b || t[28] !== p
        ? ((D =
            d &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: c.subtitle,
              justify: "all",
              align: "center",
              testid: void 0,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  xstyle: c.requestedByText,
                  children: s._(
                    /*BTDS*/ "{merchant-name} requested a payment",
                    [s._param("merchant-name", m ? "You" : b)],
                  ),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  xstyle: c.meta,
                  justify: "end",
                  children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msg: p,
                    displayType: l,
                  }),
                }),
              ],
            })),
          (t[24] = l),
          (t[25] = d),
          (t[26] = m),
          (t[27] = b),
          (t[28] = p),
          (t[29] = D))
        : (D = t[29]);
      var x;
      return (
        t[30] !== D ||
        t[31] !== S ||
        t[32] !== L ||
        t[33] !== E ||
        t[34] !== k ||
        t[35] !== I ||
        t[36] !== T
          ? ((x = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: S,
              children: [L, E, k, I, T, D],
            })),
            (t[30] = D),
            (t[31] = S),
            (t[32] = L),
            (t[33] = E),
            (t[34] = k),
            (t[35] = I),
            (t[36] = T),
            (t[37] = x))
          : (x = t[37]),
        x
      );
    }
    l.default = d;
  },
  226,
);

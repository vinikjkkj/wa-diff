__d(
  "WAWebNativeFlowOrderDetailsHeader",
  [
    "fbt",
    "WAWebActionCheckCircleIcon.react",
    "WAWebFlex.react",
    "WAWebOrderGatingUtils",
    "WAWebOrderPaymentStatus",
    "WAWebTextLineClamp.react",
    "WAWebText_DONOTUSE.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { paddingTop6: { paddingTop: "x1yrsyyn", $$css: !0 } },
      m = {
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
        orderId: {
          textTransform: "xtvhhri",
          letterSpacing: "xkffqfj",
          lineHeight: "x1dbl2gt",
          $$css: !0,
        },
        hr: {
          width: "xh8yej3",
          borderTopWidth: "x178xt8z",
          borderTopStyle: "xlya59e",
          borderTopColor: "x1exxf4d",
          $$css: !0,
        },
        media: {
          minWidth: "x900493",
          height: "xsdox4t",
          maxHeight: "xmz0i5r",
          backgroundPosition: "x1xsqp64",
          backgroundSize: "x18d0r48",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        total: { width: "xh8yej3", $$css: !0 },
        icon: {
          paddingTop: "x1gxa6cn",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(31),
        a = t.amount,
        i = t.documentPreview,
        l = t.isSentByMe,
        u = t.numberOfItems,
        p = t.orderId,
        f = t.orderPaymentStatus,
        g = t.payIcons,
        h = t.quantity,
        y = t.text,
        C = t.thumbnail,
        b = t.xstyle,
        v = l ? m.bubbleOut : m.bubbleIn,
        S;
      n[0] !== v || n[1] !== b
        ? ((S = [
            m.header,
            d.paddingTop6,
            o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
            v,
            b,
          ]),
          (n[0] = v),
          (n[1] = b),
          (n[2] = S))
        : (S = n[2]);
      var R;
      n[3] !== p
        ? ((R = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Charge #{order}", [s._param("order", p)])
            : s._(/*BTDS*/ "Order #{order}", [s._param("order", p)])),
          (n[3] = p),
          (n[4] = R))
        : (R = n[4]);
      var L;
      n[5] !== R
        ? ((L = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            color: "secondary",
            weight: "medium",
            xstyle: m.orderId,
            size: "10",
            children: R,
          })),
          (n[5] = R),
          (n[6] = L))
        : (L = n[6]);
      var E;
      n[7] !== f
        ? ((E =
            f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured &&
            c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              testid: "order-header-payment-status-paid",
              color: "secondary",
              weight: "medium",
              size: "10",
              xstyle: m.orderId,
              children: [
                c.jsx(
                  o("WAWebActionCheckCircleIcon.react").ActionCheckCircleIcon,
                  { width: 12, displayInline: !0, xstyle: m.icon },
                ),
                s._(/*BTDS*/ "Paid"),
              ],
            })),
          (n[7] = f),
          (n[8] = E))
        : (E = n[8]);
      var k;
      n[9] !== L || n[10] !== E
        ? ((k = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.total,
            justify: "all",
            children: [L, E],
          })),
          (n[9] = L),
          (n[10] = E),
          (n[11] = k))
        : (k = n[11]);
      var I;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.hr,
                o("WDSMargins.stylex").wdsMargins.marginTop4,
                o("WDSMargins.stylex").wdsMargins.marginBottom8,
              ),
            ),
          )),
          (n[12] = I))
        : (I = n[12]);
      var T;
      n[13] !== i || n[14] !== u || n[15] !== h || n[16] !== y || n[17] !== C
        ? ((T =
            i != null
              ? i
              : c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  className: "xh8yej3",
                  children: [
                    C != null && C !== ""
                      ? c.jsx("div", {
                          className: (e || (e = r("stylex")))(
                            m.media,
                            o("WDSMargins.stylex").wdsMargins.marginEnd8,
                          ),
                          style: { backgroundImage: "url(" + C + ")" },
                        })
                      : null,
                    c.jsxs("div", {
                      className: "x6ikm8r x10wlt62",
                      children: [
                        c.jsx(r("WAWebTextLineClamp.react"), {
                          maxLines: 1,
                          children: y,
                        }),
                        c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                          color: "secondary",
                          children: _(u, h),
                        }),
                      ],
                    }),
                  ],
                })),
          (n[13] = i),
          (n[14] = u),
          (n[15] = h),
          (n[16] = y),
          (n[17] = C),
          (n[18] = T))
        : (T = n[18]);
      var D;
      n[19] !== g
        ? ((D =
            g != null &&
            (g == null ? void 0 : g.length) > 0 &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      m.hr,
                      o("WDSMargins.stylex").wdsMargins.marginVer8,
                    ),
                  ),
                ),
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: m.total,
                  justify: "all",
                  align: "center",
                  testid: "order-header-pay-with-row",
                  children: [
                    c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      size: "14",
                      children: s._(/*BTDS*/ "Pay with"),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: m.icon,
                      justify: "end",
                      children: g,
                    }),
                  ],
                }),
              ],
            })),
          (n[19] = g),
          (n[20] = D))
        : (D = n[20]);
      var x;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.hr,
                o("WDSMargins.stylex").wdsMargins.marginVer8,
              ),
            ),
          )),
          (n[21] = x))
        : (x = n[21]);
      var $;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "15",
            children: s._(/*BTDS*/ "Total"),
          })),
          (n[22] = $))
        : ($ = n[22]);
      var P;
      n[23] !== a
        ? ((P = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.total,
            justify: "all",
            children: [
              $,
              c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                size: "15",
                weight: "medium",
                children: a,
              }),
            ],
          })),
          (n[23] = a),
          (n[24] = P))
        : (P = n[24]);
      var N;
      return (
        n[25] !== P || n[26] !== S || n[27] !== k || n[28] !== T || n[29] !== D
          ? ((N = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: S,
              children: [k, I, T, D, x, P],
            })),
            (n[25] = P),
            (n[26] = S),
            (n[27] = k),
            (n[28] = T),
            (n[29] = D),
            (n[30] = N))
          : (N = n[30]),
        N
      );
    }
    function _(e, t) {
      return e != null && e > 1
        ? s._(/*BTDS*/ '_j{"*":"{number-of-items} items","_1":"1 item"}', [
            s._plural(e, "number-of-items"),
          ])
        : s._(/*BTDS*/ "Quantity {item-quantity}", [
            s._param("item-quantity", t),
          ]);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

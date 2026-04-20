__d(
  "WAWebNativeFlowOrderDetailsHeader",
  [
    "fbt",
    "WAWebActionCheckCircleIcon.react",
    "WAWebBizGatingUtils",
    "WAWebFlex.react",
    "WAWebOrderPaymentStatus",
    "WAWebTextLineClamp.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
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
    function m(t) {
      var n = o("react-compiler-runtime").c(31),
        a = t.amount,
        i = t.documentPreview,
        l = t.isSentByMe,
        u = t.numberOfItems,
        m = t.orderId,
        _ = t.orderPaymentStatus,
        f = t.payIcons,
        g = t.quantity,
        h = t.text,
        y = t.thumbnail,
        C = t.xstyle,
        b = l ? d.bubbleOut : d.bubbleIn,
        v;
      n[0] !== b || n[1] !== C
        ? ((v = [
            d.header,
            o("WAWebUISpacing").uiPadding.top6,
            o("WAWebUISpacing").uiPadding.bottom8,
            o("WAWebUISpacing").uiPadding.horiz8,
            b,
            C,
          ]),
          (n[0] = b),
          (n[1] = C),
          (n[2] = v))
        : (v = n[2]);
      var S;
      n[3] !== m
        ? ((S = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Charge #{order}", [s._param("order", m)])
            : s._(/*BTDS*/ "Order #{order}", [s._param("order", m)])),
          (n[3] = m),
          (n[4] = S))
        : (S = n[4]);
      var R;
      n[5] !== S
        ? ((R = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            color: "secondary",
            weight: "medium",
            xstyle: d.orderId,
            size: "10",
            children: S,
          })),
          (n[5] = S),
          (n[6] = R))
        : (R = n[6]);
      var L;
      n[7] !== _
        ? ((L =
            _ === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured &&
            c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              testid: "order-header-payment-status-paid",
              color: "secondary",
              weight: "medium",
              size: "10",
              xstyle: d.orderId,
              children: [
                c.jsx(
                  o("WAWebActionCheckCircleIcon.react").ActionCheckCircleIcon,
                  { width: 12, displayInline: !0, xstyle: d.icon },
                ),
                s._(/*BTDS*/ "Paid"),
              ],
            })),
          (n[7] = _),
          (n[8] = L))
        : (L = n[8]);
      var E;
      n[9] !== R || n[10] !== L
        ? ((E = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.total,
            justify: "all",
            children: [R, L],
          })),
          (n[9] = R),
          (n[10] = L),
          (n[11] = E))
        : (E = n[11]);
      var k;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.hr,
                o("WAWebUISpacing").uiMargin.top4,
                o("WAWebUISpacing").uiMargin.bottom8,
              ),
            ),
          )),
          (n[12] = k))
        : (k = n[12]);
      var I;
      n[13] !== i || n[14] !== u || n[15] !== g || n[16] !== h || n[17] !== y
        ? ((I =
            i != null
              ? i
              : c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  className: "xh8yej3",
                  children: [
                    y != null && y !== ""
                      ? c.jsx("div", {
                          className: (e || (e = r("stylex")))(
                            d.media,
                            o("WAWebUISpacing").uiMargin.end8,
                          ),
                          style: { backgroundImage: "url(" + y + ")" },
                        })
                      : null,
                    c.jsxs("div", {
                      className: "x6ikm8r x10wlt62",
                      children: [
                        c.jsx(r("WAWebTextLineClamp.react"), {
                          maxLines: 1,
                          children: h,
                        }),
                        c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                          color: "secondary",
                          children: p(u, g),
                        }),
                      ],
                    }),
                  ],
                })),
          (n[13] = i),
          (n[14] = u),
          (n[15] = g),
          (n[16] = h),
          (n[17] = y),
          (n[18] = I))
        : (I = n[18]);
      var T;
      n[19] !== f
        ? ((T =
            f != null &&
            (f == null ? void 0 : f.length) > 0 &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      d.hr,
                      o("WAWebUISpacing").uiMargin.vert8,
                    ),
                  ),
                ),
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: d.total,
                  justify: "all",
                  align: "center",
                  testid: "order-header-pay-with-row",
                  children: [
                    c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      size: "14",
                      children: s._(/*BTDS*/ "Pay with"),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: d.icon,
                      justify: "end",
                      children: f,
                    }),
                  ],
                }),
              ],
            })),
          (n[19] = f),
          (n[20] = T))
        : (T = n[20]);
      var D;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.hr,
                o("WAWebUISpacing").uiMargin.vert8,
              ),
            ),
          )),
          (n[21] = D))
        : (D = n[21]);
      var x;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "15",
            children: s._(/*BTDS*/ "Total"),
          })),
          (n[22] = x))
        : (x = n[22]);
      var $;
      n[23] !== a
        ? (($ = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.total,
            justify: "all",
            children: [
              x,
              c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                size: "15",
                weight: "medium",
                children: a,
              }),
            ],
          })),
          (n[23] = a),
          (n[24] = $))
        : ($ = n[24]);
      var P;
      return (
        n[25] !== $ || n[26] !== v || n[27] !== E || n[28] !== I || n[29] !== T
          ? ((P = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: v,
              children: [E, k, I, T, D, $],
            })),
            (n[25] = $),
            (n[26] = v),
            (n[27] = E),
            (n[28] = I),
            (n[29] = T),
            (n[30] = P))
          : (P = n[30]),
        P
      );
    }
    function p(e, t) {
      return e != null && e > 1
        ? s._(/*BTDS*/ '_j{"*":"{number-of-items} items","_1":"1 item"}', [
            s._plural(e, "number-of-items"),
          ])
        : s._(/*BTDS*/ "Quantity {item-quantity}", [
            s._param("item-quantity", t),
          ]);
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);

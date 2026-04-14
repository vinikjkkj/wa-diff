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
      var n = t.amount,
        a = t.documentPreview,
        i = t.isSentByMe,
        l = t.numberOfItems,
        u = t.orderId,
        m = t.orderPaymentStatus,
        _ = t.payIcons,
        f = t.quantity,
        g = t.text,
        h = t.thumbnail,
        y = t.xstyle;
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          d.header,
          o("WAWebUISpacing").uiPadding.top6,
          o("WAWebUISpacing").uiPadding.bottom8,
          o("WAWebUISpacing").uiPadding.horiz8,
          i ? d.bubbleOut : d.bubbleIn,
          y,
        ],
        children: [
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.total,
            justify: "all",
            children: [
              c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                color: "secondary",
                weight: "medium",
                xstyle: d.orderId,
                size: "10",
                children: o(
                  "WAWebBizGatingUtils",
                ).isOrderContentOptimizationEnabled()
                  ? s._(/*BTDS*/ "Charge #{order}", [s._param("order", u)])
                  : s._(/*BTDS*/ "Order #{order}", [s._param("order", u)]),
              }),
              m === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured &&
                c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                  testid: void 0,
                  color: "secondary",
                  weight: "medium",
                  size: "10",
                  xstyle: d.orderId,
                  children: [
                    c.jsx(
                      o("WAWebActionCheckCircleIcon.react")
                        .ActionCheckCircleIcon,
                      { width: 12, displayInline: !0, xstyle: d.icon },
                    ),
                    s._(/*BTDS*/ "Paid"),
                  ],
                }),
            ],
          }),
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.hr,
                o("WAWebUISpacing").uiMargin.top4,
                o("WAWebUISpacing").uiMargin.bottom8,
              ),
            ),
          ),
          a != null
            ? a
            : c.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                className: "xh8yej3",
                children: [
                  h != null && h !== ""
                    ? c.jsx("div", {
                        className: (e || (e = r("stylex")))(
                          d.media,
                          o("WAWebUISpacing").uiMargin.end8,
                        ),
                        style: { backgroundImage: "url(" + h + ")" },
                      })
                    : null,
                  c.jsxs("div", {
                    className: "x6ikm8r x10wlt62",
                    children: [
                      c.jsx(r("WAWebTextLineClamp.react"), {
                        maxLines: 1,
                        children: g,
                      }),
                      c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                        color: "secondary",
                        children: p(l, f),
                      }),
                    ],
                  }),
                ],
              }),
          _ != null &&
            (_ == null ? void 0 : _.length) > 0 &&
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
                  testid: void 0,
                  children: [
                    c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      size: "14",
                      children: s._(/*BTDS*/ "Pay with"),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: d.icon,
                      justify: "end",
                      children: _,
                    }),
                  ],
                }),
              ],
            }),
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              e.props(d.hr, o("WAWebUISpacing").uiMargin.vert8),
            ),
          ),
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: d.total,
            justify: "all",
            children: [
              c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                size: "15",
                children: s._(/*BTDS*/ "Total"),
              }),
              c.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                size: "15",
                weight: "medium",
                children: n,
              }),
            ],
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
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

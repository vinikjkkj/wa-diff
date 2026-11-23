__d(
  "WAWebNativeFlowOrderDetailsHeader",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebOrderGatingUtils",
    "WAWebOrderPaymentStatus",
    "WAWebTextLineClamp.react",
    "WDSIconIcCheckCircleFilled.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
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
        orderId: { textTransform: "xtvhhri", $$css: !0 },
        orderInfoWrapper: { width: "xh8yej3", $$css: !0 },
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
      var n = t.amount,
        a = t.documentPreview,
        i = t.isSentByMe,
        l = t.numberOfItems,
        u = t.orderId,
        p = t.orderPaymentStatus,
        f = t.payIcons,
        g = t.quantity,
        h = t.text,
        y = t.thumbnail,
        C = t.xstyle;
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: [
          m.header,
          d.paddingTop6,
          o("WDSPaddings.stylex").wdsPaddings.paddingBottom8,
          o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
          i ? m.bubbleOut : m.bubbleIn,
          C,
        ],
        children: [
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.total,
            justify: "all",
            children: [
              c.jsx("div", {
                "data-testid": "native-flow-order-id",
                children: c.jsx(r("WDSText.react"), {
                  type: "Body3Emphasized",
                  colorName: "contentDeemphasized",
                  testid: "native-flow-order-id-text",
                  xstyle: m.orderId,
                  children: o(
                    "WAWebOrderGatingUtils",
                  ).isOrderContentOptimizationEnabled()
                    ? s._(/*BTDS*/ "", [s._param("order", u)])
                    : s._(/*BTDS*/ "", [s._param("order", u)]),
                }),
              }),
              p === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured &&
                c.jsx("div", {
                  "data-testid": "order-header-payment-status-paid",
                  children: c.jsxs(r("WDSText.react"), {
                    type: "Body3Emphasized",
                    colorName: "contentDeemphasized",
                    testid: "native-flow-order-paid-text",
                    xstyle: m.orderId,
                    children: [
                      c.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                        width: 12,
                        displayInline: !0,
                        colorName: "accent",
                        xstyle: m.icon,
                      }),
                      s._(/*BTDS*/ ""),
                    ],
                  }),
                }),
            ],
          }),
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                m.hr,
                o("WDSMargins.stylex").wdsMargins.marginTop4,
                o("WDSMargins.stylex").wdsMargins.marginBottom8,
              ),
            ),
          ),
          a != null
            ? a
            : c.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: m.orderInfoWrapper,
                children: [
                  y != null && y !== ""
                    ? c.jsx("div", {
                        className: (e || (e = r("stylex")))(
                          m.media,
                          o("WDSMargins.stylex").wdsMargins.marginEnd8,
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
                      c.jsx("p", {
                        "data-testid":
                          "native-flow-order-item-quantity-paragraph",
                        children: c.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDeemphasized",
                          testid: "native-flow-order-item-quantity",
                          children: _(l, g),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          f != null &&
            (f == null ? void 0 : f.length) > 0 &&
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
                    c.jsx("p", {
                      "data-testid": "native-flow-order-pay-with-paragraph",
                      children: c.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        testid: "native-flow-order-pay-with",
                        children: s._(/*BTDS*/ ""),
                      }),
                    }),
                    c.jsx(o("WAWebFlex.react").FlexRow, {
                      xstyle: m.icon,
                      justify: "end",
                      children: f,
                    }),
                  ],
                }),
              ],
            }),
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              e.props(m.hr, o("WDSMargins.stylex").wdsMargins.marginVer8),
            ),
          ),
          c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.total,
            justify: "all",
            children: [
              c.jsx("p", {
                "data-testid": "native-flow-order-total-label-paragraph",
                children: c.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  testid: "native-flow-order-total-label",
                  children: s._(/*BTDS*/ ""),
                }),
              }),
              c.jsx("p", {
                "data-testid": "native-flow-order-total-value-paragraph",
                children: c.jsx(r("WDSText.react"), {
                  type: "Body1Emphasized",
                  colorName: "contentDefault",
                  testid: "native-flow-order-total-value",
                  children: n,
                }),
              }),
            ],
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      return e != null && e > 1
        ? s._(/*BTDS*/ "", [s._plural(e, "number-of-items")])
        : s._(/*BTDS*/ "", [s._param("item-quantity", t)]);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

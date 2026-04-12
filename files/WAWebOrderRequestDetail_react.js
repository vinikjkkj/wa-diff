__d(
  "WAWebOrderRequestDetail.react",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizOrderDetailAction",
    "WAWebClock",
    "WAWebCurrencyUtils",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebName.react",
    "WAWebUISpacing",
    "isStringNullOrEmpty",
    "react",
    "stylex",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = 65,
      m = {
        orderInfo: {
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        orderSubDetails: {
          color: "x1mhprgp",
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          $$css: !0,
        },
        title: {
          color: "x6o5irq",
          fontSize: "x1jchvi3",
          justifyContent: "x1qughib",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
      };
    function p(t) {
      var n,
        a = t.contactAndOrderInfo,
        i = r("useWAWebUIM")(),
        l = function () {
          a.msg.orderId != null &&
            o("WAWebBizOrderDetailAction").openOrderRequestDrawer(
              a.msg,
              i,
              r("WAWebBizEntryPoint").ORDER_REQUEST_LIST,
            );
        };
      return c.jsxs("button", {
        "data-testid": void 0,
        onClick: l,
        className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3",
        children: [
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.vert12,
                o("WAWebUISpacing").uiPadding.horiz16,
              ),
              {
                children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: a.contact.id,
                  size: 40,
                }),
              },
            ),
          ),
          c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              e.props(
                m.orderInfo,
                o("WAWebUISpacing").uiPadding.vert10,
                o("WAWebUISpacing").uiPadding.end16,
              ),
              {
                children: [
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: m.title,
                    children: [
                      c.jsx(o("WAWebName.react").Name, {
                        titlify: !0,
                        ellipsify: !0,
                        className: "x1iyjqo2",
                        contact: a.contact,
                      }),
                      !r("isStringNullOrEmpty")(a.orderInfo.currency) &&
                        c.jsx("span", {
                          children: o("WAWebCurrencyUtils").formatAmount(
                            a.orderInfo.currency,
                            ((n = a.orderInfo.totalAmount) != null ? n : 0) /
                              1e3,
                          ),
                        }),
                    ],
                  }),
                  c.jsx(o("WAWebFlex.react").FlexRow, {
                    xstyle: m.orderSubDetails,
                    children: c.jsx("span", {
                      children: s._(/*BTDS*/ "Sent {time}", [
                        s._param(
                          "time",
                          o("WAWebClock")
                            .Clock.relativeDateAndTimeStr(a.msg.t)
                            .toString(),
                        ),
                      ]),
                    }),
                  }),
                ],
              },
            ),
          ),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

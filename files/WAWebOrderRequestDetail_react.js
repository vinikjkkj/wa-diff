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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(26),
        a = t.contactAndOrderInfo,
        i = r("useWAWebUIM")(),
        l;
      n[0] !== a.msg || n[1] !== i
        ? ((l = function () {
            a.msg.orderId != null &&
              o("WAWebBizOrderDetailAction").openOrderRequestDrawer(
                a.msg,
                i,
                r("WAWebBizEntryPoint").ORDER_REQUEST_LIST,
              );
          }),
          (n[0] = a.msg),
          (n[1] = i),
          (n[2] = l))
        : (l = n[2]);
      var u = l,
        d,
        p;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3" }),
          (p = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.vert12,
            o("WAWebUISpacing").uiPadding.horiz16,
          )),
          (n[3] = d),
          (n[4] = p))
        : ((d = n[3]), (p = n[4]));
      var _;
      n[5] !== a.contact.id
        ? ((_ = c.jsx(
            "div",
            babelHelpers.extends({}, p, {
              children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: a.contact.id,
                size: 40,
              }),
            }),
          )),
          (n[5] = a.contact.id),
          (n[6] = _))
        : (_ = n[6]);
      var f;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (e || (e = r("stylex"))).props(
            m.orderInfo,
            o("WAWebUISpacing").uiPadding.vert10,
            o("WAWebUISpacing").uiPadding.end16,
          )),
          (n[7] = f))
        : (f = n[7]);
      var g;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = "x1iyjqo2"), (n[8] = g))
        : (g = n[8]);
      var h;
      n[9] !== a.contact
        ? ((h = c.jsx(o("WAWebName.react").Name, {
            titlify: !0,
            ellipsify: !0,
            className: g,
            contact: a.contact,
          })),
          (n[9] = a.contact),
          (n[10] = h))
        : (h = n[10]);
      var y;
      if (n[11] !== a.orderInfo.currency || n[12] !== a.orderInfo.totalAmount) {
        var C;
        ((y =
          !r("isStringNullOrEmpty")(a.orderInfo.currency) &&
          c.jsx("span", {
            children: o("WAWebCurrencyUtils").formatAmount(
              a.orderInfo.currency,
              ((C = a.orderInfo.totalAmount) != null ? C : 0) / 1e3,
            ),
          })),
          (n[11] = a.orderInfo.currency),
          (n[12] = a.orderInfo.totalAmount),
          (n[13] = y));
      } else y = n[13];
      var b;
      n[14] !== h || n[15] !== y
        ? ((b = c.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: m.title,
            children: [h, y],
          })),
          (n[14] = h),
          (n[15] = y),
          (n[16] = b))
        : (b = n[16]);
      var v;
      n[17] !== a.msg.t
        ? ((v = c.jsx(o("WAWebFlex.react").FlexRow, {
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
          })),
          (n[17] = a.msg.t),
          (n[18] = v))
        : (v = n[18]);
      var S;
      n[19] !== v || n[20] !== b
        ? ((S = c.jsxs(
            "div",
            babelHelpers.extends({}, f, { children: [b, v] }),
          )),
          (n[19] = v),
          (n[20] = b),
          (n[21] = S))
        : (S = n[21]);
      var R;
      return (
        n[22] !== u || n[23] !== S || n[24] !== _
          ? ((R = c.jsxs(
              "button",
              babelHelpers.extends({ "data-testid": void 0, onClick: u }, d, {
                children: [_, S],
              }),
            )),
            (n[22] = u),
            (n[23] = S),
            (n[24] = _),
            (n[25] = R))
          : (R = n[25]),
        R
      );
    }
    l.default = p;
  },
  226,
);

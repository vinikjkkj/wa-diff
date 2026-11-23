__d(
  "WAWebOrderTotalPrice",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebButton.react",
    "WAWebOrdersExpansionUtils",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = e.disabled,
        n = e.onClick,
        r = e.testid,
        a = e.title;
      return c.jsx("div", {
        className: "x6s0dn4 x78zum5 xdt5ytf x98l61r",
        children: c.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          disabled: t,
          onClick: n,
          testid: r,
          children: a,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.entryPoint,
        n = t === void 0 ? null : t,
        a = e.onClick,
        i = a === void 0 ? null : a;
      return n === r("WAWebBizEntryPoint").FROM_CART &&
        i != null &&
        o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled()
        ? c.jsx("div", {
            className: "x6s0dn4 x78zum5 xdt5ytf x98l61r",
            children: c.jsx(o("WAWebButton.react").Button, {
              type: "secondary",
              onClick: i,
              testid: "decline-cart-order-button",
              children: s._(/*BTDS*/ ""),
            }),
          })
        : null;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.confirmTitle,
        o = t.disabled,
        a = t.entryPoint,
        i = a === void 0 ? null : a,
        l = t.error,
        s = l === void 0 ? null : l,
        u = t.onConfirm,
        p = t.onDeclineOrder,
        _ = p === void 0 ? null : p,
        f = t.testid,
        g = t.title,
        h = t.totalPrice,
        y = t.visible,
        C = t.xstyle;
      return y
        ? c.jsxs(
            "div",
            babelHelpers.extends(
              { "data-testid": "order-total-price-section" },
              (e || (e = r("stylex"))).props(C),
              {
                children: [
                  s == null
                    ? c.jsxs("div", {
                        className: "x78zum5 x1q0g3np x1qughib",
                        "data-testid": "total-price-container",
                        children: [
                          c.jsx(r("WDSText.react"), {
                            type: "Body2Emphasized",
                            colorName: "contentDefault",
                            testid: "order-total-price-title",
                            children: g,
                          }),
                          c.jsx("p", {
                            "data-testid": "order-total-price-amount-paragraph",
                            children: c.jsx(r("WDSText.react"), {
                              type: "Body2Emphasized",
                              colorName: "contentDefault",
                              testid: "order-total-price-amount",
                              children: h,
                            }),
                          }),
                        ],
                      })
                    : c.jsx("div", {
                        "data-testid": "order-total-price-error-wrapper",
                        className: "x2b8uid",
                        children: c.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "secondaryNegative",
                          textAlign: "center",
                          testid: "order-total-price-error",
                          children: s,
                        }),
                      }),
                  c.jsx(d, {
                    title: n,
                    onClick: u,
                    disabled: o || !!s,
                    testid: f,
                  }),
                  c.jsx(m, { entryPoint: i, onClick: _ }),
                ],
              },
            ),
          )
        : null;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.OrderApplyChangesButton = d),
      (l.OrderTotalPrice = p));
  },
  226,
);

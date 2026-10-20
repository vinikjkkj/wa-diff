__d(
  "WAWebOrderTotalPrice",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebButton.react",
    "WAWebOrdersExpansionUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.disabled,
        r = e.onClick,
        a = e.testid,
        i = e.title,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x6s0dn4 x78zum5 xdt5ytf x98l61r" }), (t[0] = l))
        : (l = t[0]);
      var s;
      return (
        t[1] !== n || t[2] !== r || t[3] !== a || t[4] !== i
          ? ((s = c.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: c.jsx(o("WAWebButton.react").Button, {
                  type: "primary",
                  disabled: n,
                  onClick: r,
                  testid: a,
                  children: i,
                }),
              }),
            )),
            (t[1] = n),
            (t[2] = r),
            (t[3] = a),
            (t[4] = i),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.entryPoint,
        a = e.onClick,
        i = n === void 0 ? null : n,
        l = a === void 0 ? null : a;
      if (
        i === r("WAWebBizEntryPoint").FROM_CART &&
        l != null &&
        o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled()
      ) {
        var u;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = { className: "x6s0dn4 x78zum5 xdt5ytf x98l61r" }), (t[0] = u))
          : (u = t[0]);
        var d;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s._(/*BTDS*/ "Decline cart")), (t[1] = d))
          : (d = t[1]);
        var m;
        return (
          t[2] !== l
            ? ((m = c.jsx(
                "div",
                babelHelpers.extends({}, u, {
                  children: c.jsx(o("WAWebButton.react").Button, {
                    type: "secondary",
                    onClick: l,
                    testid: "decline-cart-order-button",
                    children: d,
                  }),
                }),
              )),
              (t[2] = l),
              (t[3] = m))
            : (m = t[3]),
          m
        );
      }
      return null;
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.confirmTitle,
        i = t.disabled,
        l = t.entryPoint,
        s = t.error,
        u = t.onConfirm,
        p = t.onDeclineOrder,
        _ = t.testid,
        f = t.title,
        g = t.totalPrice,
        h = t.visible,
        y = t.xstyle,
        C = l === void 0 ? null : l,
        b = s === void 0 ? null : s,
        v = p === void 0 ? null : p,
        S;
      return (
        n[0] !== a ||
        n[1] !== i ||
        n[2] !== C ||
        n[3] !== b ||
        n[4] !== u ||
        n[5] !== v ||
        n[6] !== _ ||
        n[7] !== f ||
        n[8] !== g ||
        n[9] !== h ||
        n[10] !== y
          ? ((S = h
              ? c.jsxs(
                  "div",
                  babelHelpers.extends(
                    { "data-testid": "order-total-price-section" },
                    (e || (e = r("stylex"))).props(y),
                    {
                      children: [
                        b == null
                          ? c.jsxs("div", {
                              className: "x78zum5 x1q0g3np x1qughib",
                              "data-testid": "total-price-container",
                              children: [
                                c.jsx(r("WDSText.react"), {
                                  type: "Body2Emphasized",
                                  colorName: "contentDefault",
                                  testid: "order-total-price-title",
                                  children: f,
                                }),
                                c.jsx("p", {
                                  "data-testid":
                                    "order-total-price-amount-paragraph",
                                  children: c.jsx(r("WDSText.react"), {
                                    type: "Body2Emphasized",
                                    colorName: "contentDefault",
                                    testid: "order-total-price-amount",
                                    children: g,
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
                                children: b,
                              }),
                            }),
                        c.jsx(d, {
                          title: a,
                          onClick: u,
                          disabled: i || !!b,
                          testid: _,
                        }),
                        c.jsx(m, { entryPoint: C, onClick: v }),
                      ],
                    },
                  ),
                )
              : null),
            (n[0] = a),
            (n[1] = i),
            (n[2] = C),
            (n[3] = b),
            (n[4] = u),
            (n[5] = v),
            (n[6] = _),
            (n[7] = f),
            (n[8] = g),
            (n[9] = h),
            (n[10] = y),
            (n[11] = S))
          : (S = n[11]),
        S
      );
    }
    ((l.OrderApplyChangesButton = d), (l.OrderTotalPrice = p));
  },
  226,
);

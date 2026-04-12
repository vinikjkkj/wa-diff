__d(
  "WAWebOrderAdditionalChargesFormDrawer",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebModalManager",
    "WAWebOrderAdditionalChargesTextInput",
    "WAWebOrderConfirmDiscardModal",
    "WAWebOrderDetailErrorUtils",
    "WAWebOrderDetailMath",
    "WAWebOrderTotalPrice",
    "WAWebRichTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      var t = e.additionalCharges,
        n = e.currency,
        a = e.onApply,
        i = e.onBack,
        l = e.subtotal,
        c = (t == null ? void 0 : t.discountText) || "",
        p = m(c),
        _ = p[0],
        f = p[1],
        g = (t == null ? void 0 : t.taxText) || "",
        h = m(g),
        y = h[0],
        C = h[1],
        b = (t == null ? void 0 : t.shippingText) || "",
        v = m(b),
        S = v[0],
        R = v[1],
        L =
          (t == null ? void 0 : t.discountType) ||
          o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL,
        E = m(L),
        k = E[0],
        I = E[1],
        T =
          (t == null ? void 0 : t.taxType) ||
          o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL,
        D = m(T),
        x = D[0],
        $ = D[1],
        P = m(!1),
        N = P[0],
        M = P[1],
        w = m(!1),
        A = w[0],
        F = w[1],
        O = d(
          function () {
            return o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler(
              { currency: n, value: S },
            );
          },
          [n, S],
        ),
        B = [N, A, O].some(function (e) {
          return e;
        }),
        W = c !== _ || g !== y || b !== S || L !== k || T !== x;
      return u.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-additional-charges",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Add discount, shipping or tax"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: W
              ? function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: i }),
                  );
                }
              : i,
            focusBackOrCancel: !0,
          }),
          u.jsxs(r("WAWebDrawerSection.react"), {
            className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
            children: [
              u.jsx(r("WAWebOrderAdditionalChargesTextInput"), {
                text: _,
                testid: void 0,
                label: s._(/*BTDS*/ "Discount"),
                symbol: k,
                currency: n,
                priceValue: l,
                setText: f,
                setError: M,
                setSymbol: I,
              }),
              u.jsx(o("WAWebRichTextField.react").RichTextField, {
                value: S,
                testid: void 0,
                placeholder: s._(/*BTDS*/ "Shipping ({currency_symbol})", [
                  s._param(
                    "currency_symbol",
                    o("WAWebCurrencyUtils").formatAmount1000ToParts(n, 0)
                      .symbol,
                  ),
                ]),
                onChange: function (t) {
                  return R(t.text);
                },
                theme: "small",
                maxLength: 10,
                customStyleThemes: [
                  o("WAWebRichTextField.react").TextInputCustomStyleThemes
                    .Desaturated,
                ],
                error: O,
              }),
              u.jsx(r("WAWebOrderAdditionalChargesTextInput"), {
                text: y,
                testid: void 0,
                label: s._(/*BTDS*/ "Tax"),
                symbol: x,
                currency: n,
                priceValue: l,
                setText: C,
                setError: F,
                setSymbol: $,
              }),
              u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
                disabled: B,
                testid: void 0,
                title: s._(/*BTDS*/ "Apply"),
                onClick: function () {
                  return a({
                    discountText: _,
                    discountType: k,
                    shippingText: S,
                    taxText: y,
                    taxType: x,
                  });
                },
              }),
            ],
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);

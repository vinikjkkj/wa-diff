__d(
  "WAWebOrderAdditionalChargesFormDrawer",
  [
    "fbt",
    "WAWebCurrencyUtils",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebOrderAdditionalChargesTextInput",
    "WAWebOrderConfirmDiscardModal",
    "WAWebOrderDetailErrorUtils",
    "WAWebOrderDetailMathDefaultOffset",
    "WAWebOrderDetailMathPercentageSymbol",
    "WAWebOrderTotalPrice",
    "WAWebRichTextField.react",
    "WDSDialogBridge",
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
          o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL,
        E = m(L),
        k = E[0],
        I = E[1],
        T =
          (t == null ? void 0 : t.taxType) ||
          o("WAWebOrderDetailMathPercentageSymbol").PERCENTAGE_SYMBOL,
        D = m(T),
        x = D[0],
        $ = D[1],
        P = s._(/*BTDS*/ ""),
        N = s._(/*BTDS*/ ""),
        M = l / o("WAWebOrderDetailMathDefaultOffset").DEFAULT_OFFSET,
        w = d(
          function () {
            return o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler(
              {
                currency: n,
                enablePercentValueCheck: !0,
                fieldType: k,
                label: P,
                maxFlatValue: M,
                value: _,
              },
            );
          },
          [n, k, _, P, M],
        ),
        A = d(
          function () {
            return o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler(
              {
                currency: n,
                enablePercentValueCheck: !0,
                fieldType: x,
                label: N,
                maxFlatValue: M,
                value: y,
              },
            );
          },
          [n, x, y, N, M],
        ),
        F = d(
          function () {
            return o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler(
              { currency: n, value: S },
            );
          },
          [n, S],
        ),
        O = [w, A, F].some(function (e) {
          return e;
        }),
        B = c !== _ || g !== y || b !== S || L !== k || T !== x;
      return u.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-additional-charges",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ ""),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: B
              ? function () {
                  o("WDSDialogBridge").openWDSDialog(
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
                testid: "additional-charges-discount-input",
                label: P,
                symbol: k,
                currency: n,
                errorText: w,
                setText: f,
                setSymbol: I,
              }),
              u.jsx(o("WAWebRichTextField.react").RichTextField, {
                value: S,
                testid: "additional-charges-shipping-input",
                placeholder: s._(/*BTDS*/ "", [
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
                error: F,
              }),
              u.jsx(r("WAWebOrderAdditionalChargesTextInput"), {
                text: y,
                testid: "additional-charges-tax-input",
                label: N,
                symbol: x,
                currency: n,
                errorText: A,
                setText: C,
                setSymbol: $,
              }),
              u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
                disabled: O,
                testid: "apply-additional-costs-button",
                title: s._(/*BTDS*/ ""),
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

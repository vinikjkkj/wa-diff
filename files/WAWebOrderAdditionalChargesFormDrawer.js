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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(60),
        n = e.additionalCharges,
        a = e.currency,
        i = e.onApply,
        l = e.onBack,
        c = e.subtotal,
        d = (n == null ? void 0 : n.discountText) || "",
        p = m(d),
        f = p[0],
        g = p[1],
        h = (n == null ? void 0 : n.taxText) || "",
        y = m(h),
        C = y[0],
        b = y[1],
        v = (n == null ? void 0 : n.shippingText) || "",
        S = m(v),
        R = S[0],
        L = S[1],
        E =
          (n == null ? void 0 : n.discountType) ||
          o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL,
        k = m(E),
        I = k[0],
        T = k[1],
        D =
          (n == null ? void 0 : n.taxType) ||
          o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL,
        x = m(D),
        $ = x[0],
        P = x[1],
        N;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = s._(/*BTDS*/ "Discount")), (t[0] = N))
        : (N = t[0]);
      var M = N,
        w;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s._(/*BTDS*/ "Tax")), (t[1] = w))
        : (w = t[1]);
      var A = w,
        F = c / o("WAWebOrderDetailMath").DEFAULT_OFFSET,
        O;
      t[2] !== a || t[3] !== f || t[4] !== I || t[5] !== F
        ? ((O = o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler({
            currency: a,
            enablePercentValueCheck: !0,
            fieldType: I,
            label: M,
            maxFlatValue: F,
            value: f,
          })),
          (t[2] = a),
          (t[3] = f),
          (t[4] = I),
          (t[5] = F),
          (t[6] = O))
        : (O = t[6]);
      var B = O,
        W;
      t[7] !== a || t[8] !== F || t[9] !== C || t[10] !== $
        ? ((W = o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler({
            currency: a,
            enablePercentValueCheck: !0,
            fieldType: $,
            label: A,
            maxFlatValue: F,
            value: C,
          })),
          (t[7] = a),
          (t[8] = F),
          (t[9] = C),
          (t[10] = $),
          (t[11] = W))
        : (W = t[11]);
      var q = W,
        U;
      t[12] !== a || t[13] !== R
        ? ((U = o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler({
            currency: a,
            value: R,
          })),
          (t[12] = a),
          (t[13] = R),
          (t[14] = U))
        : (U = t[14]);
      var V = U,
        H = [B, q, V].some(_),
        G = d !== f || h !== C || v !== R || E !== I || D !== $,
        z;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = { surface: "unknown", viewName: "order-additional-charges" }),
          (t[15] = z))
        : (z = t[15]);
      var j;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Add discount, shipping or tax")), (t[16] = j))
        : (j = t[16]);
      var K;
      t[17] !== G || t[18] !== l
        ? ((K = G
            ? function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: l }),
                );
              }
            : l),
          (t[17] = G),
          (t[18] = l),
          (t[19] = K))
        : (K = t[19]);
      var Q;
      t[20] !== K
        ? ((Q = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: j,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: K,
            focusBackOrCancel: !0,
          })),
          (t[20] = K),
          (t[21] = Q))
        : (Q = t[21]);
      var X;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka"), (t[22] = X))
        : (X = t[22]);
      var Y;
      t[23] !== a || t[24] !== B || t[25] !== f || t[26] !== I
        ? ((Y = u.jsx(r("WAWebOrderAdditionalChargesTextInput"), {
            text: f,
            testid: "additional-charges-discount-input",
            label: M,
            symbol: I,
            currency: a,
            errorText: B,
            setText: g,
            setSymbol: T,
          })),
          (t[23] = a),
          (t[24] = B),
          (t[25] = f),
          (t[26] = I),
          (t[27] = Y))
        : (Y = t[27]);
      var J;
      t[28] !== a
        ? ((J = s._(/*BTDS*/ "Shipping ({currency_symbol})", [
            s._param(
              "currency_symbol",
              o("WAWebCurrencyUtils").formatAmount1000ToParts(a, 0).symbol,
            ),
          ])),
          (t[28] = a),
          (t[29] = J))
        : (J = t[29]);
      var Z;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function (t) {
            return L(t.text);
          }),
          (t[30] = Z))
        : (Z = t[30]);
      var ee;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (t[31] = ee))
        : (ee = t[31]);
      var te;
      t[32] !== V || t[33] !== R || t[34] !== J
        ? ((te = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            value: R,
            testid: "additional-charges-shipping-input",
            placeholder: J,
            onChange: Z,
            theme: "small",
            maxLength: 10,
            customStyleThemes: ee,
            error: V,
          })),
          (t[32] = V),
          (t[33] = R),
          (t[34] = J),
          (t[35] = te))
        : (te = t[35]);
      var ne;
      t[36] !== a || t[37] !== q || t[38] !== C || t[39] !== $
        ? ((ne = u.jsx(r("WAWebOrderAdditionalChargesTextInput"), {
            text: C,
            testid: "additional-charges-tax-input",
            label: A,
            symbol: $,
            currency: a,
            errorText: q,
            setText: b,
            setSymbol: P,
          })),
          (t[36] = a),
          (t[37] = q),
          (t[38] = C),
          (t[39] = $),
          (t[40] = ne))
        : (ne = t[40]);
      var re;
      t[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = s._(/*BTDS*/ "Apply")), (t[41] = re))
        : (re = t[41]);
      var oe;
      t[42] !== f ||
      t[43] !== I ||
      t[44] !== i ||
      t[45] !== R ||
      t[46] !== C ||
      t[47] !== $
        ? ((oe = function () {
            return i({
              discountText: f,
              discountType: I,
              shippingText: R,
              taxText: C,
              taxType: $,
            });
          }),
          (t[42] = f),
          (t[43] = I),
          (t[44] = i),
          (t[45] = R),
          (t[46] = C),
          (t[47] = $),
          (t[48] = oe))
        : (oe = t[48]);
      var ae;
      t[49] !== H || t[50] !== oe
        ? ((ae = u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
            disabled: H,
            testid: "apply-additional-costs-button",
            title: re,
            onClick: oe,
          })),
          (t[49] = H),
          (t[50] = oe),
          (t[51] = ae))
        : (ae = t[51]);
      var ie;
      t[52] !== Y || t[53] !== te || t[54] !== ne || t[55] !== ae
        ? ((ie = u.jsxs(r("WAWebDrawerSection.react"), {
            className: X,
            children: [Y, te, ne, ae],
          })),
          (t[52] = Y),
          (t[53] = te),
          (t[54] = ne),
          (t[55] = ae),
          (t[56] = ie))
        : (ie = t[56]);
      var le;
      return (
        t[57] !== ie || t[58] !== Q
          ? ((le = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: z,
              children: [Q, ie],
            })),
            (t[57] = ie),
            (t[58] = Q),
            (t[59] = le))
          : (le = t[59]),
        le
      );
    }
    function _(e) {
      return e;
    }
    l.default = p;
  },
  226,
);

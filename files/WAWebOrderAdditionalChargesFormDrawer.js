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
      var t = o("react-compiler-runtime").c(50),
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
        N = m(!1),
        M = N[0],
        w = N[1],
        A = m(!1),
        F = A[0],
        O = A[1],
        B;
      t[0] !== a || t[1] !== R
        ? ((B = o("WAWebOrderDetailErrorUtils").additionalChargeErrorHandler({
            currency: a,
            value: R,
          })),
          (t[0] = a),
          (t[1] = R),
          (t[2] = B))
        : (B = t[2]);
      var W = B,
        q = [M, F, W].some(_),
        U = d !== f || h !== C || v !== R || E !== I || D !== $,
        V;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { surface: "unknown", viewName: "order-additional-charges" }),
          (t[3] = V))
        : (V = t[3]);
      var H;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = s._(/*BTDS*/ "Add discount, shipping or tax")), (t[4] = H))
        : (H = t[4]);
      var G;
      t[5] !== U || t[6] !== l
        ? ((G = U
            ? function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: l }),
                );
              }
            : l),
          (t[5] = U),
          (t[6] = l),
          (t[7] = G))
        : (G = t[7]);
      var z;
      t[8] !== G
        ? ((z = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: H,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: G,
            focusBackOrCancel: !0,
          })),
          (t[8] = G),
          (t[9] = z))
        : (z = t[9]);
      var j;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka"), (t[10] = j))
        : (j = t[10]);
      var K;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "Discount")), (t[11] = K))
        : (K = t[11]);
      var Q;
      t[12] !== a || t[13] !== f || t[14] !== I || t[15] !== c
        ? ((Q = u.jsx(r("WAWebOrderAdditionalChargesTextInput"), {
            text: f,
            testid: void 0,
            label: K,
            symbol: I,
            currency: a,
            priceValue: c,
            setText: g,
            setError: w,
            setSymbol: T,
          })),
          (t[12] = a),
          (t[13] = f),
          (t[14] = I),
          (t[15] = c),
          (t[16] = Q))
        : (Q = t[16]);
      var X;
      t[17] !== a
        ? ((X = s._(/*BTDS*/ "Shipping ({currency_symbol})", [
            s._param(
              "currency_symbol",
              o("WAWebCurrencyUtils").formatAmount1000ToParts(a, 0).symbol,
            ),
          ])),
          (t[17] = a),
          (t[18] = X))
        : (X = t[18]);
      var Y;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function (t) {
            return L(t.text);
          }),
          (t[19] = Y))
        : (Y = t[19]);
      var J;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (t[20] = J))
        : (J = t[20]);
      var Z;
      t[21] !== W || t[22] !== R || t[23] !== X
        ? ((Z = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            value: R,
            testid: void 0,
            placeholder: X,
            onChange: Y,
            theme: "small",
            maxLength: 10,
            customStyleThemes: J,
            error: W,
          })),
          (t[21] = W),
          (t[22] = R),
          (t[23] = X),
          (t[24] = Z))
        : (Z = t[24]);
      var ee;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = s._(/*BTDS*/ "Tax")), (t[25] = ee))
        : (ee = t[25]);
      var te;
      t[26] !== a || t[27] !== c || t[28] !== C || t[29] !== $
        ? ((te = u.jsx(r("WAWebOrderAdditionalChargesTextInput"), {
            text: C,
            testid: void 0,
            label: ee,
            symbol: $,
            currency: a,
            priceValue: c,
            setText: b,
            setError: O,
            setSymbol: P,
          })),
          (t[26] = a),
          (t[27] = c),
          (t[28] = C),
          (t[29] = $),
          (t[30] = te))
        : (te = t[30]);
      var ne;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = s._(/*BTDS*/ "Apply")), (t[31] = ne))
        : (ne = t[31]);
      var re;
      t[32] !== f ||
      t[33] !== I ||
      t[34] !== i ||
      t[35] !== R ||
      t[36] !== C ||
      t[37] !== $
        ? ((re = function () {
            return i({
              discountText: f,
              discountType: I,
              shippingText: R,
              taxText: C,
              taxType: $,
            });
          }),
          (t[32] = f),
          (t[33] = I),
          (t[34] = i),
          (t[35] = R),
          (t[36] = C),
          (t[37] = $),
          (t[38] = re))
        : (re = t[38]);
      var oe;
      t[39] !== q || t[40] !== re
        ? ((oe = u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
            disabled: q,
            testid: void 0,
            title: ne,
            onClick: re,
          })),
          (t[39] = q),
          (t[40] = re),
          (t[41] = oe))
        : (oe = t[41]);
      var ae;
      t[42] !== Z || t[43] !== te || t[44] !== oe || t[45] !== Q
        ? ((ae = u.jsxs(r("WAWebDrawerSection.react"), {
            className: j,
            children: [Q, Z, te, oe],
          })),
          (t[42] = Z),
          (t[43] = te),
          (t[44] = oe),
          (t[45] = Q),
          (t[46] = ae))
        : (ae = t[46]);
      var ie;
      return (
        t[47] !== ae || t[48] !== z
          ? ((ie = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: V,
              children: [z, ae],
            })),
            (t[47] = ae),
            (t[48] = z),
            (t[49] = ie))
          : (ie = t[49]),
        ie
      );
    }
    function _(e) {
      return e;
    }
    l.default = p;
  },
  226,
);

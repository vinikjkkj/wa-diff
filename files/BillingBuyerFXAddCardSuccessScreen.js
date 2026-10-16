__d(
  "BillingBuyerFXAddCardSuccessScreen",
  [
    "fbt",
    "BillingBuyerFXAddCardSuccessUtils",
    "BillingGeneratedAdsManagerAppUpsellStatusScreen.react",
    "BillingNotifyAdminSuccessIcon",
    "BillingRowContainer.react",
    "BillingWizardColumn.react",
    "BillingWizardRow.react",
    "BillingWizardText.react",
    "BillingWizardWrapper.react",
    "XMDSImage.react",
    "react",
    "react-compiler-runtime",
    "useBillingAdsManagerAppUpsell",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.buyerFXAccountCurrencyName,
        a = e.buyerFXConfirmBody,
        i = e.buyerFXLocalCurrencyName,
        l = e.confirmBuyerFXCurrency,
        c = e.creditCard,
        d = e.currency,
        m = e.onDone,
        p = e.paymentAccountID,
        _ = e.paymentIntent,
        f = e.preferredChargeCurrency,
        g = e.wrapperProps,
        h = l === !0,
        y;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== c ||
      t[4] !== d ||
      t[5] !== f ||
      t[6] !== h
        ? ((y = o(
            "BillingBuyerFXAddCardSuccessUtils",
          ).getBillingBuyerFXAddCardSuccessMessage({
            buyerFXConfirmBody: a,
            confirmBuyerFXCurrency: h,
            creditCard: c,
            currentCurrency: d,
            currentCurrencyName: n,
            preferredChargeCurrency: f,
            proposedChargeCurrencyName: i,
          })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = c),
          (t[4] = d),
          (t[5] = f),
          (t[6] = h),
          (t[7] = y))
        : (y = t[7]);
      var C = y,
        b = C.body,
        v = C.headline,
        S = _ != null ? _ : "ADD_PM",
        R;
      t[8] !== b || t[9] !== S || t[10] !== v
        ? ((R = { body: b, headline: v, paymentIntent: S, type: "SUCCESS" }),
          (t[8] = b),
          (t[9] = S),
          (t[10] = v),
          (t[11] = R))
        : (R = t[11]);
      var L = R,
        E;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(r("BillingWizardRow.react"), {
            justify: "center",
            marginBottom: 16,
            children: u.jsx(r("BillingWizardColumn.react"), {
              children: u.jsx(
                r("XMDSImage.react"),
                babelHelpers.extends(
                  { isDecorative: !0 },
                  r("BillingNotifyAdminSuccessIcon"),
                ),
              ),
            }),
          })),
          (t[12] = E))
        : (E = t[12]);
      var k;
      t[13] !== b || t[14] !== v
        ? ((k = u.jsxs(u.Fragment, {
            children: [
              E,
              u.jsx(r("BillingWizardRow.react"), {
                justify: "center",
                marginBottom: 0,
                testid: void 0,
                children: u.jsx(r("BillingWizardText.react"), {
                  body: b,
                  headline: v,
                  textAlign: "center",
                }),
              }),
            ],
          })),
          (t[13] = b),
          (t[14] = v),
          (t[15] = k))
        : (k = t[15]);
      var I = k,
        T = o(
          "useBillingAdsManagerAppUpsell",
        ).useBillingAdsManagerAppShouldUpsellWithQEExposure(S, p, L);
      if (T) {
        var D;
        t[16] !== m
          ? ((D = function () {
              return m();
            }),
            (t[16] = m),
            (t[17] = D))
          : (D = t[17]);
        var x;
        return (
          t[18] !== L ||
          t[19] !== p ||
          t[20] !== I ||
          t[21] !== D ||
          t[22] !== g
            ? ((x = u.jsx(
                r("BillingGeneratedAdsManagerAppUpsellStatusScreen.react"),
                {
                  paymentAccountID: p,
                  status: L,
                  statusBanner: I,
                  triggerEvent: D,
                  wrapperProps: g,
                },
              )),
              (t[18] = L),
              (t[19] = p),
              (t[20] = I),
              (t[21] = D),
              (t[22] = g),
              (t[23] = x))
            : (x = t[23]),
          x
        );
      }
      var $;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = s._(/*BTDS*/ "Done")), (t[24] = $))
        : ($ = t[24]);
      var P;
      t[25] !== m
        ? ((P = { action: m, label: $ }), (t[25] = m), (t[26] = P))
        : (P = t[26]);
      var N;
      t[27] !== I
        ? ((N = u.jsx(r("BillingRowContainer.react"), {
            paddingBottom: !1,
            children: I,
          })),
          (t[27] = I),
          (t[28] = N))
        : (N = t[28]);
      var M;
      return (
        t[29] !== P || t[30] !== N || t[31] !== g
          ? ((M = u.jsx(
              r("BillingWizardWrapper.react"),
              babelHelpers.extends({}, g, {
                primaryButton: P,
                title: "",
                children: N,
              }),
            )),
            (t[29] = P),
            (t[30] = N),
            (t[31] = g),
            (t[32] = M))
          : (M = t[32]),
        M
      );
    }
    l.default = c;
  },
  226,
);

__d(
  "PaymentLinkPreviewWithAmountFeature",
  [
    "PaymentLinkPreviewWithTrustSignalsFeature",
    "WALogger",
    "WAWebABProps",
    "WAWebCurrencyUtils",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = /^[1-9][0-9]*$/,
      u = /^10*$/,
      c = 1;
    function d(e, t, n) {
      if (e == null || t == null || n == null) return null;
      var r = parseInt(e, 10),
        o = parseInt(t, 10);
      return Number.isNaN(r) || Number.isNaN(o) || r < c || o < c
        ? null
        : { amount1000: r * (1e3 / o), currency: n };
    }
    function m(e, t, n) {
      return !(
        n == null ||
        !o("WAWebCurrencyUtils").isSupportedCurrency(n) ||
        e == null ||
        !s.test(e) ||
        t == null ||
        !u.test(t)
      );
    }
    function p(e, t) {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        (t == null ? void 0 : t.length) !== 1
      )
        return !1;
      var n = e == null ? void 0 : e.previewMetadata,
        r = e == null ? void 0 : e.psp;
      return !m(
        n == null ? void 0 : n.amount,
        n == null ? void 0 : n.offset,
        n == null ? void 0 : n.currency,
      ) ||
        r == null ||
        !o(
          "PaymentLinkPreviewWithTrustSignalsFeature",
        ).isPSPInTrustSignalsFeatureAllowlist(r)
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "payment_links_trust_signals_other_metatags_enabled",
          );
    }
    function _(e) {
      return o("WAWebABProps").getABPropConfigValue(
        "payment_links_trust_signals_other_metatag_kill_switch_enabled",
      )
        ? null
        : d(
            e == null ? void 0 : e.amount,
            e == null ? void 0 : e.offset,
            e == null ? void 0 : e.currency,
          );
    }
    function f(t, n, r) {
      var a;
      if (!p(t, r)) return n;
      var i = n == null || (a = n.provider) == null ? void 0 : a.paramsJson,
        l = t == null ? void 0 : t.previewMetadata;
      try {
        var s = i == null ? null : JSON.parse(i),
          u = babelHelpers.extends({}, s, {
            meta_tags: babelHelpers.extends(
              {},
              s == null ? void 0 : s.meta_tags,
              {
                amount: l == null ? void 0 : l.amount,
                offset: l == null ? void 0 : l.offset,
                currency: l == null ? void 0 : l.currency,
              },
            ),
          });
        return babelHelpers.extends({}, n, {
          provider: babelHelpers.extends({}, n == null ? void 0 : n.provider, {
            paramsJson: JSON.stringify(u),
          }),
        });
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH AMOUNT] error while parsing paramsJson from payment link metadata: ",
                "",
              ])),
            t,
          ),
          n
        );
      }
    }
    ((l.computeAmount1000 = d),
      (l.validateAmountFields = m),
      (l.isPaymentLinkPreviewWithAmountEnabled = p),
      (l.getPaymentLinkOrderHeaderComponentDisplayParamsForAmountFeature = _),
      (l.setAmountMetadata = f));
  },
  98,
);

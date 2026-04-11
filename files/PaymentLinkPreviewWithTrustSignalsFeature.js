__d(
  "PaymentLinkPreviewWithTrustSignalsFeature",
  ["WALogger", "WAWebABProps", "WAWebMobilePlatforms", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return o("WAWebMsgGetters").getHasPaymentLinkTrustSignals(e);
    }
    function c(e, t, n, r) {
      if (e == null && t == null) return !1;
      if (t == null || t.length === 0 || e !== !0) return !0;
      var a = n == null ? void 0 : n.psp;
      return a == null ||
        !d(a) ||
        r.length !== 1 ||
        o("WAWebABProps").getABPropConfigValue("payment_br_holdout")
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "payment_links_trust_signals_metatag_enabled",
          );
    }
    function d(t) {
      try {
        var n = JSON.parse(
            o("WAWebABProps").getABPropConfigValue(
              "payment_links_trust_signals_metatag_psp_list",
            ),
          ),
          r = n == null ? void 0 : n.psp;
        return Array.isArray(r) ? r.includes(t) : !1;
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH TRUST SIGNALS] error while parsing json for ab prop payment_links_trust_signals_metatag_psp_list: ",
                "",
              ])),
            t,
          ),
          !1
        );
      }
    }
    function m(e, t, n) {
      var r, a;
      if (!o("WAWebMobilePlatforms").isSMB()) return t;
      var i = e == null ? void 0 : e.previewMetadata;
      if (i == null) return t;
      var l = i.isBusinessVerified,
        u = (r = i.providerName) == null ? void 0 : r.trim();
      if (!c(l, u, e, n)) return t;
      var d = t == null || (a = t.provider) == null ? void 0 : a.paramsJson;
      try {
        var m = d == null ? null : JSON.parse(d);
        if (l != null) {
          var p;
          m = babelHelpers.extends({}, m, {
            meta_tags: babelHelpers.extends(
              {},
              (p = m) == null ? void 0 : p.meta_tags,
              { is_business_verified: l },
            ),
          });
        }
        if (u != null && u.length > 0) {
          var _;
          m = babelHelpers.extends({}, m, {
            meta_tags: babelHelpers.extends(
              {},
              (_ = m) == null ? void 0 : _.meta_tags,
              { provider_name: u },
            ),
          });
        }
        return m == null
          ? t
          : babelHelpers.extends({}, t, {
              provider: { paramsJson: JSON.stringify(m) },
            });
      } catch (e) {
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[PAYMENT LINK WITH TRUST SIGNALS] error while parsing paramsJson from payment link metadata: ",
                "",
              ])),
            e,
          ),
          t
        );
      }
    }
    ((l.shouldShowPaymentLinkTrustSignals = u),
      (l.isPSPInTrustSignalsFeatureAllowlist = d),
      (l.setMetadata = m));
  },
  98,
);

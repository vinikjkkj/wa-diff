__d(
  "WAWebPaymentLinkPreviewWithTrustSignalsFeature",
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
    function m(e) {
      var t,
        n,
        r = e.linkPreviewData,
        a = e.links,
        i = e.paymentLinkMetadata;
      if (!o("WAWebMobilePlatforms").isSMB()) return i;
      var l = r == null ? void 0 : r.previewMetadata;
      if (l == null) return i;
      var u = l.isBusinessVerified,
        d = (t = l.providerName) == null ? void 0 : t.trim();
      if (!c(u, d, r, a)) return i;
      var m = i == null || (n = i.provider) == null ? void 0 : n.paramsJson;
      try {
        var p = m == null ? null : JSON.parse(m);
        if (u != null) {
          var _;
          p = babelHelpers.extends({}, p, {
            meta_tags: babelHelpers.extends(
              {},
              (_ = p) == null ? void 0 : _.meta_tags,
              { is_business_verified: u },
            ),
          });
        }
        if (d != null && d.length > 0) {
          var f;
          p = babelHelpers.extends({}, p, {
            meta_tags: babelHelpers.extends(
              {},
              (f = p) == null ? void 0 : f.meta_tags,
              { provider_name: d },
            ),
          });
        }
        return p == null
          ? i
          : babelHelpers.extends({}, i, {
              provider: { paramsJson: JSON.stringify(p) },
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
          i
        );
      }
    }
    ((l.shouldShowPaymentLinkTrustSignals = u),
      (l.isPSPInTrustSignalsFeatureAllowlist = d),
      (l.setMetadata = m));
  },
  98,
);

__d(
  "WAWebHatchCheckoutLogging",
  ["WAWebHatchShoppingLogging", "WAWebWamEnumFeatureEntryPoint"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[A-Za-z]{3}$/,
      s = /^\d+(?:[.,]\d+)*$/,
      u = /^\d+(?:\.\d+)?$/,
      c = /^[1-9]\d{0,2},\d{3}$/;
    function d(e) {
      return (
        e.payloadType === "browser_checkout" ||
        e.payloadType === "shopify_checkout" ||
        e.payloadType === "stripe_link_checkout"
      );
    }
    function m(e) {
      if (!d(e)) return {};
      var t = f(e),
        n = t.amount,
        r = t.currency,
        a = {
          amount_type:
            e.payloadType === "shopify_checkout" ? "order_total" : "max_total",
          approval_id: e.approvalId,
          checkout_amount: p(n),
          checkout_currency: _(r),
          checkout_provider: g(e),
          presentation_id: o(
            "WAWebHatchShoppingLogging",
          ).resolveCheckoutPresentationId(e.approvalId),
        };
      return {
        featureEntryPoint: o("WAWebWamEnumFeatureEntryPoint")
          .FEATURE_ENTRY_POINT.CHAT,
        hatchUserJourneyMetadata: JSON.stringify(a),
        hitlTypes: e.rawPayloadType,
      };
    }
    function p(e) {
      if (e == null) return "unknown";
      var t = e
        .trim()
        .replace(/^[^\d]+|[^\d]+$/g, "")
        .replace(/\s+/g, "");
      if (!s.test(t)) return "unknown";
      var n = h(t);
      return u.test(n) ? n : "unknown";
    }
    function _(t) {
      var n = t == null ? void 0 : t.trim();
      return n != null && e.test(n) ? n.toUpperCase() : "unknown";
    }
    function f(e) {
      var t, n;
      if (e.payloadType === "shopify_checkout") {
        var r,
          o = e.shopifyCheckout,
          a =
            o == null
              ? void 0
              : o.totals.find(function (e) {
                  return e.type === "total";
                });
        return {
          amount:
            (r = a == null ? void 0 : a.amount) != null
              ? r
              : o == null
                ? void 0
                : o.amount,
          currency:
            a != null && a.currency.trim() !== ""
              ? a.currency
              : o == null
                ? void 0
                : o.currency,
        };
      }
      return {
        amount: (t = e.browserCheckout) == null ? void 0 : t.amount,
        currency: (n = e.browserCheckout) == null ? void 0 : n.currency,
      };
    }
    function g(e) {
      var t,
        n = (t = e.checkoutProvider) == null ? void 0 : t.trim();
      return n != null && n !== ""
        ? n
        : e.payloadType === "shopify_checkout"
          ? "unknown"
          : "muse_checkout";
    }
    function h(e) {
      var t = e.lastIndexOf("."),
        n = e.lastIndexOf(",");
      return t !== -1 && n !== -1
        ? n > t
          ? y(e, ",", ".")
          : y(e, ".", ",")
        : n !== -1
          ? C(e, ",", !0)
          : t !== -1
            ? C(e, ".", !1)
            : e;
    }
    function y(e, t, n) {
      var r = e.split(t);
      return r.length !== 2 ? "" : r[0].split(n).join("") + "." + r[1];
    }
    function C(e, t, n) {
      var r = e.split(t);
      return r.length > 2
        ? r.join("")
        : n
          ? c.test(e)
            ? r.join("")
            : r.join(".")
          : e;
    }
    ((l.isHatchCheckoutApproval = d),
      (l.getCheckoutApprovalLoggingContext = m),
      (l.parseCheckoutAmountForLogging = p),
      (l.normalizeCheckoutCurrency = _));
  },
  98,
);

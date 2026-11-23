__d(
  "WAFlowsShoppingStateUtils",
  [],
  function (t, n, r, o, a, i) {
    var e = "marketing_message",
      l = "integrated_shopping",
      s = "base_checkout_url",
      u = "consented_url",
      c = "unconsented_url",
      d = "business_consented_url";
    function m(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = e.internal) == null ? void 0 : n.shopping,
        t,
      );
    }
    function p(e, t) {
      var n,
        r = (n = e.internal) == null ? void 0 : n.shopping;
      return babelHelpers.extends({}, r, {
        offsiteCheckout: babelHelpers.extends(
          {},
          r == null ? void 0 : r.offsiteCheckout,
          t,
        ),
      });
    }
    function _(e, t) {
      var n,
        r = (n = e.internal) == null ? void 0 : n.shopping;
      return babelHelpers.extends({}, r, {
        integratedShopping: babelHelpers.extends(
          {},
          r == null ? void 0 : r.integratedShopping,
          t,
        ),
      });
    }
    function f(t) {
      var n, r, o, a;
      if (t == null) return !1;
      var i =
        (n = (r = t.internal) == null ? void 0 : r.shopping) != null ? n : t;
      return (
        (i == null ? void 0 : i.source) === e &&
        (i == null || (o = i.offsiteCheckout) == null
          ? void 0
          : o.linkoutUrls) != null &&
        (i == null || (a = i.offsiteCheckout) == null
          ? void 0
          : a.linkoutUrls.get(s)) != null
      );
    }
    function g(e) {
      var t, n;
      if (e == null) return !1;
      var r =
        (t = (n = e.internal) == null ? void 0 : n.shopping) != null ? t : e;
      return (r == null ? void 0 : r.source) === l;
    }
    ((i.SOURCE_OFFSITE_CHECKOUT = e),
      (i.SOURCE_INTEGRATED_SHOPPING = l),
      (i.LINKOUT_BASE_CHECKOUT_URL = s),
      (i.LINKOUT_USER_CONSENTED_URL = u),
      (i.LINKOUT_USER_UNCONSENTED_URL = c),
      (i.LINKOUT_BUSINESS_CONSENTED_URL = d),
      (i.getUpdatedShoppingState = m),
      (i.getUpdatedOffsiteCheckoutState = p),
      (i.getUpdatedIntegratedShoppingState = _),
      (i.isShoppingOffsiteCheckoutMessageFlow = f),
      (i.isShoppingIntegratedShoppingMessageFlow = g));
  },
  66,
);

__d(
  "getSpendLimitReachedContent",
  [
    "fbt",
    "XPaymentsBillingHubAccountDetailsControllerRouteBuilder",
    "XPaymentsBillingHubAccountsControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n =
        e != null && t != null
          ? r("XPaymentsBillingHubAccountDetailsControllerRouteBuilder")
              .buildUri({
                asset_id: t,
                business_id: e,
                entrypoint: "bm_spend_limit_banner",
              })
              .toString()
          : r("XPaymentsBillingHubAccountsControllerRouteBuilder")
              .buildUri({})
              .toString();
      return [
        {
          cta: s._(/*BTDS*/ ""),
          description:
            t != null
              ? s._(/*BTDS*/ "", [s._param("adAccountID", t)])
              : s._(/*BTDS*/ ""),
          title: s._(/*BTDS*/ ""),
          uri: n,
        },
      ];
    }
    l.default = e;
  },
  226,
);

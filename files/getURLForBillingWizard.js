__d(
  "getURLForBillingWizard",
  [
    "XPaymentsBillingHubPaymentActivityControllerRouteBuilder",
    "XPaymentsBillingHubPaymentSettingsControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/ads/manage/home/";
    function s(t, n) {
      switch (t) {
        case "PAYMENT_SETTINGS":
          return r("XPaymentsBillingHubPaymentSettingsControllerRouteBuilder")
            .buildUri({ asset_id: n })
            .toString();
        case "PAYMENT_ACTIVITY":
          return r("XPaymentsBillingHubPaymentActivityControllerRouteBuilder")
            .buildUri({ asset_id: n })
            .toString();
        case "MANAGE_CAMPAIGNS":
        case "AD_TOOLS":
          return e + ("?act=" + (n != null ? n : ""));
        default:
          return "#";
      }
    }
    l.default = s;
  },
  98,
);

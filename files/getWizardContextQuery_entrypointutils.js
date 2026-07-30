__d(
  "getWizardContextQuery.entrypointutils",
  ["BillingContextFactoryQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.businessID,
        n = e.paymentAccountID;
      return {
        billingContextQuery: {
          parameters: r("BillingContextFactoryQuery$Parameters"),
          variables: {
            hasInitCheckBusinessIds: t != null && t !== "",
            hasPaymentAccount: n != null && n !== "",
            initCheckBusinessIds: t != null && t !== "" ? [t] : [],
            paymentAccountID: n != null ? n : "",
          },
        },
      };
    }
    l.default = e;
  },
  98,
);

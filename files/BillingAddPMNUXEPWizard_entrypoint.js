__d(
  "BillingAddPMNUXEPWizard.entrypoint",
  ["BillingCountryCurrencyScreenQuery$Parameters", "JSResourceForInteraction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e;
        return {
          queries: {
            country_currency_state_display: {
              parameters: r("BillingCountryCurrencyScreenQuery$Parameters"),
              variables: {
                paymentAccountID: (e = t.paymentAccountID) != null ? e : "",
                skipVerficationOptions: !0,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "BillingAddPMNUXEPWizard.react",
      ).__setRef("BillingAddPMNUXEPWizard.entrypoint"),
    };
    l.default = e;
  },
  98,
);

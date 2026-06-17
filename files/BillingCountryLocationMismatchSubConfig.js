__d(
  "BillingCountryLocationMismatchSubConfig",
  [
    "BillingCountryCurrencyDecisionState",
    "BillingCountryCurrencyState",
    "BillingCreateNewFromOldState",
    "BillingVerifyCountrySelectDetectedLocationState",
    "BillingWizardStatesEnum",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        entryPoint: "change_business_location",
        externalTransitions: [],
        isRootConfig: !1,
        logging_context: "verify_country",
        name: "COUNTRY_LOCATION_MISMATCH_SUB_CONFIG",
        required: ["paymentAccountID"],
        states: {
          change_business_location: new (r(
            "BillingVerifyCountrySelectDetectedLocationState",
          ))({ onSelectLocation: "change_country_currency" }),
          change_country_currency: new (r("BillingCountryCurrencyState"))({
            onChangeCountryCurrency: "country_currency_decision_state",
            onNext: r("BillingWizardStatesEnum").DONE,
            onWarning: "STATUS",
          }),
          country_currency_decision_state: new (r(
            "BillingCountryCurrencyDecisionState",
          ))({
            onChangeCountryCurrency: r("BillingWizardStatesEnum")
              .CURRENCY_CHANGE,
            onFailure: "create_new_from_old",
            onNewAccount: "NEW_ACCOUNT_CREATED",
            onNext: r("BillingWizardStatesEnum").DONE,
          }),
          create_new_from_old: new (r("BillingCreateNewFromOldState"))({
            onNext: "NEW_ACCOUNT_CREATED",
            onWarning: "STATUS",
          }),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

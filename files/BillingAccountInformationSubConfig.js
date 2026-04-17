__d(
  "BillingAccountInformationSubConfig",
  [
    "BillingAccountInformationDecisionState",
    "BillingAccountInformationState",
    "BillingCheckConditionState",
    "BillingCheckCreateNewFromOldState",
    "BillingCheckHasRequiredAccountInfoState",
    "BillingCreateNewFromOldState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        entryPoint: "init",
        externalTransitions: ["NEXT", "WARNING"],
        isRootConfig: !1,
        logging_context: "billingaccountinfo",
        name: "BUSINESS_INFO_SUB",
        required: ["paymentAccountID"],
        states: {
          account_info_changed: new (r(
            "BillingAccountInformationDecisionState",
          ))({ onNext: "NEXT", onWarning: "create_new_from_old" }),
          check_has_required_account_info: new (r(
            "BillingCheckHasRequiredAccountInfoState",
          ))({ fail: "collect_account_info", pass: "collect_account_info" }),
          check_mv4b: new (r("BillingCheckConditionState"))(
            {
              fail: "NEW_ACCOUNT_CREATED",
              pass: "check_has_required_account_info",
            },
            function (e) {
              var t = e.product;
              return t === "MV4B";
            },
          ),
          collect_account_info: new (r("BillingAccountInformationState"))({
            onAccountInfoChanged: "account_info_changed",
            onNext: "NEXT",
          }),
          create_new_from_old: new (r("BillingCreateNewFromOldState"))({
            onNext: "check_mv4b",
            onWarning: "STATUS",
          }),
          init: new (r("BillingCheckCreateNewFromOldState"))({
            onCreateNewFromOld: "create_new_from_old",
            onSkipCreateNewFromOld: "check_has_required_account_info",
          }),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

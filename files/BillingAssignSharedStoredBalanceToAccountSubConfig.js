__d(
  "BillingAssignSharedStoredBalanceToAccountSubConfig",
  ["BillingConfirmSharedStoredBalanceAssignState", "BillingWizardStatesEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        entryPoint: "confirm_assign_to_account",
        externalTransitions: [],
        isRootConfig: !1,
        logging_context: "billingdefault",
        name: "ASSIGN_SHARED_STORED_BALANCE_TO_ACCOUNT_SUB_CONFIG",
        required: ["paymentAccountID", "paymentMethodID"],
        states: {
          confirm_assign_to_account: new (r(
            "BillingConfirmSharedStoredBalanceAssignState",
          ))({ onNext: r("BillingWizardStatesEnum").DONE }),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

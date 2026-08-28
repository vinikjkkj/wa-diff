__d(
  "BillingMIEditBillingInfoSubConfig",
  [
    "BillingMIEditBillingInfoState",
    "BillingMIScheduleUpdateState",
    "BillingMIUpsertAddressState",
    "BillingMIValidateAddressState",
    "BillingWizardStatesEnum",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        entryPoint: "edit_info",
        externalTransitions: ["ERROR"],
        isRootConfig: !1,
        logging_context: "billingmonthlyinvoicing",
        name: "MI_EDIT_BILLING_INFO",
        required: ["paymentAccountID", "paymentMethodID"],
        states: {
          edit_info: new (r("BillingMIEditBillingInfoState"))({
            onCancelUpdate: "STATUS",
            onChangeAddress: "upsert_address",
            onDone: "STATUS",
            onError: "ERROR",
            onNext: r("BillingWizardStatesEnum").DONE,
            onSchedule: "schedule_update",
          }),
          schedule_update: new (r("BillingMIScheduleUpdateState"))({
            onDone: r("BillingWizardStatesEnum").DONE,
            onNext: "STATUS",
          }),
          upsert_address: new (r("BillingMIUpsertAddressState"))({
            onNext: "edit_info",
            onValidate: "validate_address",
          }),
          validate_address: new (r("BillingMIValidateAddressState"))({
            onNext: "edit_info",
          }),
        },
      },
      s = e;
    l.default = s;
  },
  98,
);

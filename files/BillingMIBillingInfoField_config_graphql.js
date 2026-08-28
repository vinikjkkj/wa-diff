__d(
  "BillingMIBillingInfoField_config.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingMIBillingInfoField_config",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingMIBillingInfoInvoiceGroupView_config",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingMIBillingInfoDefaultInvoicingEmailsView_config",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "BillingMIBillingInfoAccountInvoicingEmailsView_config",
        },
      ],
      type: "XFBIMonthlyInvoicingBillingInfoFieldConfig",
      abstractKey: "__isXFBIMonthlyInvoicingBillingInfoFieldConfig",
    };
    a.exports = e;
  },
  null,
);

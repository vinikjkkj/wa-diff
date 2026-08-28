__d(
  "BillingMIBillingInfoInvoiceGroupView_config.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingMIBillingInfoInvoiceGroupView_config",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "ExtendedCreditInvoiceGroup",
          kind: "LinkedField",
          name: "value_options",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "invoice_group_name",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_edit_disabled",
          storageKey: null,
        },
      ],
      type: "XFBMonthlyInvoicingInvoiceGroupBillingInfoField",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);

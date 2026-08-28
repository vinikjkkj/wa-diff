__d(
  "BillingMIBillingInfoView_config.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingMIBillingInfoView_config",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "field_configs",
          plural: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "BillingMIBillingInfoField_config",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBEditMonthlyInvoicingBillingInfoConfig",
      abstractKey: "__isXFBEditMonthlyInvoicingBillingInfoConfig",
    };
    a.exports = e;
  },
  null,
);

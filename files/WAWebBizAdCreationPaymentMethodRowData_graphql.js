__d(
  "WAWebBizAdCreationPaymentMethodRowData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "label",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBizAdCreationPaymentMethodRowData",
        selections: [
          e,
          {
            alias: "primaryAction",
            args: null,
            concreteType: "XFBBillableAccountBillingInfoAction",
            kind: "LinkedField",
            name: "primary_action",
            plural: !1,
            selections: [
              e,
              {
                alias: "wizardName",
                args: null,
                kind: "ScalarField",
                name: "wizard_name",
                storageKey: null,
              },
              {
                alias: "wizardPropsJSON",
                args: null,
                kind: "ScalarField",
                name: "wizard_props_json",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "WAWebBizAdCreationPaymentMethodLabelData",
          },
        ],
        type: "XFBBillableAccountPaymentSectionDetails",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);

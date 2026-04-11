__d(
  "WAWebBizAdCreationPaymentDescriptionData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationPaymentDescriptionData",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        {
          alias: "descriptionAx",
          args: null,
          kind: "ScalarField",
          name: "description_ax",
          storageKey: null,
        },
        {
          alias: "inlineAction",
          args: null,
          concreteType: "XFBBillableAccountBillingInfoAction",
          kind: "LinkedField",
          name: "inline_action",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "label",
              storageKey: null,
            },
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
      ],
      type: "XFBBillableAccountPaymentSectionDetails",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);

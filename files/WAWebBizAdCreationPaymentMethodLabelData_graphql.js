__d(
  "WAWebBizAdCreationPaymentMethodLabelData.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationPaymentMethodLabelData",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "label",
          storageKey: null,
        },
        {
          alias: "labelAx",
          args: null,
          kind: "ScalarField",
          name: "label_ax",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "logos",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
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

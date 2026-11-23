__d(
  "SYDMAIBAActionHubWidgetContainer_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "SYDMAIBAActionHubWidgetContainer_fragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_dogfooding_viewer",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "AdAccount",
          kind: "LinkedField",
          name: "test_arm_ad_account",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              args: null,
              kind: "FragmentSpread",
              name: "SYDMAIBAActionHubWidget_adAccount",
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBAdsSYDMAIBAActionHubWidget",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);

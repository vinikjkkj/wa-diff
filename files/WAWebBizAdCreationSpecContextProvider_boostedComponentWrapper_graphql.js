__d(
  "WAWebBizAdCreationSpecContextProvider_boostedComponentWrapper.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationSpecContextProvider_boostedComponentWrapper",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "spec",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "regulated_categories",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useWAWebBizAdCreationAudienceSpec_boostedComponentWrapper",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useWAWebBizAdCreationBudgetSpec_boostedComponentWrapper",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useWAWebBizAdCreationDurationSpec_boostedComponentWrapper",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useWAWebBizAdCreationAdAccountSpec_boostedComponentWrapper",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useWAWebBizAdCreationPlacementSpec_boostedComponentWrapper",
        },
      ],
      type: "BoostedComponentCommonWrapper",
      abstractKey: "__isBoostedComponentCommonWrapper",
    };
    a.exports = e;
  },
  null,
);

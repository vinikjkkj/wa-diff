__d(
  "useWAWebBizAdCreationInitialAdgroupsWithPrefill_boostedComponentWrapper.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useWAWebBizAdCreationInitialAdgroupsWithPrefill_boostedComponentWrapper",
      selections: [
        {
          alias: "contextSpec",
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "context_spec",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "url",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "spec",
          plural: !1,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "useLWICometInitialAdgroups_spec",
            },
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useWAWebBizAdCreationAdAccountSpec_boostedComponentWrapper",
        },
      ],
      type: "BoostedComponentCommonWrapper",
      abstractKey: "__isBoostedComponentCommonWrapper",
    };
    a.exports = e;
  },
  null,
);

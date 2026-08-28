__d(
  "AdsAccountStoreNewCapabilitiesUpdatableQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      fragment: {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountid" },
        ],
        kind: "Fragment",
        metadata: null,
        name: "AdsAccountStoreNewCapabilitiesUpdatableQuery",
        selections: [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "legacy_account_id",
                variableName: "adAccountid",
              },
            ],
            concreteType: "AdAccount",
            kind: "LinkedField",
            name: "ad_account",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "capabilities_legacy_slow",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "Query",
        abstractKey: null,
      },
      kind: "UpdatableQuery",
    };
    a.exports = e;
  },
  null,
);

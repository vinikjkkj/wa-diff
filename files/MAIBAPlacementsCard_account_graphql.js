__d(
  "MAIBAPlacementsCard_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAPlacementsCard_account",
      selections: [
        {
          alias: "capabilities",
          args: null,
          kind: "ScalarField",
          name: "capabilities_legacy_slow",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "legacy_account_id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "modeled_reporting_type",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBAdAccountBusinessConstraints",
          kind: "LinkedField",
          name: "business_constraints",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "get_placement_controls",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);

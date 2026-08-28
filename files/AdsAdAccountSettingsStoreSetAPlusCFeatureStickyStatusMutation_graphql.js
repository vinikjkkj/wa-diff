__d(
  "AdsAdAccountSettingsStoreSetAPlusCFeatureStickyStatusMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType:
              "SetAplusCfeatureStickyStatusAdsAdAccountSettingsResponsePayload",
            kind: "LinkedField",
            name: "set_aplus_cfeature_sticky_status_ads_ad_account_settings",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdsAdAccountSettings",
                kind: "LinkedField",
                name: "ads_ad_account_settings",
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
                    alias: null,
                    args: null,
                    concreteType: "AdsAdAccountSettingsFeatureStickyEntry",
                    kind: "LinkedField",
                    name: "feature_sticky_entries",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "feature_name",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "status",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "timestamp",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsAdAccountSettingsStoreSetAPlusCFeatureStickyStatusMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsAdAccountSettingsStoreSetAPlusCFeatureStickyStatusMutation",
          selections: t,
        },
        params: {
          id: "28167160682886250",
          metadata: {},
          name: "AdsAdAccountSettingsStoreSetAPlusCFeatureStickyStatusMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

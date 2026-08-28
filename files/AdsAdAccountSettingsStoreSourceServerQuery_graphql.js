__d(
  "AdsAdAccountSettingsStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
        ],
        t = [
          {
            kind: "Variable",
            name: "ad_account_id",
            variableName: "ad_account_id",
          },
        ],
        n = {
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsAdAccountSettingsStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdsAdAccountSettings",
              kind: "LinkedField",
              name: "ads_ad_account_settings_from_ad_account",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsAdAccountSettingsStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdsAdAccountSettings",
              kind: "LinkedField",
              name: "ads_ad_account_settings_from_ad_account",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27663051876685173",
          metadata: {},
          name: "AdsAdAccountSettingsStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

__d(
  "AdsAdgroupRejectBannerDataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "entityID" },
        n = { vultureHash: "SucSMEy1IaCUPE67T4gy9MeUECM=" },
        r = [
          {
            alias: "viewerData",
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "entity_id",
                    variableName: "entityID",
                  },
                ],
                kind: "ScalarField",
                name: "is_country_eu",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "ad_account_id",
                variableName: "adAccountID",
              },
            ],
            kind: "ScalarField",
            name: "xfb_bi_eudsa13_ads_manager",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: n,
          name: "AdsAdgroupRejectBannerDataQuery",
          selections: r,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "AdsAdgroupRejectBannerDataQuery",
          selections: r,
        },
        params: {
          id: "29196470603333623",
          metadata: n,
          name: "AdsAdgroupRejectBannerDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

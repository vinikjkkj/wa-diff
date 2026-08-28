__d(
  "AdsPECampaignGroupLiveTableStoreNamespacedLoadedIDsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdsManagerLoadedObjects",
              kind: "LinkedField",
              name: "ads_manager_loaded_objects",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdCampaignGroup",
                  kind: "LinkedField",
                  name: "campaign_groups",
                  plural: !0,
                  selections: [
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
              storageKey: null,
            },
          ],
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsPECampaignGroupLiveTableStoreNamespacedLoadedIDsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsPECampaignGroupLiveTableStoreNamespacedLoadedIDsQuery",
          selections: e,
        },
        params: {
          cacheID: "98273a9f1daf8923ef6b7c0c11c92783",
          id: null,
          metadata: {},
          name: "AdsPECampaignGroupLiveTableStoreNamespacedLoadedIDsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

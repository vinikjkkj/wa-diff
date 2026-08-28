__d(
  "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedIDsQuery.graphql",
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
              concreteType: "AdCampaignGroup",
              kind: "LinkedField",
              name: "loaded_campaign_groups",
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
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedIDsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedIDsQuery",
          selections: e,
        },
        params: {
          cacheID: "094938809d9566ce2f638408d6255bac",
          id: null,
          metadata: {},
          name: "AdsPECampaignGroupLiveTableStoreRELAYNEWLoadedIDsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

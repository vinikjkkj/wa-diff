__d(
  "AdsPECampaignLiveTableStoreRELAYLoadedIDsQuery.graphql",
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
              concreteType: "AdCampaign",
              kind: "LinkedField",
              name: "loaded_campaigns",
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
          name: "AdsPECampaignLiveTableStoreRELAYLoadedIDsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsPECampaignLiveTableStoreRELAYLoadedIDsQuery",
          selections: e,
        },
        params: {
          cacheID: "09761e2306649b3fbe95e9e9f4b2d8b3",
          id: null,
          metadata: {},
          name: "AdsPECampaignLiveTableStoreRELAYLoadedIDsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

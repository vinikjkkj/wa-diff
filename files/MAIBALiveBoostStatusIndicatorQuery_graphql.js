__d(
  "MAIBALiveBoostStatusIndicatorQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupId",
          },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignGroupId" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "boost_async_publish_status",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "boost_delivery_status",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "draft_fragment_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBALiveBoostStatusIndicatorQuery",
          selections: [
            {
              alias: "campaign_group",
              args: t,
              concreteType: "AdCampaignGroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignGroupWithDraftData",
              plural: !1,
              selections: [n, r, o],
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
          name: "MAIBALiveBoostStatusIndicatorQuery",
          selections: [
            {
              alias: "campaign_group",
              args: t,
              concreteType: "AdCampaignGroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdCampaignGroupWithDraftData",
              plural: !1,
              selections: [
                n,
                r,
                o,
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
          id: "37725406853716822",
          metadata: {},
          name: "MAIBALiveBoostStatusIndicatorQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

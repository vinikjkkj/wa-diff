__d(
  "WAWebBizBroadcastProDeleteCustomAudienceMutation.graphql",
  ["WAWebBizBroadcastProDeleteCustomAudienceMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "customAudienceId",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "custom_audience_id",
                variableName: "customAudienceId",
              },
            ],
            concreteType: "WAMarketingMessagesCustomAudienceDeleteResult",
            kind: "LinkedField",
            name: "delete_wa_marketing_messages_custom_audience",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "WAWebBizBroadcastProDeleteCustomAudienceMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProDeleteCustomAudienceMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProDeleteCustomAudienceMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProDeleteCustomAudienceMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

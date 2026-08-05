__d(
  "WAWebBizBroadcastProCreateCustomAudienceMutation.graphql",
  ["WAWebBizBroadcastProCreateCustomAudienceMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "WAMarketingMessagesCustomAudienceCreateResult",
            kind: "LinkedField",
            name: "create_wa_marketing_messages_custom_audience",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "custom_audience_id",
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
          name: "WAWebBizBroadcastProCreateCustomAudienceMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProCreateCustomAudienceMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProCreateCustomAudienceMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProCreateCustomAudienceMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

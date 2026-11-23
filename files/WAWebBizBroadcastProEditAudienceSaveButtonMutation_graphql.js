__d(
  "WAWebBizBroadcastProEditAudienceSaveButtonMutation.graphql",
  ["WAWebBizBroadcastProEditAudienceSaveButtonMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "WAMarketingMessagesCustomAudienceEditResult",
            kind: "LinkedField",
            name: "edit_wa_marketing_messages_custom_audience",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "custom_audience_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "failed_operations",
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
          name: "WAWebBizBroadcastProEditAudienceSaveButtonMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProEditAudienceSaveButtonMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProEditAudienceSaveButtonMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProEditAudienceSaveButtonMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

__d(
  "WAWebBizBroadcastProUnsubscribeRecipientsMutation.graphql",
  ["WAWebBizBroadcastProUnsubscribeRecipientsMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "businessID" },
          { defaultValue: null, kind: "LocalArgument", name: "phoneNumbers" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "subscriberPoolID",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "business_id",
                    variableName: "businessID",
                  },
                  {
                    kind: "Variable",
                    name: "phone_numbers",
                    variableName: "phoneNumbers",
                  },
                  {
                    kind: "Variable",
                    name: "subscriber_pool_id",
                    variableName: "subscriberPoolID",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "WABBProUnsubscribeRecipientsResult",
            kind: "LinkedField",
            name: "bb_pro_unsubscribe_recipients",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "invalid_rows_count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "unique_rows_count",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "duplicate_rows_count",
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
          name: "WAWebBizBroadcastProUnsubscribeRecipientsMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProUnsubscribeRecipientsMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProUnsubscribeRecipientsMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProUnsubscribeRecipientsMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);

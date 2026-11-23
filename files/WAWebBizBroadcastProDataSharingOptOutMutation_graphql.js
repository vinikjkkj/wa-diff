__d(
  "WAWebBizBroadcastProDataSharingOptOutMutation.graphql",
  ["WAWebBizBroadcastProDataSharingOptOutMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
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
            concreteType: "XFBOptOutUserFromMessageActivityTrackingOutput",
            kind: "LinkedField",
            name: "xfb_opt_out_phone_numbers_from_message_activity_tracking",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "phone_numbers",
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
          name: "WAWebBizBroadcastProDataSharingOptOutMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProDataSharingOptOutMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizBroadcastProDataSharingOptOutMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProDataSharingOptOutMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
